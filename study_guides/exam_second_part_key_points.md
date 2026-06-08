# 板块二 · 基础知识（Lectures 9–13）

> 覆盖膜结构与功能、跨膜转运、细胞内区室与蛋白质分选、囊泡运输、细胞通讯。

---

## Lecture 9：膜结构与功能

### 一、膜的总览

细胞膜（生物膜）有两大基本功能：作为**屏障（barrier）**隔离细胞内外环境；形成**细胞内区室（compartments）**实现功能分化。细胞内的主要膜性区室包括：nucleus, ER, Golgi, mitochondria, lysosome, peroxisome, transport vesicle 等。

### 二、脂双层

磷脂是两亲性分子（amphipathic），有亲水头基和疏水尾部。分子形状决定了它们自组装的形态——**锥形分子**形成胶束（micelle），**圆柱形分子**形成脂双层（bilayer）。

脂双层的组成包括三大类脂质：磷脂（phospholipids）、固醇（cholesterol）和糖脂（glycolipids）。几乎所有主要脂质（包括磷脂、胆固醇、神经酰胺——鞘磷脂和糖脂的前体）都在 **ER** 合成。脂质从 ER 到其他膜性区室的转运有三种方式：通过**囊泡运输**、通过**胞质脂质转运蛋白**、通过**膜接触位点（membrane contact sites）**。

**磷脂不对称分布**是核心考点：

| 侧 | 脂质 | 电荷 |
|---|---|---|
| 胞外侧（exoplasmic leaflet） | PC（磷脂酰胆碱）、Sphingomyelin（鞘磷脂）、Glycolipids（糖脂） | 中性 |
| 胞质侧（cytoplasmic leaflet） | PE（磷脂酰乙醇胺）、PS（磷脂酰丝氨酸）、PI（磷脂酰肌醇） | PS/PI 带负电 |
| 两侧均等 | Cholesterol | — |

这种不对称性由三类磷脂转位酶维持：

| 酶 | 方向 | 能量 | 底物 |
|---|---|---|---|
| **Flippase**（P-type ATPase） | 外侧 → 内侧 | ATP | PS, PE |
| **Floppase**（ABC transporter） | 内侧 → 外侧 | ATP | 磷脂 |
| **Scramblase** | 双向打乱 | 不耗 ATP（被 Ca²⁺ 激活） | 非特异性 |

磷脂自发翻转（flip-flop）在热力学上不利，非常缓慢。**PS 翻转到外侧是凋亡的标志信号**。

脂质还能储存——**脂滴（lipid droplets）**从 ER 外膜形成，储存甘油三酯和胆固醇酯。

### 三、膜蛋白

膜蛋白按照与脂双层的关系分两大类：

**整合膜蛋白（integral membrane protein, IMP）**：
- 跨膜蛋白（以 α-helix 或 β-barrel 跨膜）
- 单层嵌入蛋白（monolayer-associated）
- 脂质锚定蛋白（lipid-linked）

**外周膜蛋白（peripheral membrane protein, PMP）**：不直接嵌入脂双层，通过非共价相互作用结合在膜表面。

β-barrel 结构常见于线粒体和质体的外膜。

**脂质锚定蛋白**有三种方式：

| 锚定方式 | 脂肪酸/基团 | 例子 |
|---|---|---|
| 脂肪酸连接 | 14C 肉豆蔻酸或 16C 棕榈酸 | Src 激酶 |
| 异戊二烯基连接 | prenyl group | Ras, Rab（小 GTPase） |
| GPI 锚定 | 糖基磷脂酰肌醇 | — |

GPI 锚定蛋白先在 ER 中作为跨膜蛋白合成，然后跨膜结构域被切掉、转移到 GPI 锚上。

膜蛋白的重要特征：不对称分布（每个蛋白有固定方向）；糖基化总在胞外面；二硫键也总在胞外面；膜蛋白不会 flip-flop；一些蛋白可以在膜平面自由移动，一些被细胞骨架限制（"corralling"）。

**碳水化合物层（glycocalyx）**由糖蛋白和糖脂的糖链组成，覆盖在细胞表面外侧。

### 四、膜流动性

脂双层的流动性受脂肪酸链长度、不饱和度和胆固醇含量影响。不饱和脂肪酸的扭结（kink）阻止紧密堆积，增加流动性。胆固醇有双重作用：在高温下限制流动性，在低温下防止凝固。

**脂筏（lipid rafts）**是质膜上富含鞘磷脂和胆固醇的微区域，能富集某些特定膜蛋白（如 GPI 锚定蛋白）。

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
