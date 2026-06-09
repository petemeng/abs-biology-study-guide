# 板块二 · 基础知识（Lectures 9–13）

> 覆盖膜结构与功能、跨膜转运、细胞内区室与蛋白质分选、囊泡运输、细胞通讯。

---

## 板块二完整逻辑链：从一张膜到细胞通讯

### 第一章：细胞先造了一张膜（Lecture 9）

一切从膜开始。细胞用**磷脂**搭建了一张脂双层。磷脂是两亲性分子，圆柱形的自动排成双层，把细胞内外隔开。

这张膜不是均匀的——**两侧成分不对称**。外侧放 PC、Sphingomyelin、Glycolipids（负责保护和识别），内侧放 PE、PS、PI（负责信号传导）。三种酶（Flippase 内翻、Floppase 外翻、Scramblase 打乱）维持这个不对称。Cholesterol 两侧都有，调节膜流动性。

膜上还嵌着各种**膜蛋白**：跨膜蛋白（如受体、通道、转运体）、脂质锚定蛋白（如 Ras、GPI 蛋白）、外周蛋白。所有糖基化和二硫键都在胞外面。膜蛋白不会翻转，但可以在平面内移动（除非被骨架 corralling 住）。

膜上还有**脂筏**——富含 sphingomyelin + cholesterol 的微区域，是信号平台。

**这张膜的意义：它是后面所有故事发生的舞台。**

### 第二章：东西怎么穿过这张膜（Lecture 10）

膜把内外隔开了，但细胞需要进出物质。穿膜的难度取决于分子的性质：

**小非极性分子**（N₂, O₂, CO₂）→ 直接穿过，无需帮助
**小极性分子**（水, ethanol）→ 勉强穿过，但慢
**大极性分子**（glucose）→ 穿不过，需要 **transporter** 帮忙
**离子**（Na⁺, K⁺, Ca²⁺）→ 完全穿不过，需要 **channel** 或 **transporter**

Channel 和 Transporter 的区别：channel 是一直开着的管道（或门控的），溶质直接流过，极快；transporter 每次要变构象，慢但能逆梯度搬运。

主动转运需要能量，四种 ATP 泵各管一方：P-type（Na⁺/K⁺ pump、Ca²⁺ pump、Flippase）、V-type（酸化溶酶体和内体）、F-type（ATP synthase 合成 ATP）、ABC（药物外排、Floppase、CFTR）。

离子通道和电信号：Na⁺/K⁺ pump 维持膜电位 → 电压门控 Na⁺ channel 触发动作电位 → 延迟 K⁺ channel 复极化。

**这一章解决了"小分子怎么穿膜"的问题。但蛋白质这么大的分子怎么办？→ 引出下一章。**

### 第三章：蛋白质怎么去到正确的地方（Lecture 11）

细胞造的蛋白质有上万种，要去细胞核、ER、线粒体、质膜、溶酶体等不同地方。靠什么分拣？**信号序列——蛋白质身上的地址标签。**

所有蛋白质都从胞质的核糖体开始翻译，然后分两条路：

**路线 A：走 ER 路线**
蛋白 N-端露出疏水的 signal peptide → SRP 抓住它 → 拖到 ER 膜上 → 蛋白穿过 translocator 进入 ER 腔 → signal peptide 被切掉 → 蛋白在 ER 腔中折叠、糖基化（N-linked，连在 Asparagine 上，序列 Asn-X-Ser/Thr）→ 质控通过后进入下一站

**路线 B：留在胞质，靠其他标签去其他地方**
带 NLS → importin 送进细胞核（通过 FG-repeat 穿核孔，Ran-GTP 卸货）
带线粒体信号 → TOM+TIM 送进线粒体
什么标签都没有 → 留在胞质

**这一章解决了"蛋白质怎么进入正确的区室"。但进了 ER 的蛋白还要继续往下走 → 引出下一章。**

### 第四章：ER 里的蛋白怎么运到目的地（Lecture 12）

蛋白进了 ER 后，还需要走很远的路：ER → Golgi → 质膜 / 溶酶体 / 细胞外。这段路全靠**囊泡运输**。

**第一程：ER → Golgi（COPII 发货车）**
Sar1-GTP 启动 → Sec24 挑选 cargo → COPII 外壳组装 → 囊泡出芽离开 ER → GTP 水解去壳 → 和 Golgi 融合

**"退货"机制：Golgi → ER（COPI 退货车）**
ER 驻留蛋白逃到 Golgi 后，被 KDEL 受体（可溶蛋白）或 KKXX 信号（膜蛋白）识别 → 装进 COPI 囊泡 → ARF-GTP 控制 → 运回 ER

**第二程：在 Golgi 中加工和分拣**
蛋白在 Golgi 中被进一步糖基化修饰。到了 TGN（trans-Golgi network），开始分拣：

- 溶酶体酶被加上 **M6P 标签** → M6P 受体在 pH 6.6 的 TGN 结合它们 → 装进 clathrin 囊泡 → 送到晚期内体（pH 6.0，受体释放 cargo）→ 最终到溶酶体
- 没有特殊标签的蛋白 → 走 default secretory pathway → 分泌到细胞外

**第三程：质膜的内吞（Clathrin 外卖员）**
以 LDL 内吞为典型：LDL 结合跨膜的 LDL 受体 → clathrin + AP 组装 → dynamin 剪断 → 去壳 → 进入早期内体（低 pH，受体和 LDL 分离）→ 受体回收到质膜 / LDL 去溶酶体降解释放胆固醇

**所有囊泡共用的停靠系统：**
Rab-GTP 识别靶膜并 tethering → v-SNARE + t-SNARE 形成 trans-SNARE complex → 驱动膜融合 → NSF 拆 SNARE 回收，GDI 回收 Rab

**这一章解决了"蛋白质在膜性区室之间怎么运输"。现在蛋白到了质膜上，可以开始接收外界信号了 → 引出最后一章。**

### 第五章：细胞怎么接收和传递信号（Lecture 13）

膜上的受体蛋白接收胞外信号，把信息传递到细胞内部。三大受体系统：

**系统 1：GPCR（七次跨膜受体）**
信号分子结合 → GPCR 激活 → 三聚体 G 蛋白（αβγ）的 Gα 换上 GTP → 与 βγ 分离 → 激活下游效应器：

| G 蛋白类型 | 效应器 | 第二信使 | 下游激酶 |
|-----------|-------|---------|---------|
| Gs | adenylyl cyclase | cAMP（水中） | PKA |
| Gq | PLCβ | IP₃（水中）+ DAG（膜内） | PKC（需要 DAG + Ca²⁺） |

IP₃ 打开 ER 上的 Ca²⁺ 通道释放 Ca²⁺。DAG 是唯一只在膜内扩散的第二信使。

关闭信号三步：GRK 磷酸化受体 → Arrestin 结合**受体**（不是 G 蛋白！）→ RGS 加速 Gα 水解 GTP。

特殊通路：NO → guanylyl cyclase → cGMP → 血管舒张（硝酸甘油原理）。

**系统 2：RTK（受体酪氨酸激酶）**
信号分子（生长因子）→ 受体二聚化 → trans-autophosphorylation → Grb2 → SOS → Ras-GTP → Raf → MEK → ERK → 进核调控基因

正反馈和多步磷酸化产生全或无响应（ultrasensitivity）。

JAK-STAT 是简化版：细胞因子 → JAK 互相磷酸化 → 招募 STAT → STAT 二聚进核。

**系统 3：核受体**
类固醇激素（脂溶性）→ 直接穿膜 → 结合胞内核受体 → 受体变成转录因子 → 调控基因表达。慢（小时到天）但持久。

### 五讲一句话总结

> **细胞先造了一张膜（L9），让小分子通过通道和转运体穿过它（L10），让蛋白通过信号序列找到正确的区室（L11），用囊泡在区室之间运输（L12），最后膜上的受体接收外界信号驱动细胞响应（L13）。**

---

## Lecture 9：膜结构与功能

### 知识块①：脂双层的组成

细胞膜的骨架是**脂双层（lipid bilayer）**。构成脂双层的脂质有三大类：

**第一类：磷脂（phospholipids）**——数量最多，是膜的主体。每个磷脂分子都是两亲性的（amphipathic）：一个亲水头基 + 两条疏水脂肪酸尾巴。头基的种类不同就产生了不同的磷脂，比如 PC（磷脂酰胆碱）、PE（磷脂酰乙醇胺）、PS（磷脂酰丝氨酸）、PI（磷脂酰肌醇）。PS 和 PI 头基带负电荷，PC 和 PE 是中性的。

**第二类：鞘脂（sphingolipids）**——骨架不是甘油而是鞘氨醇（sphingosine）。鞘磷脂（sphingomyelin）头基是胆碱，和 PC 类似，中性。糖脂（glycolipids）头基连糖，主要在动物细胞神经细胞中，基于鞘氨醇，所以又叫鞘糖脂。其中**神经节苷脂（ganglioside）**带有唾液酸（NANA），带负电。

**第三类：胆固醇（cholesterol）**——刚性的甾环结构嵌入磷脂之间。

分子形状决定自组装方式：**锥形**分子（头大尾小或相反）倾向形成胶束（micelle）；**圆柱形**分子（头尾差不多宽）倾向形成脂双层。

几乎所有主要脂质都在 **ER** 合成。合成后通过三种方式运到其他膜：囊泡运输、胞质脂质转运蛋白、膜接触位点。

### 知识块②：磷脂不对称分布（高频考点）

质膜两侧的磷脂组成是不对称的：

**胞外侧（exoplasmic leaflet）**：PC、Sphingomyelin、Glycolipids — 中性的、带糖的都朝外

**胞质侧（cytoplasmic leaflet）**：PE、PS（负电）、PI（负电，几乎全在胞质侧）

**Cholesterol**：两侧大致均等

| 侧 | 脂质 | 电荷 |
|---|---|---|
| 胞外侧 | PC、Sphingomyelin、Glycolipids | 中性 |
| 胞质侧 | PE、PS、PI | PS/PI 带负电 |
| 两侧均等 | Cholesterol | — |

维持不对称性的三种酶：

| 酶 | 方向 | 能量 | 底物 |
|---|---|---|---|
| **Flippase**（P-type ATPase） | 外侧 → 内侧 | ATP | PS, PE |
| **Floppase**（ABC transporter） | 内侧 → 外侧 | ATP | 磷脂 |
| **Scramblase** | 双向打乱 | 不耗 ATP（被 Ca²⁺ 激活） | 非特异性 |

自发 flip-flop 热力学上不利，非常缓慢。

**为什么这很重要？** PS 正常被 flippase 维持在内侧。细胞凋亡时 scramblase 激活、flippase 失活，PS 翻到外侧，成为巨噬细胞识别和吞噬的"eat me"信号。PI 在胞质侧参与大量信号传导（比如 PIP₂ 被 PLCβ 切割产生 IP₃ 和 DAG）。

脂质还能储存——**脂滴（lipid droplets）**从 ER 外膜形成，储存甘油三酯和胆固醇酯。

### 知识块③：膜蛋白的类型

膜蛋白按与膜的关系分两大类：

**整合膜蛋白（Integral Membrane Protein, IMP）**——不用去垢剂溶不下来：
- **跨膜蛋白（Transmembrane）**：以 α-helix（最常见）或 β-barrel 穿过脂双层，可以单次跨膜（single-pass）或多次跨膜（multi-pass，如 GPCR 是 7-pass）
- **单层嵌入蛋白（Monolayer-associated）**：嵌入一侧单层但不穿透
- **脂质锚定蛋白（Lipid-linked）**：通过共价连接的脂质锚定在膜上，只嵌入一侧单层

**外周膜蛋白（Peripheral Membrane Protein, PMP）**——不直接嵌入脂双层，通过非共价作用结合膜表面的蛋白或脂质。

β-barrel 结构常见于线粒体和质体的外膜。

脂质锚定蛋白有三种：

| 锚定方式 | 脂肪酸/基团 | 例子 |
|---|---|---|
| 脂肪酸连接 | 14C 肉豆蔻酸或 16C 棕榈酸 | Src 激酶 |
| 异戊二烯基连接 | prenyl group | Ras, Rab（小 GTPase） |
| GPI 锚定 | 糖基磷脂酰肌醇 | — |

GPI 锚定蛋白很特别：先在 ER 中作为跨膜蛋白合成，然后跨膜域被切掉、蛋白转移到 GPI 锚上。

膜蛋白的几个重要规则：糖基化和二硫键**永远在胞外面**；膜蛋白**不会 flip-flop**（方向固定）；有些蛋白被细胞骨架限制移动（corralling）。

**碳水化合物层（glycocalyx）**由糖蛋白和糖脂的糖链构成，覆盖细胞外表面，参与保护、识别和粘附。

### 知识块④：膜流动性与脂筏

膜流动性受三个因素影响：脂肪酸链越短越流动；不饱和度越高（双键造成 kink）越流动；胆固醇起双重作用——高温时限制流动性，低温时防止凝固。

**脂筏（lipid rafts）**是质膜中富含鞘磷脂和胆固醇的微区域，比周围区域更有序、更厚。脂筏能富集 GPI 锚定蛋白和某些跨膜蛋白，可能在信号传导中起组织平台的作用。

最后是**碳水化合物层（glycocalyx）**：由糖蛋白和糖脂的糖链构成，覆盖细胞外表面，参与保护、识别和粘附。

---

## Lecture 10：跨膜转运

### 一、跨膜转运的基本方式

分子穿过膜有两大辅助方式：

| 类型 | 机制 | 速率 |
|---|---|---|
| **Channel（通道）** | 形成连续亲水孔道，自身不变构象 | 10⁶–10⁸/sec |
| **Transporter（转运体）** | 每转运一次经历构象变化 | 10²–10⁴/sec |

被动转运沿电化学梯度，不需能量。主动转运逆电化学梯度，需要能量。

简单扩散速率排序：**小非极性气体（N₂, O₂, CO₂）**最快 → **小不带电极性分子（ethanol, 水）**次之 → **大不带电极性分子（glucose）**很慢 → **离子（Ca²⁺, Na⁺）**几乎不能通过。

### 二、转运体的分类

| 类型 | 方向 | 例子 |
|---|---|---|
| **Uniporter** | 单向，沿梯度 | — |
| **Symporter（同向转运）** | 两种溶质同方向 | Na⁺/glucose symporter |
| **Antiporter（逆向转运）** | 两种溶质反方向 | Na⁺/H⁺ exchanger |

**ATP 驱动泵（primary active transport）**：

| 泵类型 | 特点 | 例子 |
|---|---|---|
| **P-type ATPase** | 有自磷酸化活性 | Na⁺-K⁺ pump（3 Na⁺出/2 K⁺入）、Ca²⁺ pump、Flippase |
| **V-type ATPase** | 酸化细胞器 | 溶酶体和内体的 H⁺ 泵 |
| **F-type ATPase** | 利用 H⁺ 梯度合成 ATP | 线粒体 ATP synthase |
| **ABC transporter** | 转运多种底物 | Floppase、CFTR（实际是 Cl⁻ 通道） |

### 三、离子通道

**K⁺ 通道的选择性机制**（经典考点）：

1. 入口处带负电氨基酸吸引阳离子、排斥阴离子（选择阳离子）
2. 选择性滤器（selectivity filter）的壁由羰基氧排列形成 K⁺ 结合位点
3. K⁺ 必须先脱水才能通过，羰基氧替代水分子
4. Na⁺ 太小，无法与所有四个氧原子同时作用 → K⁺ 通道对 K⁺ 的选择性是 Na⁺ 的 **10,000 倍**

**Aquaporin（水通道蛋白）**：6 个跨膜 α-helix，形成同源四聚体。

### 四、电信号传导

**动作电位**的产生依赖三种通道协作：

| 阶段 | 通道状态 | 离子流动 | 膜电位变化 |
|---|---|---|---|
| 静息 | K⁺ leak channel 开放 | K⁺ 外流 | ~-70mV |
| 上升相 | 电压门控 Na⁺ channel 开放 | Na⁺ 内流 | 去极化 |
| 下降相 | Na⁺ channel 自动失活 + 电压门控 K⁺ channel 开放 | K⁺ 外流 | 复极化 |

Na⁺ channel 三种状态：**closed → open → inactive**。Inactive 态在去极化膜上自由能最低；closed 态在超极化膜上自由能最低。这解释了通道先开后自动失活。

动作电位的**自我放大和传播**：一处去极化激活邻近区域的 Na⁺ channel，信号沿轴突单向传导。发生在轴突起始段（axon hillock）。

---

## Lecture 11：细胞内区室与蛋白质分选

### 蛋白质分选 = 快递分拣系统

把细胞想成一个**大型物流中心**。每个蛋白质就是一个包裹，**信号序列就是包裹上的地址标签**。没贴标签的包裹就留在仓库（胞质）不动。

### 第一层：蛋白在哪里合成的？

**所有蛋白都从胞质中的核糖体开始翻译。** 然后分两条路：

**路线 A**：翻译到一半，露出一段疏水的"地址标签"（signal peptide）→ 被 SRP 抓住 → 拖到 ER 膜上继续翻译 → 蛋白进入 ER 腔 → 之后走囊泡运输路线（ER → Golgi → 质膜/溶酶体/分泌）

**路线 B**：翻译完了也没露出 signal peptide → 蛋白留在胞质 → 但胞质里也有不同目的地（细胞核、线粒体、过氧化物酶体）→ 靠不同的地址标签被不同的快递员送过去

### 第二层：五个目的地，五个地址标签

只需要记住**五对"地址-快递员"**：

**① 去 ER（然后走囊泡系统）**
- 地址标签：**N-端 signal peptide**（一段 ~20 aa 的疏水序列）
- 快递员：**SRP**（signal recognition particle，6 个蛋白 + 1 条 7SL RNA）
- 到了之后：signal peptidase 把标签剪掉
- 谁走这条路：所有分泌蛋白、膜蛋白、溶酶体酶

**② 去细胞核**
- 地址标签：**NLS**（nuclear localization signal，富含 Lys/Arg 的短序列）
- 快递员：**Importin**（一个家族，不同成员认不同 NLS）
- 怎么进门：importin 带着 cargo 通过核孔的 **FG-repeat** 穿过去
- 怎么卸货：核内的 **Ran-GTP** 结合 importin → importin 松手释放 cargo
- 调控方式：**在 NLS 旁边磷酸化** → importin 认不出来 → 蛋白进不了核

**③ 去线粒体**
- 地址标签：N-端信号序列（正电荷，amphipathic α-helix）
- 快递员：**TOM**（外膜）+ **TIM23/TIM22**（内膜）
- 蛋白要**展开**才能穿过去

**④ ER 内部回收（从 Golgi 拉回来）**
- 地址标签分两种：
  - 可溶蛋白：**KDEL**（或 HDEL）——四个氨基酸（Lys-Asp-Glu-Leu）
  - 膜蛋白：**KKXX**（胞质侧尾巴上两个 Lys）
- 快递员：**KDEL 受体**识别后，通过 **COPI 囊泡**逆向运回 ER

**⑤ 去溶酶体（从 Golgi 分拣出去）**
- 地址标签：**M6P**（mannose 6-phosphate）——是糖修饰，不是氨基酸序列
- 加标签的地方：**Golgi**（由 GlcNAc phosphotransferase 添加）
- 快递员：**M6P 受体**在 TGN 识别 → 包进 clathrin 囊泡 → 送到晚期内体
- 受体 pH 依赖性：pH 6.6（TGN）绑定，pH 6.0（晚期内体）释放

### 第三层：N-linked 糖基化

发生在 ER 腔中，糖链连到 **Asparagine（天冬酰胺，单字母 N）** 上。所以叫 N-linked。识别的氨基酸序列是 **Asn-X-Ser/Thr**，其中 X 可以是任何氨基酸但**不能是 Pro**。

糖基化有什么用？三个功能记住三个词：**折叠质控**（calnexin/calreticulin 检查折叠对不对）、**细胞识别**（selectin 认糖）、**保护蛋白**（糖壳挡蛋白酶）。

### 超浓缩记忆卡片

| 去哪 | 地址标签 | 谁来送 | 怎么到 |
|------|---------|-------|-------|
| **ER** | N-端 signal peptide（疏水） | SRP | 穿 translocator 进 ER 腔 |
| **细胞核** | NLS（富含 Lys/Arg） | Importin | 穿核孔 FG-repeat，Ran-GTP 卸货 |
| **线粒体** | N-端正电荷序列 | TOM + TIM | 展开穿过双层膜 |
| **回 ER** 可溶 | **KDEL** | KDEL 受体 | **COPI** 囊泡逆向运回 |
| **回 ER** 膜蛋白 | **KKXX** | COPI coat 直接识别 | **COPI** 囊泡逆向运回 |
| **溶酶体** | **M6P**（糖标记） | M6P 受体 | TGN 出发 → clathrin 囊泡 → 晚期内体 |

万能规则：**没有任何信号序列的蛋白 = 留在胞质中**（default）；**没有任何分选信号的分泌通路蛋白 = 走 default secretory pathway 直接分泌到细胞外**。

---

## Lecture 12：细胞内囊泡运输

### 囊泡运输 = 三条快递专线

细胞里的"物流路线"：**ER（工厂）→ Golgi（分拣中心）→ 质膜（门口）/ 溶酶体（垃圾处理站）**

### 专线一：COPII——"发货车"

**方向：ER → Golgi（正向，往外送）**

关键角色：
- **Sar1**（小 GTPase）：调度员，决定什么时候派车。Sar1-GTP 时启动装车，GTP 水解后外壳脱落
- **Sec12**：是 Sar1 的 GEF（激活 Sar1，把 GDP 换成 GTP，相当于"派单员"）
- **Sec24/23**：负责**挑选货物**（识别 cargo 蛋白胞质侧的 sorting signal）
- **Sec13/31**：外壳的结构支架

出发地点：ER 上没有核糖体的区域，叫 **transitional ER / ER exit sites**。

### 专线二：COPI——"退货车"

**方向：Golgi → ER（逆向，往回送）**

关键角色：
- **ARF**（小 GTPase）：调度员，和 Sar1 角色一样但管的是 COPI

退什么货？两类：
- 带 **KDEL** 标签的可溶蛋白（被 KDEL 受体在 Golgi 抓住）
- 带 **KKXX** 标签的膜蛋白（被 COPI coat 直接识别）

**记忆口诀：COPII 是"2→发出去"（ER→Golgi），COPI 是"1→退回来"（Golgi→ER）。** 数字越大越往外。

### 专线三：Clathrin——"外卖员 + 快递分拣"

**Clathrin 干两件事：**

**任务 A：在质膜搞内吞（endocytosis）**——把细胞外的东西吞进来。比如 LDL 受体结合 LDL 颗粒后，clathrin 在下面组装一个笼子，把这块膜连同受体一起吞进来形成囊泡。

**任务 B：在 TGN 搞分选**——把溶酶体酶（带 M6P 标签的）从 Golgi 分拣出来，装进 clathrin 囊泡送往晚期内体/溶酶体。

Clathrin 的结构和工作方式：
- Clathrin 本身是**三脚架（triskelion）**：3 大 + 3 小亚基，自组装成六角形和五角形的笼子
- Clathrin **不直接碰货物**——中间需要 **AP（adaptor protein）** 做桥梁，一头连 cargo，一头连 clathrin
- **Dynamin**（有 GTPase 活性）：负责在囊泡脖子处**拧断**（fission），让囊泡脱离母膜
- 囊泡脱离后要**去壳（uncoating）**才能和靶膜融合

LDL 内吞的完整故事：LDL 结合受体 → AP 招募 clathrin → 膜内陷形成 coated pit → dynamin 拧断 → coated vesicle → 去壳 → 进入早期内体（pH 降低）→ 受体和 LDL 分离 → 受体回收到质膜 → LDL 去溶酶体被降解

### 所有囊泡共用的"到站-卸货"系统

不管是 COPI、COPII 还是 Clathrin 囊泡，到了目的地都要经历同样的**三步停靠和融合**：

**① Tethering（远距离拴住）**——靠 **Rab-GTP**。Rab 是小 GTPase，每种 Rab 认一种靶膜。Rab-GTP 在囊泡上 → 招来 Rab effector（tethering protein）→ 把囊泡远远地拴到靶膜附近。

**② Docking（近距离对接）**——靠 **SNARE 蛋白**。囊泡上的 **v-SNARE** 和靶膜上的 **t-SNARE** 像拉链一样互相缠绕，形成 **trans-SNARE complex**，把两层膜拉到一起。

**③ Fusion（融合）**——SNARE 拉链拧到最紧，驱动两层膜融合，cargo 释放。

融合后 SNARE 要被 **NSF + α-SNAP** 拆开回收。Rab-GDP 被 **GDI** 从膜上提取回胞质回收。

### 超浓缩记忆卡片

| | COPII "发货车" | COPI "退货车" | Clathrin "外卖员" |
|---|---|---|---|
| **方向** | ER → Golgi | Golgi → ER | 质膜内吞 + TGN→溶酶体 |
| **调度 GTPase** | **Sar1** | **ARF** | ARF（TGN）/ 无（质膜） |
| **运什么** | 新合成的分泌/膜蛋白 | 逃跑的 ER 蛋白（KDEL/KKXX） | LDL、转铁蛋白、M6P 酶 |
| **独有特征** | Sec24 挑选 cargo | KDEL 受体 | AP 桥接 + Dynamin 剪断 |

| 到站三步 | 关键蛋白 | 功能 |
|---------|---------|------|
| Tethering | **Rab-GTP** | 远距离拴住 |
| Docking + Fusion | **v-SNARE + t-SNARE** | 拉链拉紧融合 |
| 回收 | NSF 拆 SNARE，GDI 回收 Rab | 循环利用 |

### 高频考点：非水解 GTP 类似物实验

如果实验中加入**不能水解的 GTP**（nonhydrolyzable GTP analog），会怎样？

答：Sar1/ARF 一直保持 GTP 状态 → 外壳一直不脱落 → **大量有壳囊泡积累**，无法去壳、无法融合。这个实验证明了 GTP 水解是去壳的必要步骤。

### Caveolae

**Caveolae** 是另一种内吞方式，富含 caveolin 蛋白和胆固醇，参与 **pinocytosis**（胞饮），独立于 clathrin。

---

## Lecture 12：细胞内囊泡运输

### 一、三种外壳囊泡

| 外壳类型 | 转运方向 | 调控 GTPase |
|---|---|---|
| **COPII** | ER → Golgi（正向） | **Sar1** |
| **COPI** | Golgi → ER（逆向） | **ARF** |
| **Clathrin** | 质膜内吞 + TGN 分选 | **ARF**（TGN处）|

Sar1 GTPase 控制 COPII 外壳的组装和解聚。Sec12 是 Sar1 的 GEF。Sec24/23 负责 cargo sorting。

**关键实验**：非水解 GTP 类似物（nonhydrolyzable GTP analog）存在时，囊泡会大量积累——因为外壳无法解聚（需要 GTP 水解才能 uncoat）。

### 二、ER → Golgi 运输

COPII 囊泡从 ER 的无核糖体区域（transitional ER / ER exit sites）出芽。膜蛋白在胞质侧展示 exit signal 被 Sec24 识别。

**ER 驻留蛋白的回收**：

| 蛋白类型 | 回收信号 | 回收方式 |
|---|---|---|
| 可溶性 ER 蛋白 | **H/KDEL** 序列 | KDEL 受体识别 → COPI 囊泡逆向运回 |
| ER 膜蛋白 | **KKXX** 基序 | COPI 囊泡逆向运回 |

### 三、囊泡靶向与融合

**Rab GTPase**：Rab-GTP 在囊泡上招募效应蛋白（tethering protein），介导 **tethering → docking → fusion** 三步。Rab-GDP 被 **GDI（GDP dissociation inhibitor）** 从膜上提取到胞质中回收。

**SNARE 蛋白**：囊泡上的 **v-SNARE** 和靶膜上的 **t-SNARE** 形成 **trans-SNARE complex**，拉近两层膜驱动融合。

### 四、Clathrin 介导的内吞

Clathrin 是由 3 大 + 3 小亚基组成的**三脚架（triskelion）**，自组装成六角形和五角形的笼状结构。Clathrin 不直接结合 cargo——由 **adaptor protein（AP）** 桥接。

五种 AP 复合物：AP2 在质膜，AP1/3 在 TGN/内体等。

**PI(4,5)P₂** 招募 AP 复合物到质膜。出芽后 PI(5)P phosphatase 水解 PI(4,5)P₂ 促进去壳。**Dynamin**（含 PI(4,5)P₂ 结合域 + GTPase 域）负责囊泡的断裂（fission）。

**Caveolae**：富含 caveolin 蛋白和胆固醇，参与 **pinocytosis**（胞饮），独立于 clathrin。

### 五、TGN 到溶酶体的运输

溶酶体酶带有 **mannose 6-phosphate（M6P）** 标记，在 TGN 中被 **M6P 受体**识别。M6P 受体的结合是 **pH 依赖的**：在 TGN（pH 6.6）结合，在晚期内体（pH 6.0）释放。受体通过 **retromer** 回收到 TGN。

**LDL 受体介导的内吞**（经典案例）：
```
LDL 颗粒被 LDL receptor 结合
  → clathrin-coated pit → 内化
  → 早期内体中受体与 LDL 分离（低 pH）
  → 受体回收到质膜
  → LDL 送往溶酶体降解释放胆固醇
```

胆固醇用 LDL 运输是因为胆固醇在水中几乎不溶。

---

## Lecture 13：细胞通讯

### GPCR 信号通路 = 一套接力赛系统

**GPCR（G protein-coupled receptor）**就是一个"门卫"。一条蛋白链在膜里**穿进穿出 7 次**（7-pass transmembrane protein）。人体**最大的受体家族**，超过 700 种。嗅觉、视觉、味觉全靠它。约 **50% 的药物**靶向 GPCR。

GPCR 自己不会干活，它收到信号后要喊**三聚体 G 蛋白（trimeric G protein）**来接力。

### 三聚体 G 蛋白是什么？

由三个亚基组成：**α、β、γ**。

- **Gα** 是核心：能结合 GTP 或 GDP，自带 GTPase 活性
- **β 和 γ** 永远绑在一起，作为功能单元 **Gβγ**

**G 蛋白就是一个分子开关：**
- 结合 **GDP** = **关闭状态**（α和βγ抱在一起）
- 结合 **GTP** = **激活状态**（α和βγ分开，各自去激活下游）

### 信号传递的完整故事（6 步）

**第 1 步：信号来了** — 信号分子（如肾上腺素）结合 GPCR 胞外部分。

**第 2 步：GPCR 变形，踢走 GDP** — GPCR 构象改变，把 Gα 上的 GDP 扣下来。细胞内 GTP 浓度比 GDP 高（约 10:1），GTP 立刻占上去。

**第 3 步：G 蛋白分家** — Gα-GTP 和 Gβγ 分开，各自去找下游目标。

**第 4 步：激活下游效应器**（分两条路）

**第 5 步：产生第二信使，信号放大**

**第 6 步：关闭信号**

### 通路 A：Gs → cAMP 通路（"兴奋通路"）

**Gs 的 s = stimulatory（刺激性的）**

接力顺序：

**信号分子（如肾上腺素）→ GPCR → Gαs-GTP → adenylyl cyclase → ATP → cAMP（第二信使）→ cAMP 激活 PKA → PKA 磷酸化各种靶蛋白**

cAMP 是水溶性小分子，在**胞质中扩散**，能迅速放大信号。

反过来还有 **Gi**（i = inhibitory），它**抑制** adenylyl cyclase，让 cAMP **降低**。

### 通路 B：Gq → IP₃/DAG 通路（"钙信号通路"）

接力顺序：

**信号分子 → GPCR → Gαq-GTP → PLCβ → 切割膜上的 PIP₂**

PIP₂ 被一刀切成**两个第二信使**：

**IP₃**（inositol trisphosphate）
- 水溶性，在**胞质中扩散**
- 跑到 ER 膜上 → 打开 Ca²⁺ 通道 → **Ca²⁺ 从 ER 释放到胞质**

**DAG**（diacylglycerol）
- 脂溶性，**只能在膜的脂双层平面内滑动**
- 在膜上激活 **PKC（protein kinase C）**
- PKC 需要 DAG + Ca²⁺ 才能完全激活（两条支线汇合）

### 第二信使总结（必考）

| 第二信使 | 在哪扩散 | 来源 | 激活谁 |
|---------|---------|------|-------|
| **cAMP** | 水中 | ATP，由 adenylyl cyclase 生成 | **PKA** |
| **cGMP** | 水中 | GTP，由 guanylyl cyclase 生成 | PKG |
| **IP₃** | 水中 | PIP₂ 被 PLCβ 切割 | ER 上的 Ca²⁺ 通道 |
| **DAG** | **只在膜内** | PIP₂ 被 PLCβ 切割 | **PKC** |
| **Ca²⁺** | 水中 | 从 ER 释放（IP₃ 触发） | PKC、CaM kinase 等 |

### NO 通路

**硝酸甘油（nitroglycerin）→ 释放 NO（一氧化氮气体）→ NO 穿过细胞膜进入平滑肌细胞 → 激活 soluble guanylyl cyclase → cGMP 升高 → 血管平滑肌舒张 → 心脏负担减轻**

NO 是气体信号分子，不需要受体，直接穿膜。

### 信号关闭（高频考点）

信号不能一直开着，有三个刹车：

**刹车 1：GRK 磷酸化受体** — GRK（G protein-coupled receptor kinase）磷酸化已激活的 GPCR 胞质尾巴。

**刹车 2：Arrestin 结合受体** — Arrestin 专门结合**被磷酸化的 GPCR**——**注意不是 G 蛋白！** Arrestin 像一个盖子，盖住受体，阻止它继续和 G 蛋白偶联。还能触发受体内吞。

**⚠️ Q6 的陷阱**：选项说"arrestin binds to G protein"——错！它结合的是**受体**！

**刹车 3：RGS 蛋白加速 Gα 水解 GTP** — Gα 自己有 GTPase 活性，但水解很慢。RGS 相当于催化剂，加速 GTP → GDP，让 Gα 迅速回到关闭状态。

### G 蛋白突变（Q12 方向）

**如果 Gα 突变导致对 GDP 亲和力降低**会怎样？

正常：Gα 安静地抱着 GDP 不动，等受体来踢走 GDP。

突变后：GDP 自己就容易掉下来 → 细胞里 GTP 浓度高 → GTP 马上占上去 → Gα 不需要受体激活就自己变成 GTP 状态 → **持续处于激活状态（constitutively active）**

这类似于癌基因 Ras 的激活突变——Ras 也是小 GTPase，突变使其 GTPase 活性丧失，也变成持续激活，驱动细胞不停增殖。

### 话题一：RTK = 自带酶活性的受体

**GPCR vs RTK**：GPCR 自己**没有酶活性**，需要喊 G 蛋白来帮忙。RTK（Receptor Tyrosine Kinase）**自己就是一个酶**——能把蛋白质的 Tyrosine 磷酸化。GPCR 穿膜 7 次，RTK **只穿膜 1 次**（single-pass），胞外是配体结合区，胞内是激酶区。

**RTK 激活的故事（4 步）**：

**第 1 步：信号来了，受体二聚化** — 平时 RTK 在膜上是**单个散着的（monomer）**。信号分子（如 EGF、PDGF）来了，把两个 RTK 拉到一起形成**二聚体**。不二聚化就没有后面的一切。

**第 2 步：互相磷酸化（trans-autophosphorylation）** — A 的激酶域磷酸化 B 的尾巴，B 的激酶域磷酸化 A 的尾巴。磷酸化的 Tyrosine 有**两个作用**：
- **激活激酶活性**
- **创造停靠位点**（磷酸化的 Tyr 变成"插座"，下游蛋白来插上去）

**第 3 步：招募下游蛋白，激活 Ras** — 磷酸化 Tyr → **Grb2** 停靠 → Grb2 拉来 **SOS** → SOS 是 **Ras 的 GEF**（帮 Ras 把 GDP 换成 GTP）→ **Ras-GTP 被激活**。Ras 是**单个小蛋白（small GTPase）**，没有 βγ 亚基。

**第 4 步：MAP kinase cascade（级联放大）** — Ras-GTP → **Raf** → **MEK** → **ERK / MAP kinase** → ERK 进核磷酸化转录因子 → 改变基因表达。三级级联的意义是**信号放大**。

**RTK 和 GPCR 的交叉**：RTK 也能激活 PLCγ（类似 GPCR 的 PLCβ），产生 IP₃ 和 DAG。细胞的信号网络是交织的。

### 信号锐化：全或无响应（Q14 方向）

**机制一：正反馈（positive feedback）** — 一个下游产物回过头来**加强上游信号**。一旦过了阈值，信号瞬间被放大到最大。

**机制二：多步磷酸化（ultrasensitivity）** — 如果一个蛋白必须在**多个位点**都被磷酸化才能激活，过渡会非常陡峭，接近全或无。MAP kinase cascade 三级级联叠加，响应曲线非常陡。

### 附：Cytokine 信号（JAK-STAT）

细胞因子受体**自己没有激酶活性**，但绑了一个 **JAK** 激酶。

配体结合 → 受体二聚化 → JAK 互相磷酸化（trans）→ 磷酸化受体招募 **STAT** → STAT 被磷酸化后**二聚化** → 进入细胞核当转录因子

比 RTK 更直接——没有 Ras、没有级联，直接从受体到转录因子。

### 话题二：核受体 = 不在膜上的受体

**为什么有些信号不需要膜受体？** 因为**信号分子本身就能穿过细胞膜**。类固醇激素（steroid hormones）是**脂溶性小分子**，包括：雌激素、睾酮、皮质醇、甲状腺激素、维生素 D。

**核受体信号的过程**：

类固醇激素穿过膜 → 在胞质或细胞核中找到**核受体（nuclear receptor）** → 激素结合使受体构象改变、暴露 DNA 结合域 → 受体作为**转录因子**结合到基因调控区 → 启动或关闭基因转录

核心特征：**慢**（小时到天，要走转录→mRNA→翻译）、**持久**（新蛋白被合成出来了）。

**Q16 考的就是这个**：类固醇信号 → 不是细胞表面受体 → 涉及基因转录 → 响应慢。

### 话题三：LDL 内吞的完整故事（Q9-11, Q21）

**为什么需要 LDL？** 胆固醇是细胞膜的重要成分，但它**几乎不溶于水**（Q21 答案）。血液是水溶液，所以胆固醇不能裸着在血里飘。解决方案：用**脂蛋白颗粒（LDL particle）**包裹运输。

**LDL 颗粒结构**：
- **外壳**：一层**磷脂单层**（亲水头朝外）+ **apolipoprotein**（载脂蛋白）
- **内核**：**胆固醇酯和甘油三酯**（疏水的，藏在里面）

Q10 问磷脂在哪——在**表面**与水接触（B）。

**LDL 内吞流程**：
```
LDL 结合 LDL 受体（跨膜蛋白，Q9 答案 D）
  → 受体聚集在 clathrin-coated pit
  → Dynamin 拧断 → clathrin-coated vesicle → 去壳
  → 和早期内体融合（pH 降低）
  → 受体和 LDL 分离
  → 受体通过 recycling endosome 回收到质膜（不被降解！）
  → LDL 继续走到溶酶体（Q11 答案 B）
  → 被溶酶体酶降解 → 释放胆固醇
```

这叫 **receptor-mediated endocytosis**。关键：受体被回收、cargo 被降解。

### 超浓缩记忆卡片

```
GPCR 信号三件套：受体(7-pass) → 三聚体G蛋白(αβγ) → 效应器
  Gs路：Gs → adenylyl cyclase → cAMP↑ → PKA
  Gq路：Gq → PLCβ → PIP₂裂解 → IP₃(水中→Ca²⁺) + DAG(膜内→PKC)
  特殊：NO → guanylyl cyclase → cGMP↑ → 血管舒张
  三个刹车：① GRK磷酸化受体 ② Arrestin结合【受体】③ RGS加速Gα水解

RTK 信号：
  配体 → 受体二聚化 → trans-autophosphorylation（激活+创造停靠位点）
  → Grb2 → SOS(GEF) → Ras-GTP → Raf → MEK → ERK → 基因表达
  全或无响应 = 正反馈 + 多步磷酸化(ultrasensitivity)

JAK-STAT（简化版RTK）：
  细胞因子 → 受体二聚 → JAK互相磷酸化 → 招募STAT → STAT磷酸化二聚 → 进核

核受体信号：
  类固醇激素（脂溶性）→ 穿膜 → 结合核受体 → 当转录因子 → 慢但持久

LDL 内吞：
  LDL结合受体(跨膜蛋白) → clathrin pit → dynamin剪断
  → 早期内体(低pH分离) → 受体回收 / LDL去溶酶体降解
  为什么用LDL？→ 胆固醇不溶于水
```

---

## 跨讲综合考点

### 1. 膜与转运的交叉

- **Na⁺-K⁺ pump** 建立的 Na⁺ 梯度驱动 **Na⁺/glucose symporter**
- **V-type ATPase** 酸化溶酶体，为水解酶提供最适 pH
- **F-type ATPase** 利用线粒体内膜 H⁺ 梯度合成 ATP

### 2. 膜与囊泡运输的交叉

- **脂筏**可能参与某些囊泡的出芽和分选
- **PI(4,5)P₂** 在质膜上招募内吞 machinery
- **磷脂不对称性**的破坏（如 PS 外翻）是凋亡信号

### 3. 囊泡运输与信号的交叉

- **RTK 内吞**是信号脱敏的重要机制
- **LDL 受体循环**缺陷导致家族性高胆固醇血症
- **Wnt/Notch** 信号依赖囊泡运输进行蛋白水解调控

### 4. 蛋白分选与疾病的交叉

- **I-cell disease**：M6P 标记缺陷 → 溶酶体酶被分泌到胞外
- **家族性高胆固醇血症**：LDL 受体突变
- **囊性纤维化**：CFTR（ABC transporter 家族的 Cl⁻ 通道）突变

---

## 关键词速查

| 英文 | 中文 | 讲次 |
|---|---|---|
| Amphipathic | 两亲性 | 9 |
| Flippase / Floppase / Scramblase | 磷脂转位酶 | 9 |
| Lipid raft | 脂筏 | 9 |
| Glycocalyx | 碳水化合物层/糖萼 | 9 |
| GPI anchor | 糖基磷脂酰肌醇锚 | 9 |
| Uniporter / Symporter / Antiporter | 转运体类型 | 10 |
| P-type / V-type / F-type ATPase | ATP 驱动泵类型 | 10 |
| Selectivity filter | 选择性滤器 | 10 |
| Action potential | 动作电位 | 10 |
| Signal peptide | 信号肽 | 11 |
| SRP | 信号识别颗粒 | 11 |
| N-linked glycosylation | N-连接糖基化 | 11 |
| ERAD | 内质网相关降解 | 11 |
| Ran-GTP | 核转运调控因子 | 11 |
| COPII / COPI / Clathrin | 外壳囊泡类型 | 12 |
| Rab GTPase | 囊泡靶向调控 | 12 |
| SNARE | 膜融合蛋白 | 12 |
| Dynamin | 囊泡断裂 GTPase | 12 |
| M6P | 甘露糖-6-磷酸 | 12 |
| GPCR | G 蛋白偶联受体 | 13 |
| RTK | 受体酪氨酸激酶 | 13 |
| MAP kinase cascade | MAP 激酶级联 | 13 |
| JAK-STAT | 细胞因子信号通路 | 13 |
| Second messenger | 第二信使 | 13 |

---

## 板块二 · Quiz 21 题逐题精讲

### ═══ Lecture 9: 膜结构与功能 ═══

**Q1 · 磷脂不对称分布**
> 哪些磷脂主要分布在质膜的胞质侧（cytosolic leaflet）？

**答案：B — Phosphatidylethanolamine (PE) 和 Phosphatidylserine (PS)**

口诀——**胞质侧：PE + PS + PI（带负电的都在里面）；胞外侧：PC + Sphingomyelin + Glycolipids**。Cholesterol 两侧均有分布。PS 翻转到胞外侧是凋亡的标志之一（被巨噬细胞识别）。

---

**Q3 · 简单扩散速率排序**
> 以下哪个顺序正确描述了各分子通过脂双层简单扩散的速率？

**答案：B — N₂ > ethanol > Glucose > Ca²⁺**

核心原则：**小的非极性分子最快，大的极性分子慢，带电离子几乎不能通过**。N₂ 是小的非极性气体分子，扩散最快；ethanol 小且有一定疏水性；Glucose 极性大、分子量大，需要转运蛋白；Ca²⁺ 带电荷，基本无法自由穿过脂双层。

---

### ═══ Lecture 10: 跨膜转运 ═══

**Q2 · 平衡≠等浓度（简答）**
> 为什么有些分子跨膜处于平衡状态，但两侧浓度不同？

**参考答案要点：**
对带电溶质（离子），平衡由**电化学梯度（electrochemical gradient）**决定，而非浓度梯度。膜电位（Vm）产生的电驱动力可以恰好对抗浓度差的化学驱动力。当二者相等时，净通量为零，离子处于电化学平衡，但两侧浓度不等。用 **Nernst 方程** 定量描述：E_ion = (RT/zF) ln([out]/[in])。例如 Cl⁻ 在神经元外侧浓度约为内侧 10 倍，但因为静息膜电位约 -70mV（内负），恰好抵消了 Cl⁻ 内流的化学驱动力。

---

**Q13 · 转运体 vs 通道的速率差异（简答）**
> 为什么 transporter 和 channel 的最大转运速率差这么大？

**参考答案要点：**
Channel（通道）形成一个连续的亲水孔道，离子/小分子按电化学梯度"流过去"即可，速率可达 **10⁶–10⁸ ions/sec**。而 Transporter（转运体）每转运一个（或一批）底物，都需要经历**构象变化**（从一侧开放变为另一侧开放），这个机械过程慢得多，速率通常只有 **10²–10⁴ molecules/sec**。本质区别在于：通道是"开了门让水流过"，转运体是"一次搬一个箱子过门"。

---

### ═══ Lecture 11: 细胞内区室与蛋白质分选 ═══

**Q7 · 核孔复合体如何识别不同 NLS（简答）**
> 一个核孔复合体如何高效转运具有不同核定位信号（NLS）的蛋白质？

**参考答案要点：**
细胞有一个**核转运受体（importin）家族**，不同的 importin 识别不同类型的 NLS。这些 importin-cargo 复合物都通过与核孔复合体中 FG 重复序列（FG-repeat nucleoporins）的相互作用来穿过核孔。核孔本身并不直接识别 NLS 序列——真正做"识别"工作的是多种 importin 受体，而核孔只负责提供一个通用的通道。在核内侧，**Ran-GTP** 结合 importin 使其释放 cargo。

---

**Q18 · N-linked glycosylation 的 "N"**
> N-linked glycosylation 中的 N 指什么？

**答案：D — Asparagine（天冬酰胺）**

N-linked 指糖链连接到蛋白质的 **Asparagine (Asn, N)** 侧链的氨基上。识别序列是 **Asn-X-Ser/Thr**（X 不能是 Pro）。与之相对的是 O-linked glycosylation，糖连到 Ser 或 Thr 的羟基上。

---

**Q19 · 磷酸化调控核定位**
> 磷酸化如何调控转录因子的核定位？

**答案：C — 在 NLS 附近的磷酸化阻止了 nuclear import factor 的结合**

磷酸化在 NLS 序列附近引入负电荷，干扰了 importin 对 NLS 的识别和结合，从而把转录因子留在胞质中。

---

### ═══ Lecture 12: 细胞内囊泡运输 ═══

**Q15 · Caveolae**
> Caveolae 参与什么过程？

**答案：B — Pinocytosis（胞饮）**

Caveolae 是质膜上富含 caveolin 蛋白和胆固醇的小凹陷结构，参与 **caveolae-mediated pinocytosis**（一种 clathrin-independent endocytosis）。

---

**Q17 · M6P 受体与 pH 的关系（简答）**
> TGN 的 pH 为 6.6，晚期内体 pH 为 6.0。如果改变 pH 会怎样？

**参考答案：**

**(a) 如果晚期内体 pH 升高到 6.6：** M6P 受体在 pH 6.0 时正常释放溶酶体酶 cargo。如果 pH 升高到 6.6，受体和 cargo 之间的亲和力不会降低到足以释放的程度，导致**溶酶体酶无法从受体上释放**，受体无法回收循环，溶酶体酶也无法被正确递送。

**(b) 如果 TGN 的 pH 降到 6.0：** 在 TGN 中 M6P 受体在 pH 6.6 时结合带有 M6P 标记的溶酶体酶。如果 pH 降到 6.0，受体和 cargo 会**在 TGN 就过早释放**，酶还没来得及被包装进运输囊泡就脱落了，导致溶酶体酶被分泌到细胞外（default secretory pathway），而不是运往溶酶体。

---

**Q20 · ER 中可溶性蛋白如何被选择性包装（简答）**

**参考答案：**
ER 驻留的可溶性蛋白带有 **KDEL（或 HDEL）序列**，如果意外逃出到 cis-Golgi，会被 **KDEL 受体**识别并通过 **COPI 囊泡**逆向运输回 ER。需要被运出 ER 的可溶性 cargo 蛋白，有些通过与特定的**跨膜 cargo 受体**结合，被选择性地富集到 **COPII 囊泡**中。COPII 外壳蛋白（Sec23/24）负责识别这些 cargo 受体胞质侧的 sorting signal。还有一些蛋白可能通过 bulk flow（非选择性的批量运输）离开 ER。

---

### ═══ Lecture 13: 细胞通讯 ═══

**Q4 · 只在脂质中扩散的第二信使**
> 以下哪种第二信使只在脂质中扩散？

**答案：A — Diacylglycerol (DAG)**

DAG 是 PIP₂ 被 PLCβ 切割后产生的产物之一，它是疏水分子，**只能在膜脂双层的平面内扩散**，然后在膜上激活 Protein Kinase C (PKC)。另一个产物 IP₃ 是水溶性的，在胞质中扩散并触发 ER 释放 Ca²⁺。

---

**Q6 · 视杆细胞光适应的负反馈**
> 以下哪项不属于视杆细胞光适应的负反馈机制？

**答案：B — Binding of arrestin to G protein**

陷阱在于措辞：arrestin 结合的是**被磷酸化的 GPCR（rhodopsin）**，而不是 G 蛋白。这是一个典型的干扰项。其他选项都是真正的负反馈：受体磷酸化（A）、Ca²⁺ 降低刺激鸟苷酸环化酶恢复 cGMP（C）、G 蛋白负调控因子 RGS 结合（D）。

---

**Q8 · 硝酸甘油治疗心绞痛**
> 硝酸甘油释放什么小分子？

**答案：A — NO（一氧化氮）**

硝酸甘油 → 释放 NO → NO 进入平滑肌细胞 → 激活可溶性鸟苷酸环化酶（soluble guanylyl cyclase）→ cGMP 升高 → 血管舒张 → 减轻心脏负荷。这是气体信号分子的经典例子。

---

**Q12 · G 蛋白对 GDP 亲和力降低的突变（简答）**
> 如果 G 蛋白因突变而降低了对 GDP 的亲和力（但对 GTP 的亲和力不变），会怎样？

**参考答案：**
正常情况下 G 蛋白在非活化状态结合 GDP。如果对 GDP 亲和力降低，GDP 更容易自发脱落。由于细胞内 GTP 浓度远高于 GDP（约 10:1），一旦 GDP 脱落，GTP 会迅速占据结合位点。结果是 G 蛋白会**无需受体激活就自发切换到 GTP 结合的活化状态**——变成一个**组成型激活突变（constitutively active）**。这类似于 ras 癌基因中的激活突变，会导致下游信号持续传导。

---

**Q14 · 信号锐化/全或无响应（简答）**
> 细胞如何将胞外信号的渐进增加转变为突然的、近乎全或无的响应？

**参考答案：**
通过**正反馈回路（positive feedback loop）**实现。当信号达到一定阈值时，正反馈使响应急剧放大。例如：一个下游激酶激活后可以进一步增强上游信号或自身的激活，产生"开关式"的反应。另外，**超敏感性（ultrasensitivity）**也能实现这一效果——例如当一个蛋白需要在多个位点被磷酸化才能激活时（多步磷酸化），响应曲线会变得非常陡峭，接近全或无。MAP kinase cascade 中的多层级联反应也能放大信号并产生开关效应。

---

**Q16 · 类固醇激素信号**
> 关于类固醇激素信号，哪项正确？

**答案：B — 大多数响应较慢，涉及基因转录调控**

类固醇激素（如雌激素、睾酮、皮质醇）是脂溶性小分子，直接穿过细胞膜，与**胞内核受体（nuclear receptor）**结合，作为转录因子调控基因表达。因为涉及转录和翻译，所以响应通常较慢（小时至天）。

---

### ═══ LDL 相关题组（跨 Lecture 12–13）═══

**Q9** · LDL 受体最可能是什么？→ **D，跨膜蛋白（transmembrane protein）**。LDL receptor 是经典的单次跨膜受体蛋白。

**Q10** · LDL 颗粒中磷脂在哪？→ **B，在表面，与水环境相互作用**。LDL 颗粒外层是磷脂单层 + apolipoprotein，内核是疏水的胆固醇酯和甘油三酯。

**Q11** · LDL 被细胞摄入后去哪？→ **B，溶酶体（lysosome）**。经 receptor-mediated endocytosis → 早期内体 → 晚期内体 → 溶酶体中被降解释放胆固醇。受体本身在早期内体中与 LDL 分离后回收到质膜。

**Q21** · 为什么用 LDL 运输胆固醇？→ **B，胆固醇在水溶液中几乎不溶**。所以需要脂蛋白颗粒来包裹运输。

---

**Q5 · 糖基化的三大功能（简答）**

**参考答案三个要点：**
1. **蛋白质折叠与 ER 质控**：N-linked 糖链参与 calnexin/calreticulin 循环，监测蛋白折叠状态，错误折叠的蛋白被送入 ERAD 降解。
2. **细胞识别与粘附**：细胞表面的糖被 lectin 识别，如 selectin 识别白细胞上的 sialyl-Lewis X，介导炎症中的滚动粘附。
3. **蛋白质稳定性和蛋白酶保护**：糖壳增加溶解性，空间上阻挡蛋白酶接近，延长分泌蛋白和膜蛋白的半衰期。

---

## 板块二高频考点总结

| 考点 | 题号 | 讲次 |
|---|---|---|
| 磷脂不对称分布 | Q1 | L9 |
| 简单扩散速率排序 | Q3 | L9 |
| 电化学平衡 vs 浓度平衡 | Q2 | L10 |
| Channel vs Transporter 速率 | Q13 | L10 |
| N-linked glycosylation 的 N = Asparagine | Q18 | L11 |
| 核转运 importin/Ran-GTP | Q7, Q19 | L11 |
| ER retrieval signal（KDEL/KKXX） | Q20 | L12 |
| COPI/COPII/Clathrin 方向 | — | L12 |
| M6P 受体与 pH 依赖性 | Q17 | L12 |
| LDL receptor-mediated endocytosis | Q9-11, Q21 | L12 |
| Caveolae = pinocytosis | Q15 | L12 |
| GPCR → G protein → 第二信使 | Q4, Q6 | L13 |
| DAG 只在膜扩散，IP₃ 在水中扩散 | Q4 | L13 |
| NO/cGMP 通路（硝酸甘油） | Q8 | L13 |
| Arrestin 结合的是受体不是 G 蛋白 | Q6 | L13 |
| 类固醇激素走核受体通路 | Q16 | L13 |
| G 蛋白组成型激活突变 | Q12 | L13 |
| 正反馈 → 全或无响应 | Q14 | L13 |
