# 板块一 · 核心知识点清单（Lectures 1–8）

> 杜嘉木老师部分。覆盖细胞与基因组、细胞化学、蛋白质、DNA、基因表达调控、实验方法。

---

## Lecture 1 — Cells and Genomes

所有细胞共享的基本特征是理解这门课的起点。所有细胞都用 DNA 储存遗传信息，用 RNA 作为中间体，用蛋白质执行功能——这就是中心法则。DNA 用 A/T/G/C 四种碱基，RNA 用核糖（ribose）替代脱氧核糖，用 Uracil 替代 Thymine。所有细胞都来自已有的细胞（cell theory 第三条）。

在系统发生方面，rRNA 序列是构建生命树（Tree of Life）的经典方法，三个分支是 Eubacteria、Archaea 和 Eukarya。课件特别强调 **Archaea 在 DNA 复制/转录/翻译上更像真核生物，而在代谢和能量转换上更像细菌**。

模式生物这个考点非常适合出选择题。课件列出了 E. coli（4289 genes, 1 chromosome）、S. cerevisiae（5885 genes, 16 chromosomes）、C. elegans（20424 genes, 6 chromosomes）、D. melanogaster（13781 genes, 4 chromosomes）等，要注意**基因组大小和基因数量之间没有简单的线性关系**——比如 Arabidopsis 的基因数（27416）比人类（21077）还多。

真核基因组的特点是绝大多数序列是非编码的（人类约 98.5%，相比 E. coli 只有 11%），且富含调控 DNA。超过 200 个基因家族在三大生命域中都是保守的。克隆羊 Dolly 的例子说明一个分化细胞包含完整基因组信息。

---

## Lecture 2 — Cell Chemistry

共价键是最强的键，把原子连在一起形成分子。四种非共价作用力决定了大分子的折叠和相互作用：离子键（salt bridge）、氢键、范德华力、疏水作用力。极性分子（如水、醇）能溶于水形成氢键；非极性分子不溶于水。

细胞的四种基本建筑模块对应四类大分子：sugars → polysaccharides, fatty acids → fats/lipids/membranes, amino acids → proteins, nucleotides → nucleic acids。水是细胞主要成分，生物分子按亲水性分为 hydrophilic、hydrophobic、amphipathic（如磷脂）。

生化能量学方面需要理解 ΔG 的概念：自由能变化为负时反应自发进行。ATP 水解释放能量驱动细胞内的偶联反应。水能减弱离子键和氢键的强度。

---

## Lecture 3 — Protein Structure and Function

蛋白质四级结构是一定会考的内容。一级结构是氨基酸线性排列；二级结构是靠骨架 amide 和 carbonyl 之间的 H-bond 维持的 α-helix 和 β-sheet；三级结构是整条多肽链的整体折叠；四级结构是多条多肽链组装成的超分子复合体。

**Proline** 很刚性且无法形成分子间氢键，因此会打断 α-helix 和 β-sheet 的形成——这个点特别容易出题。蛋白质折叠到最低能量构象，体内折叠由分子伴侣（chaperones）辅助完成，比体外更快更高效。蛋白质可以组装成长螺旋纤维（helical filaments）。

蛋白质功能调控有三种方式：非共价结合调控（配体结合改变构象）；共价修饰调控，包括磷酸化/去磷酸化、泛素化/去泛素化、SUMO化、乙酰化、甲基化、棕榈酰化等——**其中很多是可逆的**；蛋白酶切割则是**不可逆**的。蛋白质水平可以在四个层面被调控：mRNA 转录、转录后、翻译、翻译后。

Prion（朊病毒）蛋白是一个非常重要的例子：错误折叠的 PrP 能"感染"正常折叠的 PrP，使其也变成异常构象，形成淀粉样蛋白纤维，极难被蛋白酶降解。

---

## Lecture 4 — DNA, Chromosomes and Genomes

核小体是真核染色体的基本结构单位。每个核小体由 ~147 bp DNA 缠绕在组蛋白八聚体上 1.7 圈，八聚体由 H2A、H2B、H3、H4 各两个拷贝组成。连接区被 Histone H1 结合。DNA 和组蛋白核心之间有 142 个氢键。组蛋白中约 1/5 的氨基酸是 Lys 或 Arg，中和 DNA 骨架的负电荷。H1 进一步把核小体压缩成 30nm 染色质纤维。

每条染色体都有三个功能元件：着丝粒（centromere，细胞分裂时把姐妹染色单体拉开）、端粒（telomere，保护末端并使其可复制）、复制起始点（replication origin）。

常染色质（euchromatin）是较松散的 30nm 纤维形式，位于间期；异染色质（heterochromatin）高度压缩，通常抑制基因表达，多在着丝粒和端粒附近。

表观遗传修饰（epigenetics）叠加在 DNA 上，通过改变染色质结构影响基因表达。组蛋白修饰中，**同一个赖氨酸的甲基化和乙酰化是不相容的**（methylation is incompatible with acetylation at the same lysine）。ATP 依赖的染色质重塑复合物可以滑动核小体或移除/替换组蛋白。含有 reader-writer 和重塑活性的复合物能沿染色质远距离传播特定修饰。

---

## Lecture 5 — DNA Replication, Repair and Recombination

DNA 复制在复制叉处进行，需要四类关键蛋白：

1. **DNA helicase**（六聚体，有 ATP 水解活性）和 SSB 蛋白打开双螺旋
2. **DNA polymerase** 和 **DNA primase** 催化聚合（primase 合成 ~10 nt RNA 引物）
3. **DNA ligase** 和 RNA 引物降解酶连接 Okazaki 片段
4. **DNA topoisomerase** 缓解超螺旋

关键区别：前导链只需一个引物，滞后链每 100-200 nt 需要一个引物。DNA polymerase 只能从 5'→3' 方向延伸，且必须有 3'-OH 才能起始（**不能 de novo 合成**）。

复制保真性靠三重校对机制：碱基互补配对、DNA polymerase 的 3'→5' 外切核酸酶活性、链定向错配修复（mismatch repair）。在 E. coli 中，旧链被 GATC 序列的 A 甲基化标记，新链暂时未甲基化，以此区分新旧链。真核中则通过新合成链上的切口（nicks）来识别。

原核 vs 真核复制的重要比较：细菌只有一个复制起始点，叉速可达 ~1000 nt/sec；真核有多个起始点（clusters of 20-80），叉速仅 ~50 nt/sec，S 期内不同起始点按特定顺序激活，异染色质晚复制、常染色质早复制。

端粒酶（telomerase）解决真核线性染色体末端复制的问题。复制时核小体重组：H3-H4 四聚体保留在亲本链上，H2A-H2B 二聚体脱落，新的 H3-H4 和 H2A-H2B 由组蛋白伴侣随机添加。

DNA 修复五种类型：

| 修复类型 | 处理的损伤 | 关键酶 |
|---|---|---|
| **BER**（碱基切除修复） | 脱氨/脱嘌呤/烷化/氧化等小改变 | DNA glycosylase → AP endonuclease → DNA polymerase → DNA ligase |
| **NER**（核苷酸切除修复） | 大体积损伤如嘧啶二聚体 | — |
| **直接化学逆转** | 特定化学修饰 | — |
| **NHEJ**（非同源末端连接） | 双链断裂，"快而脏"，导致突变 | Ku70/Ku80, DNA-PKcs |
| **HR**（同源重组） | 双链断裂，高保真 | — |

甲基化 C → T 突变占遗传病中单碱基突变的 1/3。体细胞突变只影响自身，生殖细胞突变则遗传给后代（如 BRCA-1 与家族性乳腺癌）。

---

## Lecture 6 — From DNA to Protein

原核转录起始：RNA polymerase 全酶 = 核心酶 + σ因子。E. coli 约 7 种 σ 因子，σ70 是主要的。原核启动子有 **-35 box（TTGACA）** 和 **-10 box（TATAAT）**。

真核转录需要额外因素：染色质重塑蛋白、组蛋白修饰蛋白、转录激活子、Mediator、五种通用转录因子（27个亚基）。

mRNA 的三种加工是区分真核 mRNA 和其他 RNA 的标志：

- **5'-capping**：由三种酶连续催化（磷酸酶 → 鸟苷酰转移酶 → 甲基转移酶），三者都结合在 Pol II 的 CTD 上
- **3'-poly(A) 加尾**
- **内含子剪接**

剪接由 spliceosome 催化，包含五种 snRNA（U1, U2, U4, U5, U6），各自与蛋白质结合形成 snRNP。剪接组装需要 ATP。可变剪接（alternative splicing）能从一个基因产生多种蛋白质。SR 蛋白帮助识别外显子。Nonsense-mediated mRNA decay（NMD）机制：如果核糖体遇到提前终止密码子且下游还有 EJC，该 mRNA 将被快速降解。

翻译方面：密码子是三联体（codon），共 64 种对应 20 种氨基酸加终止信号。核糖体是核酶（ribozyme），rRNA 催化肽键形成。小亚基匹配 tRNA 和 mRNA 密码子，大亚基催化肽键。

原核 vs 真核翻译起始的关键区别：

| 特征 | 原核 | 真核 |
|---|---|---|
| 起始定位 | Shine-Dalgarno 序列（5'-AGGAGGU-3'） | 5' Cap + eIFs + 40S 小亚基扫描到 Kozak 序列附近的 AUG |
| mRNA 类型 | 多顺反子（polycistronic） | 通常单顺反子 |
| 翻译速度 | ~20 aa/sec | ~2 aa/sec |
| 转录翻译关系 | 偶联 | 转录在核内，翻译在胞质 |

---

## Lecture 7 — Control of Gene Expression

基因调控蛋白通过 α-helix 和 β-sheet 结合 DNA 大沟（major groove），涉及氢键、离子键、疏水相互作用（通常 10-20 个接触）。常见结构基序包括：helix-turn-helix、homeodomain、zinc-finger（2 His + 2 Cys 与锌配位）、leucine-zipper、helix-loop-helix。很多蛋白以二聚体（dimer）形式结合 DNA，大大增强亲和力，DNA 结合元件也是对称的。

原核基因开关：

- **色氨酸操纵子**：响应单一信号的简单 on-off 开关——Trp 结合 repressor，使其可以结合 DNA，关闭操纵子
- **Lac 操纵子**：响应双信号——只有在葡萄糖缺乏（cAMP 高 → CAP+cAMP 结合 DNA 激活）且乳糖存在（Lac repressor 脱落）时才高表达

真核 vs 原核基因调控五大区别：

1. 需要五种通用转录因子
2. 无操纵子结构，单独调控每个基因
3. 受上百种调控蛋白远距离调控（10-50 kb），DNA looping 普遍
4. Mediator 连接 RNA Pol II 和调控蛋白
5. 在染色质水平上调控

真核基因调控蛋白占整个基因组编码基因的约 8%。

四种方式通过改变染色质结构来激活转录：染色质重塑复合物（nucleosome remodeling）、组蛋白伴侣移除组蛋白、组蛋白伴侣替换组蛋白、组蛋白修饰酶。组蛋白乙酰化信号标志着转录起始。正反馈环可用作记忆装置。

转录后调控九种方式：转录衰减、可变剪接、mRNA 终止位点控制、RNA 编辑、RNA 转运、mRNA 定位、mRNA 稳定性、翻译控制、miRNA/RNAi。

miRNA 加工路径：RNA Pol II 转录 → 5' capping + poly(A) → **Drosha** 在核内切割 → 导出到胞质 → **Dicer** 切割 → 装载到 **RISC**（RNA-induced silencing complex）。完全匹配导致 mRNA 降解，不完全匹配导致翻译抑制。

Riboswitches 是短 RNA 序列，结合小分子后改变构象来开关基因（如鸟嘌呤结合控制嘌呤合成基因）。

p53 肿瘤抑制蛋白用 loops 结构识别 DNA，其中 **Arg248** 是在癌症中最常突变的残基。

---

## Lecture 8 — Methods in Cell Biology

**DNA 克隆**：用限制酶切割 DNA，插入质粒载体，建立基因组 DNA 文库。cDNA 克隆从 mRNA 出发，由逆转录酶合成，不含内含子，是分析基因蛋白产物的首选。PCR 用热稳定 DNA 聚合酶在已知序列条件下直接扩增。

检测基因表达的五种方法：

| 方法 | 原理 |
|---|---|
| Reporter gene | 将启动子驱动报告基因 |
| RNA FISH | 荧光原位杂交检测 RNA |
| RT-PCR | total RNA → oligo(dT) 逆转录 → 基因特异性引物 PCR |
| cDNA microarray | RNA → cDNA → 荧光标记 → 杂交基因芯片 |
| RNA-seq | 可发现差异表达基因、SNV、Indels、miRNAs、lncRNAs |

蛋白质分离：SDS-PAGE 中，SDS 使蛋白质展开并带均匀负电荷，β-mercaptoethanol 断开二硫键，蛋白质按分子量分离。转膜后用抗体检测称为 Western blotting。Southern blotting 检测 DNA，Northern blotting 检测 RNA。

二维凝胶电泳：第一维按等电点（isoelectric point）分离，第二维按分子量分离，可分辨多达 2000 种蛋白质。

识别基因调控蛋白的技术：已知 DNA 序列时可用 gel-mobility shift assay（EMSA）检测结合蛋白，DNA affinity chromatography 纯化蛋白；已知蛋白时可用 DNA footprinting 找结合位点，**ChIP**（chromatin immunoprecipitation）鉴定蛋白在活细胞中占据的 DNA 位点。

---

## 模拟题（8 道单选）

**Q1.** 以下关于 Archaea 的描述，哪一项是正确的？

A. 在代谢和能量转换上更接近真核生物
B. 在 DNA 复制、转录和翻译上更接近真核生物
C. 完全不同于细菌和真核生物，属于独立的一类
D. 基因组大小通常大于真核生物

**Q2.** Proline 之所以能打断 α-helix 和 β-sheet 的形成，主要原因是：

A. 它是最小的氨基酸，无法填充螺旋空间
B. 它带正电荷，会与骨架产生排斥
C. 它的侧链结构刚性且无法形成分子间氢键
D. 它是唯一含硫的氨基酸

**Q3.** 在 DNA 复制过程中，以下哪种说法是正确的？

A. DNA polymerase 能从头（de novo）合成新链
B. 前导链和滞后链各需要一个 RNA 引物
C. DNA primase 合成约 10 nt 的 RNA 引物，提供 3'-OH 给 DNA polymerase
D. DNA helicase 是四聚体结构

**Q4.** 关于碱基切除修复（BER）和核苷酸切除修复（NER），以下哪项描述是正确的？

A. BER 主要处理嘧啶二聚体等大体积损伤
B. NER 的关键酶包括 DNA glycosylase
C. BER 处理脱氨、烷化、氧化等相对较小的碱基改变
D. 两者都用于修复双链断裂

**Q5.** 关于真核 mRNA 加工，以下哪项不属于成熟 mRNA 的特征？

A. 5' 端加帽（capping）
B. 3' 端多聚腺苷酸化（polyadenylation）
C. Shine-Dalgarno 序列
D. 内含子被移除（splicing）

**Q6.** Lac 操纵子高表达需要同时满足的两个条件是：

A. 葡萄糖存在 + 乳糖存在
B. 葡萄糖缺乏 + 乳糖缺乏
C. 葡萄糖缺乏 + 乳糖存在
D. 色氨酸缺乏 + 乳糖存在

**Q7.** 在 Western blotting 中，SDS 的作用是：

A. 断开蛋白质的二硫键
B. 使蛋白质展开并带上均匀的负电荷
C. 固定蛋白质在凝胶中的位置
D. 与抗体结合以检测目标蛋白

**Q8.** 关于 miRNA 的加工和功能，以下哪项是错误的？

A. miRNA 由 RNA Pol II 转录
B. 在细胞核内由 Drosha 切割
C. 在细胞质中由 Dicer 切割后装载到 RISC
D. miRNA 只能通过完全互补匹配来降解 mRNA，不能抑制翻译

---

### 参考答案

| 题号 | 答案 | 解析 |
|---|---|---|
| Q1 | **B** | Archaea 在 DNA 复制、转录和翻译的信息处理机制上更像真核生物，而在代谢和能量转换上更像细菌。 |
| Q2 | **C** | Proline 的侧链与骨架氮原子形成环状结构，使其刚性且无法作为氢键供体，因此会打断 α-helix 和 β-sheet。 |
| Q3 | **C** | DNA primase 合成短 RNA 引物（~10 nt），提供 3'-OH 给 DNA polymerase 延伸。DNA polymerase 不能 de novo 合成，helicase 是六聚体。 |
| Q4 | **C** | BER 处理小的碱基改变（脱氨、烷化、氧化等），NER 处理大体积损伤（嘧啶二聚体）。两者都不处理双链断裂（那是 NHEJ 和 HR 的事）。 |
| Q5 | **C** | Shine-Dalgarno 序列是原核生物翻译起始的定位信号，不存在于真核 mRNA 中。 |
| Q6 | **C** | Lac 操纵子高表达需要：(1) 葡萄糖缺乏（cAMP 高 → CAP+cAMP 激活）；(2) 乳糖存在（Lac repressor 脱落）。 |
| Q7 | **B** | SDS 使蛋白质展开并带上均匀的负电荷，使分离主要基于分子量。β-mercaptoethanol 才是断开二硫键的。 |
| Q8 | **D** | miRNA 既可以通过完全互补匹配降解 mRNA，也可以通过不完全匹配抑制翻译。D 选项说"只能降解，不能抑制翻译"是错误的。 |
