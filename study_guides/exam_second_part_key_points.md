# 板块二 · 基础知识（Lectures 9–13）

> 覆盖膜结构与功能、跨膜转运、细胞内区室与蛋白质分选、囊泡运输、细胞通讯。

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

### 一、三种蛋白质转运机制

| 机制 | 途径 | 信号 |
|---|---|---|
| **门控转运** | 通过核孔复合体进出细胞核 | NLS / NES |
| **蛋白质易位** | 未折叠蛋白穿过转位子 | 信号肽（signal peptide） |
| **囊泡运输** | 蛋白被包在囊泡中转运 | 分选信号 |

### 二、信号肽与 ER 转位

分泌蛋白和膜蛋白的 N-端有一段**信号肽（signal peptide）**，约 20-30 个氨基酸，疏水性强。被 **SRP（signal recognition particle）** 识别。SRP 由 6 个蛋白和一个 7SL RNA（300 nt）组成。

过程：
```
核糖体开始翻译 → 信号肽露出
  → SRP 结合信号肽，暂停翻译
  → SRP-核糖体复合物靠到 ER 膜上的 SRP 受体
  → 蛋白链穿过转位子进入 ER 腔
  → signal peptidase 切掉信号肽
```

**不同类型蛋白的插入方式**：

| 蛋白类型 | 信号序列 | 特点 |
|---|---|---|
| **可溶性蛋白** | N-端信号肽（start-transfer） | 信号肽被切掉，蛋白全部进入 ER 腔 |
| **I 型跨膜蛋白** | N-端信号肽 + 内部 stop-transfer | 信号肽被切，stop-transfer 留在膜中 |
| **II/III 型跨膜蛋白** | 内部 signal anchor（不被切） | flanking 氨基酸电荷决定方向 |
| **多次跨膜蛋白** | 交替的 start-transfer 和 stop-transfer | — |
| **GPI 锚定蛋白** | 先合成跨膜蛋白，再转移到 GPI 锚 | 跨膜域被切掉 |

### 三、N-linked 糖基化

发生在 ER 腔中，糖链连接到 **Asparagine（N）** 的侧链上，识别序列是 **Asn-X-Ser/Thr**（X ≠ Pro）。糖基化参与蛋白质折叠质控（calnexin/calreticulin 循环），错误折叠的蛋白通过 **ERAD** 被降解。

### 四、核转运

进核：组蛋白、DNA/RNA polymerase、转录因子、核糖体蛋白等。
出核：成熟 mRNA、tRNA、前核糖体亚基等。

核转运受体（importin 家族）识别 NLS，通过与核孔中 FG-repeat nucleoporins 的多次低亲和力相互作用穿过核孔。在核内，**Ran-GTP** 与 importin 结合使其释放 cargo。

磷酸化可以调控核定位——在 NLS 附近的磷酸化阻止 importin 结合，把蛋白留在胞质。

### 五、线粒体蛋白导入

线粒体蛋白大多在胞质合成后通过 **TOM（外膜）** 和 **TIM23/TIM22（内膜）** 复合物导入。多次跨膜蛋白通过 TOM + TIM22 插入内膜。

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

### 一、信号传导总原则

信号分子可以是可溶性的或膜结合的。细胞表面受体接收亲水信号，胞内受体（核受体）接收脂溶性信号。

**分子开关**两大类：

| 开关类型 | 活化状态 | 灭活状态 |
|---|---|---|
| GTP 结合蛋白（Ras 等） | GTP 结合 | GDP 结合 |
| 蛋白质磷酸化 | Kinase 磷酸化 | Phosphatase 去磷酸化 |

**第二信使**：

| 第二信使 | 扩散范围 | 功能 |
|---|---|---|
| **cAMP** | 水中扩散 | 激活 PKA |
| **cGMP** | 水中扩散 | 激活 PKG |
| **Ca²⁺** | 水中扩散 | 多种效应 |
| **IP₃** | 水中扩散 | 触发 ER 释放 Ca²⁺ |
| **DAG** | 只在膜脂中扩散 | 激活 PKC |

**正反馈** → 全或无开关 + 记忆装置。**负反馈** → 适应/脱敏。

### 二、GPCR 信号通路

GPCR 是**七次跨膜蛋白**，人类超过 700 种，约 50% 药物靶向 GPCR。所有 GPCR 都通过**三聚体 G 蛋白**传递信号（α + βγ 亚基）。

主要通路：

| G 蛋白 | 下游 | 效应 |
|---|---|---|
| **Gs** | adenylyl cyclase → cAMP ↑ | PKA 激活 |
| **Gq** | PLCβ → IP₃ + DAG | Ca²⁺ 释放 + PKC 激活 |
| — | 直接调控离子通道 | — |

GPCR 信号关闭：**GRK** 磷酸化受体 → **arrestin 结合被磷酸化的受体**（注意：arrestin 结合的是受体，不是 G 蛋白！）→ 阻断 G 蛋白偶联、触发受体内吞。**RGS** 蛋白加速 Gα 的 GTPase 活性。

**特殊案例**：硝酸甘油 → 释放 **NO** → 激活可溶性鸟苷酸环化酶 → cGMP ↑ → 血管舒张。

### 三、酶联受体信号

**RTK（受体酪氨酸激酶）**：
```
配体结合 → 受体二聚化
  → 互相自磷酸化（trans-autophosphorylation）
  → 磷酸化 Tyr 招募下游蛋白
  → Grb2 → SOS → Ras 激活
  → MAP kinase cascade（Raf → MEK → ERK）
  → 调控基因表达、增殖
```

Ras 是小 GTPase，通过 GEF（SOS）激活、通过 GAP 灭活。

**Cytokine 信号**通过 **JAK-STAT** 通路：
```
细胞因子受体（无自身激酶活性）+ JAK
  → 配体结合 → 受体二聚化
  → JAK 互相磷酸化
  → 磷酸化受体招募 STAT
  → STAT 磷酸化后二聚进核调控基因
```

### 四、其他信号方式

**Wnt/Notch/Hedgehog**：通过调控蛋白水解（regulated proteolysis）和转录活性传递信号。

**核受体信号**：类固醇激素（雌激素、睾酮、皮质醇等）是脂溶性小分子，穿过细胞膜，结合胞内核受体，作为转录因子调控基因表达。响应较慢（涉及转录翻译），但作用持久。

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
