# 第16讲学习讲义：Apoptosis（细胞凋亡）

对应课件：`Lecture_16.pptx.pdf`

这份讲义是给零基础同学用的。你不需要一开始就记住所有名词，先抓住一条主线：**多细胞生物不仅需要控制细胞增殖，也必须控制细胞死亡；apoptosis 是最经典的程序性死亡方式，它让细胞以有序、可控、低炎症的方式被清除。**

## 这讲到底在讲什么

第16讲不是在堆知识点，而是在回答一个关键问题：**细胞如何判断自己应该死，又如何执行死亡。**

你需要先接受三个核心判断：

- 细胞死亡和细胞增殖一样，是被严格调控的过程。
- Apoptosis 是一种主动的、程序化的自杀行为，不是"细胞坏掉了"。
- 失控的凋亡（过多或过少）都会导致严重疾病。

如果你把这三句话真正理解了，后面关于 caspase 级联、线粒体通路、死亡受体通路和 Bcl-2 家族的内容就会非常顺。

## 一、为什么细胞死亡也要被调控

如果细胞只会增殖不会死亡，多细胞生物无法维持组织大小，也无法完成发育塑形。受控死亡有几类重要作用：

- **发育塑形**：例如手指之间的组织被清除，形成分开的手指。
- **组织稳态**：肠上皮、血细胞、免疫细胞不断更新，需要旧细胞被清除。
- **免疫系统选择**：自身反应性淋巴细胞需要被删除，避免自身免疫。
- **清除危险细胞**：DNA 严重损伤、病毒感染或癌变风险高的细胞会被诱导死亡。
- **变态发育和组织重塑**：例如蝌蚪尾巴退化、昆虫变态。

所以 apoptosis 是"生命系统为了整体利益牺牲单个细胞"的机制。

## 二、Apoptosis 与 Necrosis：两种完全不同的死法

初学者最容易混淆 apoptosis 和 necrosis，但它们的本质完全不同。

| 对比 | Apoptosis | Necrosis |
|---|---|---|
| 性质 | 主动、程序化 | 常由外伤、缺血、毒性导致 |
| 能量需求 | 需要 ATP 和酶级联 | 常伴随能量崩溃 |
| 细胞体积 | 皱缩（shrinkage） | 肿胀（swelling） |
| 细胞膜 | 早期完整，后期形成 apoptotic bodies | 破裂 |
| DNA | 有规律片段化（ladder） | 随机降解（smear） |
| 炎症 | 通常低炎症 | 常引发炎症 |
| 清除方式 | 被吞噬细胞识别和吞噬 | 内容物泄漏 |

一句话记忆：**apoptosis = 干净整齐地死，necrosis = 肿胀爆裂、引发炎症。**

这张表常用于解释为什么 apoptosis 适合发育和组织稳态：它不会把细胞内容物乱撒到组织里。

## 三、Apoptosis 的形态特征：细胞长什么样算"凋亡"

典型 apoptosis 会依次出现以下形态变化：

1. **细胞变圆、体积缩小**（cell shrinkage）。
2. **染色质凝缩并贴近核膜**（chromatin condensation）。
3. **细胞膜出现 blebbing**，但膜完整性早期仍保留。
4. **磷脂酰丝氨酸（phosphatidylserine, PS）外翻**到细胞膜外侧，这是"吃我"信号。
5. **DNA 被切成片段**（DNA fragmentation），核酸酶在核小体之间切割，形成约 180 bp 倍数的片段。
6. **细胞裂解成 apoptotic bodies**，被巨噬细胞或邻近细胞吞噬。

注意：apoptosis 早期膜没有直接破裂，因此不会像坏死那样强烈诱发炎症。

## 四、Caspases：凋亡的执行机器

### 1. Caspase 是什么

Caspase 全称是 cysteine-aspartic protease（半胱氨酸-天冬氨酸蛋白酶）：

- 活性位点含 cysteine。
- 在底物 aspartic acid 后切割。
- 通常以前体 procaspase 形式存在。
- 通过切割激活，形成级联放大。

Caspase 分两类：

| 类型 | 例子 | 功能 |
|---|---|---|
| Initiator caspases | caspase-8、caspase-9 | 接收死亡信号，启动级联 |
| Effector caspases | caspase-3、caspase-6、caspase-7 | 切割结构和调控蛋白，执行细胞拆解 |

### 2. 为什么 caspase 级联适合做死亡开关

Apoptosis 必须具有两个特性：

1. **平时不能误触发**：否则正常细胞会被杀死。
2. **一旦触发要快速、不可逆**：否则危险细胞可能逃脱。

Caspase 级联正好满足这两点。initiator caspase 需要在特定平台上聚集才激活，而 effector caspase 一旦被激活，会切割大量底物，迅速产生形态改变。

### 3. Effector caspase 的主要底物

Caspase-3/7 会切割多类蛋白：

- **Nuclear lamins**：导致核膜结构解体。
- **ICAD**：释放 CAD nuclease，导致 DNA fragmentation。
- **Cytoskeletal proteins**：导致细胞形态改变和 membrane blebbing。
- **PARP**：阻断 DNA 修复和能量消耗。

这解释了为什么 caspase 活化能同时造成核变化、DNA 断裂、细胞形态变化。

## 五、外源性凋亡通路：死亡受体通路

### 1. Death receptors（死亡受体）

外源性通路由细胞外死亡信号触发，典型受体属于 TNF receptor family。这些受体胞内有 death domain，能招募 adaptor proteins 形成信号平台。

常见组合：

| Ligand | Receptor |
|---|---|
| Fas Ligand | Fas / CD95 |
| TNF-alpha | TNF receptor |
| TRAIL (Apo-2L) | TRAIL receptor |

### 2. DISC 和 caspase-8 的激活

以 Fas 通路为例，完整流程如下：

```text
细胞毒性T细胞释放 FasL
  -> FasL 结合 Fas 受体
  -> 受体三聚化（trimerization）
  -> FADD 被招募到受体胞内 death domain
  -> procaspase-8 聚集
  -> 形成 DISC（death-inducing signaling complex）
  -> caspase-8 被激活（proximity-induced activation）
  -> caspase-3/7 被激活
  -> apoptosis
```

关键概念：**DISC** 是 death-inducing signaling complex。initiator procaspase-8 在 DISC 上靠近彼此，通过 proximity-induced activation（邻近诱导激活）被自动切割激活。

### 3. 外源性和内源性的交叉：Bid

Caspase-8 不只可以直接激活 caspase-3，还能切割 **Bid** 形成 **tBid**。tBid 会进入线粒体，促进 Bax/Bak 活化，引发 MOMP。

```text
death receptor
  -> caspase-8
  -> tBid
  -> Bax/Bak activation
  -> mitochondrial pathway
```

这说明两条通路不是完全独立的，外源性通路可以通过 Bid 桥接到内源性通路。

## 六、内源性凋亡通路：线粒体通路

### 1. 什么时候走内源性通路

内源性通路通常由细胞内部压力触发：

- DNA damage（DNA 损伤）。
- 生长因子缺失（lack of survival signals）。
- 缺氧（hypoxia）。
- 营养不足（lack of nutrients）。
- ER stress。
- Oncogene activation。

核心判断是：**这个细胞是否还值得保留。如果损伤太严重，线粒体通路会把细胞推向死亡。**

### 2. Bcl-2 family：凋亡的核心调控层

Bcl-2 family 控制 mitochondrial outer membrane permeabilization（MOMP，线粒体外膜通透化）。

这个家族有三类成员：

| 类型 | 例子 | 作用 |
|---|---|---|
| Anti-apoptotic | Bcl-2、Bcl-xL、Mcl-1 | 抑制 Bax/Bak，保护线粒体 |
| Pro-apoptotic effector | Bax、Bak | 在外膜聚集成孔，导致 MOMP |
| BH3-only proteins | Bid、Bim、Puma、Noxa、Bad | 感受压力，解除抑制或直接激活 Bax/Bak |

记忆方式：

```text
Bcl-2 / Bcl-xL = 刹车
Bax / Bak = 打孔机器
BH3-only = 压力传感器和刹车解除器
```

### 3. MOMP 和 cytochrome c 释放：从线粒体到 caspase 级联

当 Bax/Bak 被激活后，会在线粒体外膜形成孔，造成 MOMP。随后发生一系列事件：

```text
Bax/Bak 在 mitochondrial outer membrane 聚集
  -> MOMP（线粒体外膜通透化）
  -> cytochrome c 从膜间隙释放到 cytosol
  -> cytochrome c 结合 Apaf-1
  -> Apaf-1 在 dATP/ATP 参与下组装成 apoptosome
  -> apoptosome 招募并激活 procaspase-9
  -> caspase-9 激活 caspase-3/7
  -> 细胞进入执行阶段
```

关键概念：**apoptosome** 是内源性通路的核心平台，由 Apaf-1 组装而成，功能上相当于外源性通路中的 DISC。

### 4. IAP 和 Smac/DIABLO：另一层刹车系统

细胞还有一层保护机制：

- **IAPs**（Inhibitors of Apoptosis Proteins）可以抑制 caspases。
- 线粒体释放的 **Smac/DIABLO** 可以抑制 IAPs，从而解除对 caspase 的抑制。

因此线粒体不仅释放 cytochrome c 启动 apoptosome，也释放 Smac/DIABLO 来移除 caspase 刹车。双重释放确保凋亡一旦启动就难以逆转。

## 七、DNA damage response 与 apoptosis 的连接

### 1. 损伤后细胞有两个选择

DNA damage 后，细胞不会立刻死亡，而是先判断损伤程度。

**轻中度损伤**：

```text
ATM/ATR activation
  -> Chk1/Chk2
  -> p53 stabilization
  -> p21 expression
  -> cell cycle arrest
  -> DNA repair
```

**严重或不可修复损伤**：

```text
p53
  -> Puma / Noxa / Bax 等促凋亡基因
  -> Bax/Bak activation
  -> MOMP
  -> apoptosis
```

因此 p53 的核心功能不是"直接杀细胞"，而是作为 damage response 的**决策节点**：能修就停下来修，不能修就让细胞死亡。

### 2. 为什么 apoptosis 能抑制癌症

癌变细胞常有 DNA damage、oncogene activation 或染色体异常。正常情况下，这些压力会激活 p53 和 apoptosis，把危险细胞清除。

肿瘤细胞常通过以下方式逃避凋亡：

- p53 失活。
- Bcl-2 或 Bcl-xL 过表达。
- Bax/Bak 功能降低。
- Death receptor pathway 被抑制。
- IAPs 上调。

所以"抗凋亡"是癌症获得生存优势的重要方式。

## 八、如何检测 apoptosis

考试中如果问"如何证明细胞发生 apoptosis"，不要只写一个实验。更稳的答案是同时覆盖多个层面。

### 1. 形态学观察

显微镜下可以观察 cell shrinkage、chromatin condensation、membrane blebbing、apoptotic bodies。优点是直观，缺点是主观性强，通常需要和分子检测配合。

### 2. Annexin V 检测 phosphatidylserine 外翻

正常细胞中 phosphatidylserine 主要在质膜胞质侧。Apoptosis 早期，phosphatidylserine 会外翻到细胞外侧。**Annexin V** 能结合外翻的 phosphatidylserine，因此常用于早期 apoptosis 检测。

常见组合（Annexin V + PI 双染）：

| 染色结果 | 解释 |
|---|---|
| Annexin V negative / PI negative | 活细胞 |
| Annexin V positive / PI negative | 早期 apoptosis |
| Annexin V positive / PI positive | 晚期 apoptosis 或继发性坏死 |
| Annexin V negative / PI positive | 原发性坏死或膜损伤 |

PI 只能进入膜完整性受损的细胞，因此用来判断膜是否已经破裂。

### 3. DNA fragmentation 检测

Apoptosis 中 caspase 会激活核酸酶（CAD），使 DNA 在核小体之间断裂，形成约 180 bp 倍数的片段。

检测方法：

- **DNA ladder**：电泳看到梯状条带，是 apoptosis 的经典标志。
- **TUNEL assay**：标记 DNA 断裂产生的 3'-OH 末端。

注意：TUNEL 阳性说明 DNA 有断裂，但不一定只来自 apoptosis，解释时要结合形态和 caspase 活化。

### 4. Caspase activation 和底物切割

分子标志包括：

- Cleaved caspase-3。
- Cleaved caspase-8 或 caspase-9。
- Cleaved PARP。
- Cytochrome c 从 mitochondria 释放到 cytosol。

这些指标更接近通路本身，因此常用于 western blot、免疫荧光或流式检测。

### 5. 答题套路

如果题目问"如何证明细胞发生 apoptosis"，完整答案应该这样组织：

```text
形态学观察（shrinkage、condensation、blebbing）
+ Annexin V/PI 判断早晚期
+ cleaved caspase-3 或 cleaved PARP 证明执行级联
+ TUNEL 或 DNA ladder 检测 DNA fragmentation
```

这样能同时覆盖形态、膜变化、酶活化和 DNA 变化四个层面。

## 九、其他程序性细胞死亡方式

Apoptosis 不是唯一的程序性细胞死亡。不同死亡方式有不同形态、分子标志和生理意义。

### 1. Necroptosis（程序性坏死）

Necroptosis 是程序化坏死，常在 caspase-8 被抑制时发生。

核心分子：RIPK1、RIPK3、MLKL。

```text
TNF 等信号
  -> RIPK1/RIPK3 复合体
  -> MLKL 磷酸化和寡聚化
  -> 破坏质膜完整性
  -> 细胞肿胀破裂
  -> 炎症反应
```

形态上更像 necrosis，但它是受调控的。

### 2. Pyroptosis（焦亡）

Pyroptosis 是炎症性程序死亡，常见于感染和 innate immunity。

核心分子：inflammasome、caspase-1（或 caspase-4/5/11）、gasdermin D、IL-1beta、IL-18。

```text
病原或危险信号
  -> inflammasome 激活
  -> caspase-1 激活
  -> gasdermin D 被切割
  -> N端片段在膜上成孔
  -> 细胞裂解并释放炎症因子
```

### 3. Ferroptosis（铁死亡）

Ferroptosis 是铁依赖的脂质过氧化相关死亡。

核心关键词：Fe2+、lipid ROS、GPX4、glutathione、system Xc-。

当 GPX4 功能不足或谷胱甘肽耗竭时，脂质过氧化无法被清除，膜脂损伤积累，细胞死亡。

### 4. Autophagy-dependent cell death

Autophagy 本来是细胞在营养压力下回收物质、维持生存的机制。但在某些情境下，过度或特定形式的 autophagy 会参与细胞死亡。

复习时要小心：**看到 autophagy 增加，不等于一定是 autophagy 导致死亡；它也可能是细胞自救反应。**

## 十、常考比较表

### Intrinsic vs Extrinsic apoptosis

| 对比 | Intrinsic pathway（内源性） | Extrinsic pathway（外源性） |
|---|---|---|
| 触发 | DNA damage、生长因子缺失、ER stress、氧化压力 | FasL、TNF、TRAIL 等外部死亡信号 |
| 关键平台 | mitochondria / apoptosome | death receptor / DISC |
| initiator caspase | caspase-9 | caspase-8 |
| 核心调控 | Bcl-2 family | receptor-adaptor complex |
| 交叉点 | Bax/Bak、cytochrome c | caspase-8 可切 Bid 进入线粒体通路 |

### Apoptosis vs Necroptosis vs Pyroptosis

| 类型 | 膜完整性 | 炎症 | 关键分子 |
|---|---|---|---|
| Apoptosis | 早期完整 | 低 | caspase-3/7、Bcl-2 family |
| Necroptosis | 破裂 | 高 | RIPK1/RIPK3/MLKL |
| Pyroptosis | 成孔破裂 | 高 | inflammasome、caspase-1、gasdermin |

## 十一、疾病联系

### Apoptosis 不足

如果 apoptosis 不足，危险或不该存在的细胞会存活。典型后果：

- 癌症。
- 自身免疫。
- 病毒感染细胞逃避免疫清除。

癌症中常见策略包括 p53 失活、Bcl-2 上调、IAP 上调、death receptor signaling 降低。

### Apoptosis 过度

如果 apoptosis 过度，正常细胞被过多清除。可能相关：

- 神经退行性疾病。
- 缺血再灌注损伤。
- 免疫细胞耗竭。
- 某些组织萎缩。

## 十二、你现在必须会的关键词

- Apoptosis：细胞凋亡。
- Programmed cell death (PCD)：程序性细胞死亡。
- Necrosis：坏死。
- Caspase：半胱氨酸-天冬氨酸蛋白酶。
- Initiator caspase：起始 caspase（caspase-8、caspase-9）。
- Effector caspase：执行 caspase（caspase-3、caspase-7）。
- DISC：death-inducing signaling complex，死亡诱导信号复合体。
- FADD：Fas-associated death domain protein。
- Apoptosome：凋亡小体。
- Apaf-1：apoptotic protease activating factor-1。
- Cytochrome c：细胞色素 c。
- MOMP：mitochondrial outer membrane permeabilization，线粒体外膜通透化。
- Bcl-2 family：Bcl-2 蛋白家族。
- Bax / Bak：促凋亡效应蛋白。
- BH3-only proteins：BH3 结构域蛋白（Bid、Bim、Puma、Noxa、Bad）。
- tBid：截短型 Bid，连接外源性和内源性通路。
- IAPs：Inhibitors of Apoptosis Proteins。
- Smac/DIABLO：IAP 的拮抗蛋白。
- Phosphatidylserine (PS)：磷脂酰丝氨酸。
- Annexin V：结合外翻 PS 的检测蛋白。
- TUNEL：末端脱氧核苷酸转移酶介导的缺口末端标记法。
- DNA ladder：DNA 梯状条带。
- PARP：poly(ADP-ribose) polymerase。
- Cleaved caspase-3 / cleaved PARP：活化形式的 caspase-3 和 PARP。
- Necroptosis：程序性坏死。
- Pyroptosis：焦亡。
- Ferroptosis：铁死亡。
- Gasdermin D：焦亡成孔蛋白。
- Inflammasome：炎症小体。

## 十三、常见误区

- **"Apoptosis 就是细胞坏掉了"是错的。** Apoptosis 是细胞主动执行的程序化死亡，需要 ATP 和酶级联，不是被动损伤。
- **"Necrosis 一定是意外的"不完全对。** Necroptosis 是一种程序化的坏死样死亡，形态像 necrosis 但受调控。
- **"TUNEL 阳性就一定是 apoptosis"是错的。** TUNEL 只标记 DNA 断裂，necrosis 也可能出现 DNA 断裂，需要结合 caspase 活化和形态学综合判断。
- **"Bcl-2 是促凋亡蛋白"是错的。** Bcl-2 是抗凋亡蛋白，它抑制 Bax/Bak 的聚集。考试中 Bcl-2 和 Bax 经常被混淆。
- **"外源性和内源性通路完全独立"是错的。** Caspase-8 可以切割 Bid 形成 tBid，桥接到线粒体通路。
- **"看到 autophagy 增加就是细胞在死亡"是错的。** Autophagy 更多时候是细胞的自救反应，只有特定情况下才参与死亡。
- **"p53 的功能就是诱导凋亡"不准确。** p53 首先尝试修复（通过 p21 造成 cell cycle arrest），只有损伤不可修复时才推动 apoptosis。

## 十四、考前速记版

| 问题 | 核心答案 |
|---|---|
| Apoptosis 的形态特征 | cell shrinkage、chromatin condensation、membrane blebbing、PS 外翻、DNA fragmentation、apoptotic bodies、phagocytosis |
| 主要执行分子 | caspases，尤其是 caspase-3/7 |
| 外源性通路 | death receptor -> FADD -> DISC -> caspase-8 -> caspase-3 |
| 内源性通路 | mitochondrial stress -> Bax/Bak -> cytochrome c -> Apaf-1 apoptosome -> caspase-9 -> caspase-3 |
| 两条通路的交叉点 | caspase-8 切割 Bid 生成 tBid，tBid 激活 Bax/Bak 进入线粒体通路 |
| 抗凋亡分子 | Bcl-2、Bcl-xL、IAPs |
| 促凋亡分子 | BH3-only proteins、Bax、Bak、Smac/DIABLO |
| Bcl-2 family 三类 | 抗凋亡（Bcl-2）、效应器（Bax/Bak）、传感器（BH3-only） |
| DNA damage 如何连接凋亡 | p53 激活 p21 造成 arrest；损伤严重时激活 Puma/Noxa/Bax 推动 apoptosis |
| 检测 apoptosis | Annexin V、TUNEL、DNA ladder、cleaved caspase/PARP、形态观察、flow cytometry |
| Necroptosis 核心分子 | RIPK1、RIPK3、MLKL |
| Pyroptosis 核心分子 | inflammasome、caspase-1、gasdermin D |
| 肿瘤如何逃避凋亡 | p53 失活、Bcl-2 过表达、IAP 上调、death receptor 通路被抑制 |

## 十五、自测题

1. 为什么 apoptosis 通常不会引起强烈炎症？

答题关键：早期膜完整性保留，细胞内容物不泄漏，被吞噬细胞直接清除。

2. Annexin V positive / PI negative 代表什么阶段？为什么？

答题关键：早期 apoptosis。PS 已外翻（Annexin V 阳性），但膜尚未破裂（PI 不能进入）。

3. 解释 cytochrome c、Apaf-1、caspase-9 和 caspase-3 在内源性通路中的顺序。

答题关键：cytochrome c 释放 -> 结合 Apaf-1 -> 组装 apoptosome -> 激活 caspase-9 -> 激活 caspase-3。

4. Fas receptor 激活后如何形成 DISC？

答题关键：FasL 结合 -> 受体三聚化 -> FADD 招募 -> procaspase-8 聚集 -> 形成 DISC -> caspase-8 激活。

5. p53 如何在 cell cycle arrest 和 apoptosis 之间起决策作用？

答题关键：轻度损伤 -> p53 激活 p21 -> arrest 和修复；重度损伤 -> p53 激活 Puma/Noxa/Bax -> apoptosis。p53 是决策节点。

6. Bcl-2 过表达为什么能帮助肿瘤细胞存活？

答题关键：Bcl-2 抑制 Bax/Bak 聚集，阻止 MOMP，cytochrome c 无法释放，凋亡通路被阻断。

7. Caspase-8 切割 Bid 的意义是什么？

答题关键：将外源性通路信号传递到内源性通路，通过 tBid 激活 Bax/Bak，放大凋亡信号。

8. Necroptosis 和 pyroptosis 都会引发炎症，它们的核心执行分子分别是什么？

答题关键：Necroptosis = RIPK1/RIPK3/MLKL；Pyroptosis = inflammasome/caspase-1/gasdermin D。

9. 如果一个实验只用 TUNEL 检测就下结论说细胞发生了 apoptosis，这个结论可靠吗？

答题关键：不可靠。TUNEL 只标记 DNA 断裂，necrosis 也可能阳性。需要结合形态学、Annexin V 和 cleaved caspase-3 等指标。

## 十六、一页总结

Apoptosis 的本质是一套由 caspases 执行、由线粒体和死亡受体调控的细胞自杀程序。复习时始终按这条链条组织答案：**刺激来源 -> initiator platform（DISC 或 apoptosome）-> initiator caspase（caspase-8 或 caspase-9）-> effector caspase（caspase-3/7）-> 形态和生化变化（shrinkage、condensation、DNA fragmentation）-> 检测方法（Annexin V、TUNEL、cleaved caspase/PARP）-> 生理或疾病意义（发育、稳态、癌症）。**

两条通路不是孤立的：外源性通路通过 Bid 可以桥接到内源性通路，而 Bcl-2 family 是内源性通路的核心调控层。理解了这条主线，apoptosis 就不再是零散名词，而是一个完整的逻辑系统。
