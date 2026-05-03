const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const notesDir = path.join(root, "notes");
const docsDir = path.join(root, "docs");
const lecturesDir = path.join(docsDir, "lectures");
const assetsDir = path.join(docsDir, "assets");

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
        <div class="content">${rendered.html}${pager}</div>
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
fs.writeFileSync(path.join(docsDir, ".nojekyll"), "");

const lectures = readLectures();
buildHome(lectures);
buildLecturePages(lectures);
buildSearchIndex(lectures);

console.log(`Built ${lectures.length} lecture pages into ${docsDir}`);
