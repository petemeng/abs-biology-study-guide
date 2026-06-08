# 第三次考试重点：Lecture 14-19

> 来源：`ABS-exam_third-part.pdf`
> 这份文档是根据考试重点 PDF 整理的核心考点，覆盖细胞骨架、细胞周期、细胞凋亡、细胞连接与黏附、癌症生物学六大板块。

---

## 考前速查表

| 讲次 | 主题 | 最核心的一句话 |
|---|---|---|
| 14 | Cytoskeleton | 三类骨架各有分工：actin 管推拉撑割，microtubule 管长距离运输，intermediate filament 管抗拉伸 |
| 15 | Cell Cycle | Cyclin-Cdk 按时间顺序升降，checkpoint 在错误未修复前踩刹车，APC/C 让过程不可逆 |
| 16 | Apoptosis | 两条通路（外源/内源）最终都汇聚到 caspase 级联，Bcl-2 家族是内源通路的核心调控层 |
| 17 | Cell Junctions I | 四种细胞连接各管各的：adherens/desmosome 管黏着，tight junction 管密封，gap junction 管通讯 |
| 18 | Cell Junctions II | Integrin 是双向信号转换器：outside-in 传外部信号，inside-out 激活黏附能力 |
| 19 | Cancer Biology | 癌症 = 原癌基因激活（油门卡死）+ 抑癌基因失活（刹车失灵）+ 基因组不稳定 |

---

## Lecture 14. Cytoskeleton（细胞骨架）

### 考点 1：三类骨架的对比（必考）

| 特征 | Actin filament | Microtubule | Intermediate filament |
|---|---|---|---|
| 基本单体 | G-actin | α/β-tubulin heterodimer | 多种 IF 蛋白（keratin, vimentin, lamin） |
| 直径 | ~7 nm | ~25 nm（最粗） | ~10 nm |
| 极性 | 有（+ 端 / - 端） | 有（+ 端 / - 端） | **无极性** |
| 核苷酸 | ATP | GTP | 不依赖 ATP/GTP |
| Motor proteins | Myosin | Kinesin, Dynein | **无 motor** |
| 主要功能 | 细胞皮层、肌肉收缩、迁移、胞质分裂 | 细胞器运输、纺锤体、纤毛 | 抗机械拉伸、核纤层 |

**考试陷阱**：Intermediate filament 没有极性、没有 motor activity，所以不参与轨道运输。

### 考点 2：Actin treadmilling

- **+ 端**：ATP-G-actin 快速添加
- **- 端**：G-actin 同时移除
- 结果：纤维看起来在"移动"，实际是两端的聚合/解聚速率不同
- **+ 端聚合速度远快于 - 端**

### 考点 3：Microtubule dynamic instability

- **GTP cap 模型**：β-tubulin 结合 GTP 时聚合，GTP 水解为 GDP 后不稳定
- 有 GTP cap → 继续聚合（rescue）
- 失去 GTP cap → 快速解聚（catastrophe）

### 考点 4：Actin nucleation（成核是限速步骤）

| 蛋白 | 功能 | 产物 |
|---|---|---|
| **Formin** | 促进长纤维组装 | 线性 actin filament |
| **Arp2/3 complex** | 促进分支纤维组装 | 树枝状 actin 网络 |

大多数 actin filament 在**质膜附近**成核。

### 考点 5：Actin 交联蛋白与对应结构

| 交联蛋白 | 对应结构 | 交联距离 |
|---|---|---|
| Fascin | Filopodia | 远 |
| Fimbrin | Microvilli | 近 |
| α-actinin | Stress fiber, focal adhesion, muscle Z line | 中等 |
| Spectrin | Cell cortex | 远 |
| Filamin | Leading edge, filopodia | 远 |
| Dystrophin | 肌肉中连接膜与 actin | — |

### 考点 6：Motor proteins

| Motor | 轨道 | 方向 | 特点 |
|---|---|---|---|
| **Myosin**（>40 种） | Actin | 多数向 + 端 | ATP 水解，肌肉收缩 |
| **Kinesin** | Microtubule | 多数向 + 端（anterograde） | 两个 head，hand-over-hand |
| **Dynein** | Microtubule | 向 - 端（retrograde） | 需要 **dynactin** 连接货物，每步 ~8 nm |

**Dynein 的特殊性**：它本身不能直接运输货物，必须通过 dynactin 作为衔接蛋白。

### 考点 7：Sarcomere（肌节）的组织

- Myosin 在肌节中央（M line）
- Actin 从 Z line 向两侧延伸
- Accessory proteins（如 titin, nebulin）维持肌节结构

---

## Lecture 15. Cell Cycle（细胞周期）

### 考点 1：细胞周期的四个阶段

| 阶段 | 时间 | 核心事件 |
|---|---|---|
| **G1** | 可变 | 生长、感受信号、决定是否进入周期 |
| **S** | ~10-12 h | DNA replication + histone synthesis |
| **G2** | 可变 | 检查复制完成度和 DNA 损伤 |
| **M** | ~1 h | mitosis + cytokinesis |

- **G0**：暂时或永久退出周期（如神经元、骨骼肌）

### 考点 2：三个核心 Checkpoint（必考）

| Checkpoint | 检查内容 | 关键调控 |
|---|---|---|
| **G1/S transition** | 营养、mitogen、细胞大小、DNA 损伤 | Cyclin D-Cdk4/6, Cyclin E-Cdk2, Rb-E2F |
| **G2/M transition** | DNA 是否复制完成、是否有损伤 | Cyclin B-Cdk1 (M-Cdk) |
| **Metaphase → Anaphase** | 所有染色体是否正确连接纺锤体 | APC/C, Spindle Assembly Checkpoint (SAC) |

### 考点 3：M-Cdk 的四大功能

M-Cdk（Cyclin B-Cdk1）在有丝分裂早期被激活，执行以下功能：

1. **诱导纺锤体组装**并连接到姐妹染色单体
2. **触发染色体凝缩**（condensation）
3. **导致核膜破裂**（nuclear envelope breakdown）
4. **重排 actin 骨架和高尔基体**

### 考点 4：APC/C 是有丝分裂后期的关键推动者（高频考点）

**APC/C = Anaphase-Promoting Complex / Cyclosome**，是一个 **ubiquitin ligase**。

APC/C 的两个核心靶标：

1. **Securin** → 被降解 → 释放 **Separase** → Separase 切割 **cohesin** → 姐妹染色单体分离
2. **S-cyclin 和 M-cyclin** → 被降解 → Cdk 失活 → 纺锤体解聚

**关键逻辑链**：
```
APC/C 激活
  → 泛素化 securin → 蛋白酶体降解
  → separase 释放
  → cohesin 被切割
  → 姐妹染色单体分离（anaphase）
```

### 考点 5：有丝分裂的两个大部分

1. **Prophase → Prometaphase → Metaphase**：M-Cdk 磷酸化多种蛋白 → 纺锤体组装 + 染色体排列
2. **Metaphase → Anaphase**：APC/C 触发 cohesin 切割 → 染色体分离 → cyclin 降解 → Cdk 失活

### 考点 6：纺锤体的三类微管

| 类型 | 功能 |
|---|---|
| Kinetochore microtubules | 连接染色体着丝粒 |
| Interpolar microtubules | 从两极伸出，中间重叠，推动两极分离 |
| Astral microtubules | 锚定纺锤体到细胞皮层 |

---

## Lecture 16. Apoptosis（细胞凋亡）

### 考点 1：凋亡的六个形态特征（按顺序记忆）

1. **Cell surface blebs** → 形成 apoptotic bodies
2. **Cell shrinkage** + **chromatin condensation**
3. **Phosphatidylserine (PS) flipping** → 从内叶翻到外叶（"eat me" 信号）
4. **DNA fragmentation** → 核酸酶在核小体之间切割
5. **Nuclear membrane disruption**
6. **Cytoskeleton collapses**

### 考点 2：Apoptosis vs Necrosis

| 特征 | Apoptosis | Necrosis |
|---|---|---|
| 形态 | 整洁，形成 apoptotic bodies | 肿胀破裂 |
| 炎症 | **不引起**炎症 | **引起**炎症 |
| 原因 | 细胞主动启动死亡程序 | 通常由急性损伤导致 |
| DNA 切割 | 核小体间切割（ladder pattern） | 随机切割（smear） |

### 考点 3：两条凋亡通路（核心考点）

#### 外源通路（Extrinsic pathway）

```
死亡配体（如 FasL）结合死亡受体（如 Fas）
  → FADD 招募到受体胞内段
  → 形成 DISC（death-inducing signaling complex）
  → 激活 initiator caspase（Caspase-8/10）
  → 激活 effector caspase（Caspase-3/6/7）
  → 细胞凋亡
```

- 配体例子：**FasL**（来自 cytotoxic T cells）、**TNF-α**、Apo 2L、Apo 3L
- 关键衔接蛋白：**FADD**（Fas Associated protein with Death Domain）

#### 内源通路（Intrinsic pathway / 线粒体通路）

```
DNA 损伤 / 缺氧 / 缺营养 / 缺生存信号
  → 线粒体外膜通透化（MOMP）
  → Cytochrome c 释放到胞质
  → 与 Apaf-1 结合形成 apoptosome
  → 激活 initiator caspase（Caspase-9）
  → 激活 effector caspase
  → 细胞凋亡
```

### 考点 4：Bcl-2 家族（内源通路的核心调控层）

| 类别 | 代表 | 功能 |
|---|---|---|
| **抗凋亡** | Bcl-2 | 结合并抑制 Bax/Bak 聚合 |
| **促凋亡（效应）** | Bax, Bak | 在线粒体外膜聚合 → 形成孔道 → 释放 cytochrome c |
| **促凋亡（仅 BH3）** | BH3-only proteins | 抑制 Bcl-2 → 释放 Bax/Bak |

**调控逻辑**：
```
正常状态：Bcl-2 抑制 Bax/Bak → 线粒体完整 → 细胞存活
凋亡信号：BH3-only 蛋白抑制 Bcl-2
  → Bax/Bak 释放
  → 在线粒体外膜聚合形成孔道
  → Cytochrome c 释放
  → 凋亡启动
```

### 考点 5：Caspase 的分类

| 类型 | 代表 | 功能 |
|---|---|---|
| **Initiator caspase** | Caspase-8/10（外源）、Caspase-9（内源） | 启动凋亡级联 |
| **Effector caspase** | Caspase-3/6/7 | 执行凋亡（切割底物） |

### 考点 6：DNA fragmentation 的检测

- 核酸酶在**核小体之间**切割 DNA
- 产生 ~180 bp 整数倍的片段（ladder pattern）
- 这是凋亡的经典生化标志

---

## Lecture 17. Cell Junctions, Cell Adhesion and the ECM (I)

### 考点 1：四种细胞-细胞连接（必考）

| 连接类型 | 功能 | 关键蛋白 |
|---|---|---|
| **Adherens junction** | 黏着，连接 actin 骨架 | Cadherins, catenins |
| **Desmosome** | 黏着，连接 intermediate filaments | Cadherins (desmoglein, desmocollin) |
| **Tight junction** | 密封，阻止物质从细胞间隙通过 | Claudins, occludin |
| **Gap junction** | 通讯，允许小分子直接通过 | Connexins → connexons |

### 考点 2：Cadherins 家族

- **Ca²⁺ 依赖**：Ca²⁺ 结合使 cadherin 刚性化，防止被蛋白酶降解
- **Homophilic binding**：同型 cadherin 之间结合（E-cadherin 结合 E-cadherin）
- **Velcro 原理**：单个 cadherin 结合力弱，但阵列化后黏附力强
- 不同组织表达不同 cadherin → 决定细胞分选和组织边界

### 考点 3：Selectins（白细胞黏附的关键）

| 类型 | 位置 | 功能 |
|---|---|---|
| **L-selectin** | 白细胞表面 | 白细胞滚动黏附 |
| **P-selectin** | 血小板 + 内皮细胞 | 介导初始黏附 |
| **E-selectin** | 活化的内皮细胞 | 介导初始黏附 |

**特点**：
- Ca²⁺ 依赖
- 结合**lectins**（识别另一个细胞上的寡糖）
- 结合力弱 → 介导**瞬时黏附**（rolling）
- 需要与 **integrin** 协作完成白细胞外渗

### 考点 4：Tight junction 的三重功能

1. **Fence 功能**：阻止膜蛋白在顶面和基底面之间扩散
2. **Seal 功能**：阻止物质从细胞间隙通过
3. **Gate 功能**：选择性允许某些离子和小分子通过

### 考点 5：Gap junction

- **Connexin** → 6 个 connexin 组成一个 **connexon**
- 两个细胞各出一个 connexon 对接形成通道
- 允许 <1000 Da 的小分子直接通过
- 受电压、pH、Ca²⁺ 调控
- 植物中的类似结构：**plasmodesmata**

---

## Lecture 18. Cell Junctions, Cell Adhesion and the ECM (II)

### 考点 1：Integrin 的双向激活（核心考点）

| 激活方式 | 机制 | 例子 |
|---|---|---|
| **Outside-in** | 细胞外配体结合 → 改变 integrin 构象 → 激活 | 细胞外基质结合 integrin |
| **Inside-out** | 胞内信号 → talin 强结合 integrin β 亚基 → 激活 | 血小板活化时 integrin 被激活 |

**Integrin 的特点**：
- 异二聚体（α + β 亚基）
- 可在 active 和 inactive 构象之间切换
- 连接**细胞外基质**和**细胞内骨架**

### 考点 2：Integrin 信号通路

```
Integrin 与 ECM 结合
  → 激活 FAK（Focal Adhesion Kinase）和 Src
  → 磷酸化多种效应蛋白
  → 激活 Rho-GTPase
  → 促进 actin 组装（lamellipodium）
  → 驱动细胞迁移
```

**关键实验**：FAK 敲除 → 细胞运动停止。

### 考点 3：Integrin 介导的信号转导

- Integrin 不仅是"胶水"，更是**信号转换器**
- Outside-in：外部力学信号 → 胞内生化信号
- Inside-out：胞内信号改变 integrin 亲和力
- 与 growth factor signaling 协同

### 考点 4：ECM 的主要成分

| 成分 | 功能 |
|---|---|
| **Collagen** | 抗拉伸强度，最丰富的 ECM 蛋白 |
| **Elastin** | 弹性回缩 |
| **Fibronectin** | 细胞黏附（含 RGD 序列被 integrin 识别） |
| **Proteoglycans** | 含 GAG 链，抗压，储存生长因子 |
| **Laminin** | 基底膜的主要成分 |

### 考点 5：RGD 序列

- **Arg-Gly-Asp** 三肽序列
- 存在于 fibronectin 等 ECM 蛋白中
- 被 integrin 识别 → 介导细胞黏附

---

## Lecture 19. Cancer Biology（癌症生物学）

### 考点 1：良性 vs 恶性肿瘤

| 特征 | Benign tumor | Malignant tumor |
|---|---|---|
| 生长方式 | 局部生长 | 侵袭性生长 |
| 是否侵袭 | **不侵袭** | **侵袭**远处器官 |
| 转移 | **不转移** | **可转移**（metastasis） |

### 考点 2：癌症的单克隆起源

- 大多数癌症来源于**单个异常细胞**
- 证据：
  - 慢性粒细胞白血病（CML）：所有癌细胞携带**相同的染色体易位**
  - X-inactivation mosaics：女性嵌合体中，同一肿瘤的所有细胞显示相同的 X 染色体失活模式

### 考点 3：癌症的七大特征（Hallmarks of Cancer，必考）

1. **遗传和表观遗传不稳定**
2. **不受控的细胞周期**：在不该分裂时分裂
3. **不受控的生长**：代谢从氧化磷酸化转向**有氧糖酵解**（Warburg effect）
4. **异常应激反应**：对凋亡的敏感性降低
5. **逃避复制性衰老**：产生 telomerase 或其他端粒稳定机制
6. **侵袭和转移**：从原组织逃逸，在远处定植
7. **肿瘤血管新生**：angiogenesis 活性高

### 考点 4：癌症关键基因的分类（核心考点）

| 类别 | 正常功能 | 癌症中的变化 | 类比 |
|---|---|---|---|
| **Proto-oncogene** | 促进细胞生长和分裂 | 功能获得突变 → **Oncogene** | 油门卡死 |
| **Tumor suppressor** | 抑制细胞增殖、促进凋亡 | 功能丧失突变 | 刹车失灵 |
| **Genome maintenance** | DNA 修复 | 功能丧失 → 突变积累 | 维修工人罢工 |

### 考点 5：Oncogene vs Tumor Suppressor

| 特征 | Oncogene | Tumor Suppressor |
|---|---|---|
| 突变类型 | **Gain of function**（功能获得） | **Loss of function**（功能丧失） |
| 等位基因 | **一个**等位基因突变即可 | 通常需要**两个**等位基因都失活（Knudson 两击假说） |
| 遗传方式 | 显性 | 隐性 |
| 例子 | Ras, EGFR, HER2, BCR-ABL | Rb, p53, APC |

### 考点 6：Proto-oncogene 如何被激活？

1. **点突变**：如 Ras 基因的激活突变
2. **基因扩增**：如 HER2 在乳腺癌中的扩增
3. **染色体易位**：如 BCR-ABL（费城染色体）
4. **病毒插入**：逆转录病毒插入激活邻近基因

### 考点 7：Rb 通路（细胞周期与癌症的交叉点）

```
正常状态：
  Rb 结合 E2F → E2F 被抑制 → 细胞不增殖

Mitogen 信号：
  Cyclin D-Cdk4/6 磷酸化 Rb
  → Rb 释放 E2F
  → E2F 激活 S phase 基因
  → 细胞进入周期

癌症中：
  Rb 突变失活 → E2F 持续激活 → 细胞不受控增殖
```

### 考点 8：p53 通路（基因组守护者）

```
DNA 损伤
  → p53 被激活
  → 激活 p21（CKI）
  → 抑制 Cyclin-Cdk
  → 细胞周期停滞（G1 arrest）
  → 给 DNA 修复争取时间

如果损伤无法修复：
  → p53 激活促凋亡基因（如 Bax）
  → 细胞凋亡

癌症中：
  p53 突变 → 无法停滞周期 → 无法启动凋亡 → 突变积累
```

---

## 跨讲综合考点

### 1. 细胞骨架与细胞周期的交叉

- **纺锤体**由 microtubule 组成
- M-Cdk 诱导纺锤体组装
- **Contractile ring** 由 actin + myosin II 组成 → 胞质分裂

### 2. 凋亡与癌症的交叉

- 癌症细胞的特征之一：**对凋亡的敏感性降低**
- Bcl-2 过表达 → 抑制凋亡 → 癌细胞存活
- p53 突变 → 无法启动凋亡 → 突变积累

### 3. 细胞连接与癌症的交叉

- **E-cadherin 丢失** → 上皮-间质转化（EMT）→ 癌细胞侵袭
- **Integrin 信号异常** → 细胞迁移和侵袭能力增强
- **ECM 降解**（MMPs）→ 基底膜破坏 → 癌细胞进入血管/淋巴管 → 转移

### 4. 细胞周期与细胞连接的交叉

- **Contact inhibition**：正常细胞在接触其他细胞时停止分裂
- 癌细胞**丧失 contact inhibition** → 不受密度限制地增殖

---

## 高频考题模板

### 模板 1：比较题

> 比较 A 和 B 的异同

答题框架：
1. 先说共同点（1-2 句）
2. 列出关键差异（用表格或逐条）
3. 每个差异附上功能意义

### 模板 2：机制题

> 描述 X 的分子机制

答题框架：
1. 起始信号是什么
2. 关键分子有哪些
3. 信号如何传递（按顺序）
4. 最终效应是什么
5. 有什么调控/反馈

### 模板 3：实验分析题

> 如果敲除/过表达基因 X，预测表型

答题框架：
1. X 的正常功能是什么
2. 敲除/过表达会如何影响通路
3. 预测细胞/组织水平的表型
4. 可能的对照实验

---

## 关键词速查

| 英文 | 中文 | 出现讲次 |
|---|---|---|
| Treadmilling | 踏车行为 | 14 |
| Dynamic instability | 动态不稳定性 | 14 |
| Nucleation | 成核 | 14 |
| Sarcomere | 肌节 | 14 |
| Checkpoint | 检查点 | 15 |
| APC/C | 后期促进复合物 | 15 |
| Securin / Separase | 安全蛋白 / 分离酶 | 15 |
| Cohesin | 黏连蛋白 | 15 |
| Caspase | 半胱天冬酶 | 16 |
| Apoptosome | 凋亡体 | 16 |
| MOMP | 线粒体外膜通透化 | 16 |
| Bcl-2 family | Bcl-2 家族 | 16 |
| Cadherin | 钙黏蛋白 | 17 |
| Integrin | 整合素 | 18 |
| FAK | 黏着斑激酶 | 18 |
| RGD sequence | RGD 序列 | 18 |
| Oncogene | 癌基因 | 19 |
| Tumor suppressor | 抑癌基因 | 19 |
| Warburg effect | 瓦堡效应 | 19 |
| Metastasis | 转移 | 19 |
