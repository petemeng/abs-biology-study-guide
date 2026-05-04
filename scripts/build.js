const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const notesDir = path.join(root, "notes");
const docsDir = path.join(root, "docs");
const lecturesDir = path.join(docsDir, "lectures");
const assetsDir = path.join(docsDir, "assets");
const figuresDir = path.join(assetsDir, "figures");
const wikiImageMetaPath = path.join(root, "scripts", "wiki-images.json");
const slideImageMetaPath = path.join(root, "scripts", "slide-images.json");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeXml(value) {
  return escapeHtml(value).replace(/'/g, "&apos;");
}

function chunkText(text, size = 13) {
  const value = String(text);
  if (value.includes("\n")) {
    return value.split("\n").flatMap((part) => chunkText(part, size)).slice(0, 4);
  }
  if (value.length <= size) return [value];
  const parts = [];
  let current = "";
  for (const char of value) {
    current += char;
    if (current.length >= size) {
      parts.push(current);
      current = "";
    }
  }
  if (current) parts.push(current);
  return parts.slice(0, 4);
}

function svgText(text, x, y, options = {}) {
  const {
    size = 28,
    weight = 700,
    fill = "#20231f",
    anchor = "middle",
    lineHeight = 34,
    max = 13
  } = options;
  const lines = chunkText(text, max);
  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  return `<text x="${x}" y="${startY}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}" font-family="Inter, Segoe UI, Microsoft YaHei, sans-serif">${lines.map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`).join("")}</text>`;
}

function svgBox(x, y, width, height, label, options = {}) {
  const {
    fill = "#ffffff",
    stroke = "#0f766e",
    textFill = "#20231f",
    radius = 18,
    size = 24,
    max = 12
  } = options;
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="3"/>
${svgText(label, x + width / 2, y + height / 2 + 8, { size, fill: textFill, max })}`;
}

function svgArrow(x1, y1, x2, y2, color = "#0f766e") {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="5" stroke-linecap="round" marker-end="url(#arrow)"/>`;
}

function svgShell(title, subtitle, body, options = {}) {
  const width = options.width || 1200;
  const height = options.height || 520;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)}</title>
  <desc id="desc">${escapeXml(subtitle)}</desc>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#0f766e"/>
    </marker>
    <linearGradient id="soft" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#eef7f4"/>
      <stop offset="1" stop-color="#fff8ef"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#soft)"/>
  <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="28" fill="rgba(255,255,255,0.72)" stroke="#d8ded2" stroke-width="2"/>
  ${svgText(title, 60, 78, { anchor: "start", size: 34, weight: 800, max: 28 })}
  ${subtitle ? svgText(subtitle, 60, 122, { anchor: "start", size: 19, weight: 500, fill: "#687067", max: 54 }) : ""}
  ${body}
</svg>`;
}

function flowFigure(title, subtitle, steps, options = {}) {
  const width = 1200;
  const height = options.height || 470;
  const top = options.top || 190;
  const boxW = options.boxW || Math.max(138, Math.floor((960 - (steps.length - 1) * 36) / steps.length));
  const boxH = options.boxH || 98;
  const startX = (width - (steps.length * boxW + (steps.length - 1) * 36)) / 2;
  const colors = options.colors || ["#e7f4ef", "#fff3df", "#e9eef8", "#f3ebe5", "#eaf2dc", "#f6e9ee"];
  let body = "";
  steps.forEach((step, index) => {
    const x = startX + index * (boxW + 36);
    const y = top;
    body += svgBox(x, y, boxW, boxH, step, {
      fill: colors[index % colors.length],
      stroke: index % 2 ? "#9a3412" : "#0f766e",
      size: 23,
      max: options.max || 9
    });
    if (index < steps.length - 1) {
      body += svgArrow(x + boxW + 6, y + boxH / 2, x + boxW + 30, y + boxH / 2);
    }
  });
  if (options.footer) {
    body += svgText(options.footer, width / 2, height - 62, { size: 22, weight: 600, fill: "#475047", max: 44 });
  }
  return svgShell(title, subtitle, body, { width, height });
}

function membraneFigure() {
  let body = "";
  for (let i = 0; i < 18; i += 1) {
    const x = 130 + i * 54;
    body += `<circle cx="${x}" cy="205" r="17" fill="#0f766e"/><line x1="${x - 7}" y1="222" x2="${x - 18}" y2="286" stroke="#6b8d87" stroke-width="5" stroke-linecap="round"/><line x1="${x + 7}" y1="222" x2="${x + 18}" y2="286" stroke="#6b8d87" stroke-width="5" stroke-linecap="round"/>`;
    body += `<circle cx="${x}" cy="340" r="17" fill="#0f766e"/><line x1="${x - 7}" y1="323" x2="${x - 18}" y2="260" stroke="#6b8d87" stroke-width="5" stroke-linecap="round"/><line x1="${x + 7}" y1="323" x2="${x + 18}" y2="260" stroke="#6b8d87" stroke-width="5" stroke-linecap="round"/>`;
  }
  body += `<rect x="468" y="174" width="82" height="205" rx="34" fill="#9a3412"/><rect x="650" y="222" width="96" height="104" rx="24" fill="#395b87"/>`;
  body += `<path d="M782 205 C850 156, 925 158, 988 205" fill="none" stroke="#9a3412" stroke-width="6"/><circle cx="1000" cy="204" r="12" fill="#9a3412"/>`;
  body += svgText("外侧", 82, 206, { anchor: "start", size: 22, fill: "#687067" });
  body += svgText("胞质侧", 82, 348, { anchor: "start", size: 22, fill: "#687067" });
  body += svgText("跨膜蛋白", 510, 414, { size: 22, fill: "#9a3412" });
  body += svgText("脂质筏/微域", 698, 414, { size: 22, fill: "#395b87" });
  body += svgText("糖链识别", 900, 156, { size: 22, fill: "#9a3412" });
  return svgShell("膜是动态二维平台", "脂质双层提供边界，膜蛋白和糖链执行转运、识别与信号功能", body);
}

function transportFigure() {
  let body = `<rect x="95" y="248" width="1010" height="72" rx="34" fill="#dbe7df" stroke="#b9c7bd" stroke-width="2"/>`;
  body += svgBox(150, 188, 160, 190, "通道\n顺梯度快", { fill: "#e7f4ef", stroke: "#0f766e", max: 7 });
  body += svgBox(430, 188, 170, 190, "转运体\n构象变化", { fill: "#fff3df", stroke: "#9a3412", max: 7 });
  body += svgBox(728, 188, 185, 190, "ATP泵\n逆梯度", { fill: "#e9eef8", stroke: "#395b87", max: 7 });
  body += svgArrow(230, 150, 230, 222);
  body += svgArrow(515, 380, 515, 322);
  body += svgArrow(820, 382, 820, 324, "#395b87");
  body += svgText("高浓度", 160, 142, { size: 22, fill: "#687067" });
  body += svgText("低浓度", 160, 414, { size: 22, fill: "#687067" });
  body += svgText("ATP", 930, 266, { size: 28, fill: "#395b87" });
  return svgShell("跨膜转运三种核心机器", "先判断方向和能量来源，再判断是孔道、交替暴露还是泵循环", body);
}

function vesicleFigure() {
  let body = "";
  const steps = [
    ["ER", 150, 245, "#e7f4ef"],
    ["COPII囊泡", 350, 245, "#fff3df"],
    ["Golgi", 550, 245, "#e9eef8"],
    ["TGN分选", 750, 245, "#f3ebe5"],
    ["质膜/溶酶体", 955, 245, "#eaf2dc"]
  ];
  steps.forEach(([label, x, y, fill], index) => {
    body += svgBox(x - 78, y - 50, 156, 100, label, { fill, stroke: index % 2 ? "#9a3412" : "#0f766e", max: 8 });
    if (index < steps.length - 1) body += svgArrow(x + 86, y, steps[index + 1][1] - 90, y);
  });
  body += svgText(" coat 选择货物 → Rab 指定身份 → SNARE 促融合", 600, 392, { size: 24, fill: "#475047", max: 44 });
  return svgShell("囊泡运输的方向性", "每一步都要解决出芽、剪切、识别、停靠和融合", body);
}

function signalingFigure() {
  let body = "";
  body += svgBox(80, 205, 160, 96, "信号分子", { fill: "#fff3df", stroke: "#9a3412" });
  body += svgBox(310, 205, 170, 96, "受体激活", { fill: "#e7f4ef", stroke: "#0f766e" });
  body += svgBox(550, 150, 170, 92, "第二信使", { fill: "#e9eef8", stroke: "#395b87" });
  body += svgBox(550, 280, 170, 92, "激酶/GTPase", { fill: "#f3ebe5", stroke: "#9a3412", max: 8 });
  body += svgBox(800, 205, 170, 96, "细胞响应", { fill: "#eaf2dc", stroke: "#0f766e" });
  body += svgArrow(244, 253, 302, 253);
  body += svgArrow(485, 242, 540, 200);
  body += svgArrow(485, 266, 540, 326);
  body += svgArrow(728, 198, 790, 240);
  body += svgArrow(728, 328, 790, 266);
  body += `<path d="M880 314 C790 430, 406 430, 390 314" fill="none" stroke="#9a3412" stroke-width="5" stroke-linecap="round" marker-end="url(#arrow)"/>`;
  body += svgText("负反馈/脱敏", 615, 438, { size: 22, fill: "#9a3412", max: 12 });
  return svgShell("细胞通讯不是单线，而是网络", "受体、第二信使、磷酸化、小G蛋白和反馈共同决定输出", body);
}

const figureDefinitions = {
  "01_cells_and_genomes": {
    caption: "所有生命共享 DNA→RNA→蛋白质的信息流，但通过基因组变化和表达差异产生多样性。",
    svg: flowFigure("生命共同性的主线", "细胞、基因组和进化把整门课串起来", ["细胞", "DNA", "RNA", "蛋白质", "功能", "进化"], { footer: "共同底层逻辑 + 长期变异积累 = 生命多样性" })
  },
  "02_cell_chemistry": {
    caption: "共价键负责搭骨架，非共价作用负责折叠、识别和可逆调控，ATP/活化载体把能量接入反应。",
    svg: flowFigure("细胞化学的三层逻辑", "先看键，再看水环境，最后看能量如何驱动反应", ["原子成键", "水环境", "非共价作用", "大分子组装", "ATP/载体", "酶催化"], { footer: "生命体系偏爱许多弱相互作用叠加，因为既稳定又可调" })
  },
  "03_protein_structure_and_function": {
    caption: "蛋白质从序列折叠成结构，结构决定结合与催化，调控则改变蛋白何时、何地、以何种活性工作。",
    svg: flowFigure("蛋白质从序列到功能", "理解蛋白质时始终追问：结构怎么来，功能怎么被调控", ["一级序列", "局部二级结构", "三级折叠", "结构域", "结合/催化", "调控/降解"], { footer: "变构、磷酸化、GTP开关和蛋白切割都是改变蛋白状态的方法" })
  },
  "04_dna_chromosomes_and_genome": {
    caption: "DNA 被逐级包装成染色质和染色体，包装状态同时决定基因是否容易被读取。",
    svg: flowFigure("DNA 包装与调控", "染色质不是单纯收纳，而是基因表达调控层", ["DNA双螺旋", "核小体", "染色质纤维", "染色体区域", "表观修饰", "表达状态"], { footer: "核小体位置、组蛋白修饰和三维结构共同影响基因可及性" })
  },
  "05_dna_replication_repair_and_recombination": {
    caption: "复制保证遗传信息传递，修复处理损伤，重组和转座改变基因组结构。",
    svg: flowFigure("复制、修复、重组三件事", "先分清它们解决的问题，再记具体酶和步骤", ["复制叉打开", "引物合成", "聚合延长", "校对/MMR", "损伤修复", "重组/转座"], { footer: "高保真来自碱基选择、聚合酶校对和复制后错配修复三道保险" })
  },
  "06_from_dna_to_protein": {
    caption: "从 DNA 到蛋白质不是简单两步，中间包含转录、RNA 加工、输出、翻译和蛋白质质量控制。",
    svg: flowFigure("中央法则的完整路径", "考试答题时把真核 mRNA 加工和蛋白质质量控制也写进去", ["DNA", "转录", "5' cap/剪接/polyA", "mRNA输出", "翻译", "折叠/降解"], { footer: "RNA 聚合酶能从零开始，DNA 聚合酶需要引物，这是常考对比" })
  },
  "07_control_of_gene_expression": {
    caption: "同一个基因组之所以能产生不同细胞类型，关键在组合调控、染色质状态和反馈回路。",
    svg: flowFigure("基因表达调控层级", "调控不只发生在转录起始，也发生在 RNA 和蛋白质层面", ["染色质开放", "转录因子结合", "增强子/启动子", "RNA加工", "翻译控制", "细胞身份"], { footer: "组合调控 + 正反馈 + 表观遗传维持，让细胞记住自己的状态" })
  },
  "08_manipulating_proteins_dna_rna": {
    caption: "方法学复习时先问研究问题属于哪一层，再选择能回答这个层级的方法。",
    svg: flowFigure("从问题到方法", "方法不是背清单，而是匹配研究问题", ["分离细胞", "纯化蛋白", "检测互作", "测 DNA/RNA", "改造基因", "验证功能"], { footer: "能检测存在不等于能证明功能，因果验证需要突变、敲除、救援或抑制" })
  },
  "09_membrane_structure_and_functions": {
    caption: "脂质双层提供边界，膜蛋白、糖链、胆固醇和细胞骨架共同决定膜的功能与动态组织。",
    svg: membraneFigure()
  },
  "10_cross_membrane_transport": {
    caption: "判断跨膜转运题时，先看是否顺梯度，再看能量来源，最后区分通道、转运体和泵。",
    svg: transportFigure()
  },
  "11_intracellular_compartments_and_protein_sorting": {
    caption: "蛋白质分选的核心是信号序列被对应机器识别，从而进入正确细胞器或膜系统。",
    svg: flowFigure("蛋白质分选路线图", "同一条多肽链的目的地由 topogenic signal 决定", ["游离核糖体", "信号序列", "SRP/转运孔", "ER/线粒体/核", "加工折叠", "最终定位"], { footer: "核进口走核孔，ER进口常共翻译，线粒体/过氧化物酶体多为翻译后进口" })
  },
  "12_intracellular_vesicular_traffic": {
    caption: "囊泡运输用 coat 选择货物和塑形，用 Rab/SNARE 保证靶向和融合。",
    svg: vesicleFigure()
  },
  "13_cell_communication": {
    caption: "细胞信号通路的图不是直线终点，而是由反馈、串扰和细胞背景决定的网络输出。",
    svg: signalingFigure()
  }
};

const wikiImages = fs.existsSync(wikiImageMetaPath)
  ? JSON.parse(fs.readFileSync(wikiImageMetaPath, "utf8"))
  : [];
const wikiImageBySlug = new Map(wikiImages.map((image) => [image.slug, image]));
const slideImageGroups = fs.existsSync(slideImageMetaPath)
  ? JSON.parse(fs.readFileSync(slideImageMetaPath, "utf8"))
  : [];
const slideImagesBySlug = new Map(slideImageGroups.map((group) => [group.slug, group.slides || []]));

function buildFigures() {
  ensureDir(figuresDir);
  for (const [slug, figure] of Object.entries(figureDefinitions)) {
    fs.writeFileSync(path.join(figuresDir, `${slug}.svg`), figure.svg);
  }
}

function figureHtml(lecture) {
  const figure = figureDefinitions[lecture.slug];
  if (!figure) return "";
  return `<figure class="visual-figure">
    <img src="../assets/figures/${lecture.slug}.svg" alt="${escapeHtml(lecture.title)}图解">
    <figcaption>${escapeHtml(figure.caption)}</figcaption>
  </figure>`;
}

function wikiImageHtml(lecture) {
  const image = wikiImageBySlug.get(lecture.slug);
  if (!image) return "";
  const src = `../${image.local}`;
  return `<figure class="wiki-figure">
    <div class="wiki-image-frame"><img src="${escapeHtml(src)}" alt="${escapeHtml(image.title)}"></div>
    <figcaption>
      <strong>辅助理解图：</strong>${escapeHtml(image.caption)}
      <span>来源：<a href="${escapeHtml(image.source)}" target="_blank" rel="noreferrer">${escapeHtml(image.title)}</a>，${escapeHtml(image.credit)}，${escapeHtml(image.license)}。</span>
    </figcaption>
  </figure>`;
}

function slideGalleryHtml(lecture) {
  const slides = slideImagesBySlug.get(lecture.slug) || [];
  if (!slides.length) return "";
  return `<section class="slide-gallery" aria-label="课件截图">
    <div class="slide-gallery-head">
      <h2>课件截图辅助理解</h2>
      <p>以下图片来自本地课程课件，仅随私有仓库复习使用。重点看图中机制关系，不需要逐字背图。</p>
    </div>
    <div class="slide-grid">
      ${slides.map((slide) => `<figure class="slide-card">
        <img src="../${escapeHtml(slide.file)}" alt="${escapeHtml(slide.caption)}">
        <figcaption>
          <strong>${escapeHtml(slide.caption)}</strong>
          <span>${escapeHtml(slide.source)} · page ${escapeHtml(slide.page)}</span>
        </figcaption>
      </figure>`).join("")}
    </div>
  </section>`;
}

function injectFigureAfterTitle(html, figure) {
  if (!figure) return html;
  return html.replace(/(<h1[^>]*>[\s\S]*?<\/h1>)/, `$1\n${figure}`);
}

function slugify(text) {
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/[`*_~()[\]{}:：，,。.!！?？/\\|]+/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "") || "section";
}

function stripMarkdown(text) {
  return text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_\-|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseInline(text) {
  let value = escapeHtml(text);
  value = value.replace(/`([^`]+)`/g, "<code>$1</code>");
  value = value.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  value = value.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return value;
}

function renderTable(lines) {
  const rows = lines.map((line) => line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()));
  if (rows.length < 2) return "";
  const head = rows[0];
  const body = rows.slice(2);
  return [
    "<div class=\"table-wrap\"><table>",
    "<thead><tr>",
    head.map((cell) => `<th>${parseInline(cell)}</th>`).join(""),
    "</tr></thead>",
    "<tbody>",
    body.map((row) => `<tr>${row.map((cell) => `<td>${parseInline(cell)}</td>`).join("")}</tr>`).join(""),
    "</tbody></table></div>"
  ].join("");
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  const usedIds = new Map();
  const headings = [];
  let paragraph = [];
  let list = [];
  let code = null;
  let table = [];

  function closeParagraph() {
    if (!paragraph.length) return;
    html.push(`<p>${parseInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  function closeList() {
    if (!list.length) return;
    html.push(`<ul>${list.map((item) => `<li>${parseInline(item)}</li>`).join("")}</ul>`);
    list = [];
  }

  function closeTable() {
    if (!table.length) return;
    html.push(renderTable(table));
    table = [];
  }

  for (const raw of lines) {
    const line = raw.replace(/\s+$/g, "");

    if (code !== null) {
      if (line.startsWith("```")) {
        html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
        code = null;
      } else {
        code.push(raw);
      }
      continue;
    }

    if (line.startsWith("```")) {
      closeParagraph();
      closeList();
      closeTable();
      code = [];
      continue;
    }

    if (!line.trim()) {
      closeParagraph();
      closeList();
      closeTable();
      continue;
    }

    if (/^\|.+\|$/.test(line.trim())) {
      closeParagraph();
      closeList();
      table.push(line);
      continue;
    }

    closeTable();

    const headingMatch = /^(#{1,4})\s+(.+)$/.exec(line);
    if (headingMatch) {
      closeParagraph();
      closeList();
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      const baseId = slugify(text);
      const count = usedIds.get(baseId) || 0;
      usedIds.set(baseId, count + 1);
      const id = count ? `${baseId}-${count + 1}` : baseId;
      headings.push({ level, text, id });
      html.push(`<h${level} id="${escapeHtml(id)}">${parseInline(text)}</h${level}>`);
      continue;
    }

    const bulletMatch = /^\s*[-*]\s+(.+)$/.exec(line);
    if (bulletMatch) {
      closeParagraph();
      list.push(bulletMatch[1].trim());
      continue;
    }

    paragraph.push(line.trim());
  }

  closeParagraph();
  closeList();
  closeTable();
  if (code !== null) {
    html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
  }

  return { html: html.join("\n"), headings };
}

function readLectures() {
  return fs.readdirSync(notesDir)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file, index) => {
      const markdown = fs.readFileSync(path.join(notesDir, file), "utf8").replace(/^\uFEFF/, "");
      const titleLine = markdown.split(/\r?\n/).find((line) => line.startsWith("# "));
      const title = titleLine ? titleLine.replace(/^#\s+/, "").trim() : file.replace(/\.md$/, "");
      const number = String(index + 1).padStart(2, "0");
      const slug = file.replace(/\.md$/, "");
      const summary = stripMarkdown(markdown).slice(0, 220);
      return { file, slug, number, title, markdown, summary };
    });
}

function layout({ title, body, lectures, currentSlug = "", description = "" }) {
  const nav = lectures.map((lecture) => {
    const finalHref = currentSlug === lecture.slug
      ? "#"
      : currentSlug
        ? `${lecture.slug}.html`
        : `lectures/${lecture.slug}.html`;
    return `<a class="nav-link ${currentSlug === lecture.slug ? "active" : ""}" href="${finalHref}">
      <span>${lecture.number}</span>
      <strong>${escapeHtml(lecture.title.replace(/^第\d+讲学习讲义：?/, "").replace(/^Lecture\s+\d+:\s*/i, ""))}</strong>
    </a>`;
  }).join("");

  const homeHref = currentSlug ? "../index.html" : "index.html";
  const assetsHref = currentSlug ? "../assets" : "assets";

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description || "Advanced Biological Sciences 生物学课程复习讲义")}">
  <title>${escapeHtml(title)}</title>
  <link rel="stylesheet" href="${assetsHref}/styles.css">
</head>
<body>
  <div class="progress" id="progress"></div>
  <button class="menu-button" id="menuButton" aria-label="打开目录">目录</button>
  <aside class="sidebar" id="sidebar">
    <a class="brand" href="${homeHref}">
      <span class="brand-mark">ABS</span>
      <span>
        <strong>生物学复习讲义</strong>
        <em>Advanced Biological Sciences</em>
      </span>
    </a>
    <label class="search">
      <span>搜索讲义</span>
      <input id="searchInput" type="search" placeholder="例如 Ras / 膜电位 / DNA 复制">
    </label>
    <div class="search-results" id="searchResults"></div>
    <nav class="nav">${nav}</nav>
  </aside>
  <main class="page">
    ${body}
  </main>
  <script src="${assetsHref}/app.js"></script>
</body>
</html>`;
}

function buildHome(lectures) {
  const cards = lectures.map((lecture) => `<a class="lecture-card" href="lectures/${lecture.slug}.html">
    <span>${lecture.number}</span>
    <h2>${escapeHtml(lecture.title)}</h2>
    <p>${escapeHtml(lecture.summary)}...</p>
  </a>`).join("");

  const body = `<section class="hero">
    <p class="eyebrow">Advanced Biological Sciences</p>
    <h1>一套可以认真复习的生物学课程讲义</h1>
    <p class="hero-copy">基于 ABS 目录下课件和已有笔记整理，覆盖细胞与基因组、细胞化学、蛋白质、DNA、基因表达、实验方法、膜、跨膜转运、蛋白分选、囊泡运输和细胞通讯。</p>
    <div class="hero-actions">
      <a class="primary" href="lectures/${lectures[0].slug}.html">从第 1 讲开始</a>
      <a class="secondary" href="lectures/${lectures[lectures.length - 1].slug}.html">查看最后一讲</a>
    </div>
  </section>
  <section class="overview">
    <div>
      <h2>复习路径</h2>
      <p>先抓“信息流”和“膜系统”两条主线：DNA 到蛋白质解释细胞如何制造功能分子，膜与区室解释这些分子如何被组织、运输和调控。最后用细胞通讯把所有调控逻辑串起来。</p>
    </div>
    <div>
      <h2>使用建议</h2>
      <p>每讲先读“核心问题”和“考前速记版”，再回到正文细读。遇到机制题时，把参与分子、方向、能量来源和调控开关四件事写出来。</p>
    </div>
  </section>
  <section class="card-grid">${cards}</section>`;

  fs.writeFileSync(path.join(docsDir, "index.html"), layout({
    title: "ABS 生物学课程复习讲义",
    body,
    lectures,
    description: "基于 Advanced Biological Sciences 课件整理的完整中文复习讲义。"
  }));
}

function buildLecturePages(lectures) {
  for (let index = 0; index < lectures.length; index += 1) {
    const lecture = lectures[index];
    const rendered = renderMarkdown(lecture.markdown);
    const toc = rendered.headings
      .filter((heading) => heading.level >= 2 && heading.level <= 3)
      .slice(0, 36)
      .map((heading) => `<a class="toc-level-${heading.level}" href="#${escapeHtml(heading.id)}">${escapeHtml(heading.text)}</a>`)
      .join("");
    const prev = lectures[index - 1];
    const next = lectures[index + 1];
    const contentHtml = injectFigureAfterTitle(rendered.html, `${figureHtml(lecture)}${wikiImageHtml(lecture)}${slideGalleryHtml(lecture)}`);
    const pager = `<div class="pager">
      ${prev ? `<a href="${prev.slug}.html">上一讲：${escapeHtml(prev.title)}</a>` : "<span></span>"}
      ${next ? `<a href="${next.slug}.html">下一讲：${escapeHtml(next.title)}</a>` : "<span></span>"}
    </div>`;
    const body = `<article class="article">
      <div class="article-head">
        <a class="back-home" href="../index.html">返回首页</a>
        <p class="lecture-number">Lecture ${lecture.number}</p>
      </div>
      <div class="article-layout">
        <div class="content">${contentHtml}${pager}</div>
        <aside class="toc"><strong>本讲目录</strong>${toc}</aside>
      </div>
    </article>`;
    fs.writeFileSync(path.join(lecturesDir, `${lecture.slug}.html`), layout({
      title: `${lecture.title} | ABS 复习讲义`,
      body,
      lectures,
      currentSlug: lecture.slug,
      description: lecture.summary
    }));
  }
}

function buildSearchIndex(lectures) {
  const index = lectures.map((lecture) => ({
    title: lecture.title,
    url: `lectures/${lecture.slug}.html`,
    text: stripMarkdown(lecture.markdown).slice(0, 6000)
  }));
  fs.writeFileSync(path.join(assetsDir, "search-index.json"), JSON.stringify(index, null, 2));
}

ensureDir(docsDir);
ensureDir(lecturesDir);
ensureDir(assetsDir);
ensureDir(figuresDir);
fs.writeFileSync(path.join(docsDir, ".nojekyll"), "");

const lectures = readLectures();
buildFigures();
buildHome(lectures);
buildLecturePages(lectures);
buildSearchIndex(lectures);

console.log(`Built ${lectures.length} lecture pages into ${docsDir}`);
