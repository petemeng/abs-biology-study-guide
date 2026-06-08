# 第15讲学习讲义：Cell Cycle（细胞周期）

对应课件：`Lecture_15.pptx.pdf`

这份讲义是给零基础同学用的。你不需要一开始就记住所有名词，先抓住一条主线：**细胞周期的本质是"先把所有东西复制一份，再准确地分给两个子细胞"；而控制系统要保证这件事按顺序发生、出错时能刹车、完成时能不可逆地推进到下一步。**

## 这讲到底在讲什么

第15讲不是在堆知识点，而是在回答一个非常具体的问题：**细胞如何确保 DNA 只复制一次、染色体准确分离、以及在环境不合适时停下来。**

你需要先接受三个核心判断：

- 细胞周期由 Cyclin-Cdk 复合体按时间顺序推进，不同阶段使用不同的 Cyclin-Cdk。
- 三个关键 checkpoint 负责质量控制：G1/S、G2/M、metaphase-to-anaphase。
- 蛋白降解系统（SCF 和 APC/C）负责让阶段转换不可逆。

如果你把这三条真正理解了，后面关于 origin licensing、spindle assembly checkpoint、Rb-E2F 通路等细节就会非常顺。

## 一、细胞周期概览：细胞一生都在做什么

### 1. 细胞周期解决的两个任务

细胞分裂不是只把细胞"一切两半"。它必须完成两个高度协调的任务：

- **复制细胞内容物**：DNA、蛋白质、膜、细胞器等都要增加。
- **准确分配给两个子细胞**：遗传物质和细胞内容物要被公平分配。

如果复制和分裂不同步，就会出问题：

- DNA 没复制完就分裂，子细胞缺失遗传信息。
- DNA 重复复制，产生基因组不稳定。
- 染色体未正确连接纺锤体就分离，产生 aneuploidy（非整倍体）。
- 细胞生长不足就分裂，子细胞过小。

### 2. 四个经典阶段

| 阶段 | 中文名 | 主要事件 |
|---|---|---|
| G1 | 第一间期 / Gap 1 | 生长、感受外界信号、决定是否进入周期 |
| S | 合成期 / Synthesis | DNA replication、histone synthesis、centrosome duplication |
| G2 | 第二间期 / Gap 2 | 检查 DNA 复制是否完成、是否有损伤，准备有丝分裂 |
| M | 分裂期 / Mitosis | 有丝分裂 + 胞质分裂（mitosis + cytokinesis） |

有些细胞会进入 **G0（静息期）**：

- 暂时退出周期，之后可被信号重新激活，例如淋巴细胞。
- 长期退出并分化，例如多数神经元和骨骼肌细胞。
- 进入 senescence（衰老），不再分裂但仍有代谢活动。

### 3. 研究细胞周期的常用方法

| 方法 | 能回答的问题 |
|---|---|
| 显微镜观察 | 细胞形态、染色体凝缩、纺锤体、胞质分裂 |
| BrdU / EdU incorporation | 哪些细胞正在进行 DNA synthesis |
| Flow cytometry（流式细胞术） | 根据 DNA 含量区分 G1（2N）、S（2N-4N）、G2/M（4N） |
| Cell cycle synchronization | 让细胞群体处在相近阶段，方便分析 |
| Yeast genetics | 用 cdc mutants 找细胞周期控制基因 |

### 4. 酵母突变体为什么重要

酵母遗传学帮助科学家找到许多 cell division cycle genes，也就是 **cdc genes**。三位科学家因此获得 2001 年诺贝尔奖：

- **Lee Hartwell**：用 budding yeast（芽殖酵母）找到多种 cdc mutants 和 checkpoint 概念。
- **Paul Nurse**：用 fission yeast（裂殖酵母）研究 cdc2 等关键细胞周期基因。
- **Tim Hunt**：发现 cyclins 的周期性积累和降解。

这些工作说明：细胞周期不是简单计时器，而是由高度保守的分子开关控制。

## 二、细胞周期控制系统：Cyclin-Cdk 与 Checkpoint

### 1. 控制系统的基本逻辑

细胞周期控制系统像一组顺序开关。每一步都要满足两个条件：

1. 上一步已经完成。
2. 当前环境允许继续前进。

核心分子是 **Cyclin-Cdk complexes**：

- **Cdk**（Cyclin-dependent kinase）是激酶，蛋白水平在整个周期中相对稳定。
- **Cyclin** 周期性合成和降解，浓度随阶段变化。
- Cyclin 结合 Cdk 后改变 Cdk 构象，使其具备底物特异性和激酶活性。

所以"周期性"主要来自 cyclin 的浓度变化，而"磷酸化执行能力"来自 Cdk。

### 2. Cyclin-Cdk 的主要类型

| 复合体 | 活跃阶段 | 主要功能 |
|---|---|---|
| G1-Cdk | G1 | 响应 mitogens，帮助细胞通过 restriction point |
| G1/S-Cdk | late G1 | 推动进入 S phase |
| S-Cdk | S phase | 启动 DNA replication，防止 origin 重新许可 |
| M-Cdk | G2/M 和 M phase | 触发 mitosis：染色体凝缩、核膜破裂、纺锤体形成 |

记忆口诀：

```text
G1-Cdk 问"要不要分裂"
G1/S-Cdk 推门进入 S phase
S-Cdk 启动复制并防止重复复制
M-Cdk 触发 mitosis
```

### 3. Cyclin-Cdk 的六层调控

Cyclin-Cdk 活性不是只由 cyclin 决定。主要调控层包括：

1. **Cyclin synthesis**：特定阶段合成特定 cyclin。
2. **Cyclin degradation**：ubiquitin ligase（泛素连接酶）介导降解，让阶段转换不可逆。
3. **Activating phosphorylation**：CAK（Cdk-activating kinase）在 Cdk 上加激活性磷酸基团。
4. **Inhibitory phosphorylation**：Wee1 激酶给 Cdk 加抑制性磷酸基团。
5. **Dephosphorylation**：Cdc25 磷酸酶去掉抑制性磷酸基团，激活 Cdk。
6. **CKI binding**：Cdk inhibitor proteins（如 p21、p27）直接抑制 Cyclin-Cdk。

记忆方式：**合成、降解、激活磷酸化、抑制磷酸化、去磷酸化、CKI 抑制**——六层调控，层层把关。

### 4. CKI：Cdk inhibitor proteins（Cdk 抑制蛋白）

CKI 是细胞周期的"刹车片"。典型例子：

- **p27**：抑制 G1/S-Cdk 和 S-Cdk。
- **p21**：常由 p53 上调，用于 DNA damage 后阻止细胞继续周期。

如果 DNA 受损，p53 上调 p21，p21 抑制 Cyclin-Cdk，细胞停在 G1/S 或 G2/M 附近，给修复争取时间。

### 5. SCF 和 APC/C：让细胞周期单向前进的泛素连接酶

两个重要的 ubiquitin ligases（泛素连接酶）：

| 复合体 | 主要作用 |
|---|---|
| SCF | 降解 CKI 等蛋白，推动 G1/S transition |
| APC/C | 降解 securin 和 M-cyclin，推动 metaphase-to-anaphase transition 和退出 mitosis |

**APC/C 的关键作用**（这是考试高频考点）：

- 降解 **securin**，释放 **separase**。
- separase 切割 **cohesin**，让姐妹染色单体分离。
- 同时降解 **S-cyclin** 和 **M-cyclins**，使 Cdk 活性全面下降，细胞退出 mitosis。

APC/C 需要激活因子才能工作：

- **Cdc20**：在 metaphase-to-anaphase transition 激活 APC/C。
- **Cdh1**：在 M phase 后期和 G1 维持 APC/C 活性。

### 6. 三个关键 Checkpoint

| Checkpoint | 位置 | 检查内容 | 失败后果 |
|---|---|---|---|
| G1/S transition（Restriction point） | G1 晚期 | DNA damage、细胞大小、营养、mitogens | 带损伤进入复制，突变累积 |
| G2/M transition | G2 晚期 | DNA 是否复制完成、是否有损伤 | 未复制完或受损 DNA 进入 mitosis |
| Metaphase-to-anaphase transition | M 中期 | 所有 kinetochore 是否正确连接 spindle | 染色体错误分离，aneuploidy |

## 三、S Phase：DNA 复制与"只复制一次"

### 1. S phase 的核心挑战

DNA replication 有两个硬要求：

1. 每一段 DNA 都必须被复制（不能漏）。
2. 每个 origin（复制起点）在一个细胞周期中只能启动一次（不能重复）。

如果 origin 没启动，会出现缺失复制；如果 origin 重复启动，会造成基因组不稳定。

### 2. Origin licensing：只复制一次的关键机制

在 G1 期，复制起点被"许可"（licensing）：

```text
ORC（Origin Recognition Complex）结合 origin
  -> Cdc6 和 Cdt1 被招募
  -> MCM helicase（解旋酶）被装载
  -> pre-replicative complex（pre-RC）形成
  -> origin 获得"许可"，可以被启动
```

进入 S phase 后：

```text
S-Cdk 和 DDK（Dbf4-dependent kinase）激活 licensed origins
  -> MCM helicase 启动解旋
  -> DNA replication begins
```

同时，**S-Cdk 会阻止新的 licensing 发生**。这样同一个 origin 在 S phase 不能重新装载 MCM，因此不会重复复制。

### 3. 防止 rereplication（重复复制）的几层机制

| 机制 | 作用 |
|---|---|
| S-Cdk 磷酸化 licensing factors | 阻止 ORC/Cdc6/Cdt1 重新装载 MCM |
| Cdc6 降解或核输出 | 防止新 pre-RC 形成 |
| Geminin 抑制 Cdt1 | 抑制 licensing |
| M phase 结束后 Cdk 活性下降 | 下一轮 G1 才能重新 licensing |

**核心记忆点**：licensing 只能在低 Cdk 活性的 G1 发生；firing 发生在高 S-Cdk 活性的 S phase。高 Cdk 活性 = 禁止 licensing。

### 4. S phase 还发生什么

除了 DNA replication，S phase 还包括：

- **Histone synthesis**：合成组蛋白，用来包装新复制的 DNA。
- **Chromatin reassembly**：复制后的组蛋白修饰恢复。
- **Sister chromatid cohesion**：姐妹染色单体被 cohesin 连接，为后续分离做准备。
- **Centrosome duplication**：中心体复制，为后续 spindle assembly 做准备。

## 四、Mitosis（有丝分裂）：把染色体准确分开

### 1. Mitosis 的五个阶段

| 阶段 | 英文名 | 主要事件 |
|---|---|---|
| 前期 | Prophase | 染色体凝缩，centrosomes 分离，spindle 开始形成 |
| 前中期 | Prometaphase | 核膜破裂，microtubules 捕获 kinetochores |
| 中期 | Metaphase | 染色体排列在 metaphase plate（赤道板） |
| 后期 | Anaphase | sister chromatids 分离并移向两极 |
| 末期 | Telophase | 核膜重建，染色体去凝缩 |

Mitosis 的目标是把复制后的姐妹染色单体准确分到两个子细胞核中。

### 2. M-Cdk 触发 Mitosis

M-Cdk（也叫 MPF，Maturation Promoting Factor）活化后会推动多种 mitotic events：

- 磷酸化 **condensins**，促进 chromosome condensation（染色体凝缩）。
- 磷酸化 **nuclear lamins**，导致 nuclear envelope breakdown（核膜破裂）。
- 调控 **microtubule-associated proteins**，促进 mitotic spindle assembly（纺锤体组装）。
- 改变 **Golgi、ER** 等膜系统的组织方式。

M-Cdk 的激活具有**正反馈**（这是一个重要考点）：

```text
少量 M-Cdk 激活 Cdc25（去抑制性磷酸）
少量 M-Cdk 抑制 Wee1（加抑制性磷酸的激酶）
  -> 更多 M-Cdk 被快速激活
  -> 细胞迅速、同步地进入 mitosis
```

这种开关式激活让细胞能从 G2 快速跳入 M phase，而不是缓慢过渡。

### 3. 纺锤体的三类微管

Spindle（纺锤体）由 microtubules 组成，主要有三类：

| 微管类型 | 英文名 | 功能 |
|---|---|---|
| 动粒微管 | Kinetochore microtubules | 连接染色体 kinetochore，牵引染色体移动 |
| 极间微管 | Interpolar microtubules | 两极之间互相重叠，帮助 spindle elongation（纺锤体拉长） |
| 星体微管 | Astral microtubules | 连接细胞皮层，帮助定位 spindle |

**Kinetochore**（动粒）是染色体 centromere（着丝粒）区域形成的蛋白复合体，负责连接 spindle microtubules。每条染色体有两个 kinetochore（姐妹染色单体各一个），必须分别连接到两极——这叫 **bi-orientation**（双向定位）。

### 4. Metaphase-to-Anaphase Transition：后期的启动

姐妹染色单体由 **cohesin**（粘连蛋白）连接。只有当所有染色体都正确双向连接 spindle 后，细胞才允许进入 anaphase。

关键步骤（考试高频考点）：

```text
所有 kinetochore 正确连接并产生张力
  -> Spindle Assembly Checkpoint（SAC）关闭
  -> APC/C-Cdc20 被激活
  -> securin 被泛素化降解
  -> separase 被释放并激活
  -> cohesin 被 separase 切割
  -> sister chromatids 分离
```

**APC/C 同时降解 M-cyclin 和 S-cyclin**，使 Cdk 活性全面下降，帮助细胞退出 mitosis。

### 5. Spindle Assembly Checkpoint（纺锤体组装检查点）

Spindle Assembly Checkpoint（SAC）监控每个 kinetochore 是否都正确连接了 microtubules。

如果还有未连接或错误连接的 kinetochore：

- **Mad** 和 **Bub** 等 checkpoint proteins 在未连接的 kinetochore 上被激活。
- 它们产生 **wait signal**，抑制 APC/C-Cdc20。
- securin 不被降解，separase 不能激活。
- Anaphase 被阻止，细胞停留在 metaphase。

这个 checkpoint 对防止 **aneuploidy**（非整倍体）极其重要。如果 checkpoint 失效，染色体可能被不均等地分给子细胞。

## 五、Cytokinesis（胞质分裂）：一个细胞真正变成两个

### 1. 动物细胞的 Contractile Ring

动物细胞 cytokinesis 依赖 **actin** 和 **myosin II** 形成 **contractile ring**（收缩环）。

过程：

1. Anaphase 后期，细胞赤道处指定 cleavage plane（分裂面）。
2. **RhoA**（小 GTP 酶）在赤道皮层被激活。
3. Actin filaments 和 myosin II 组装成 contractile ring。
4. Myosin II 收缩 actin ring，形成 **cleavage furrow**（分裂沟）。
5. 细胞膜不断内陷，最终通过 **abscission**（断裂）分开两个子细胞。

### 2. Cleavage Furrow 的位置如何确定

Cleavage furrow 通常形成在 spindle 中央。Mitotic spindle 给细胞皮层提供空间信息：

- **Astral microtubules** 影响皮层张力。
- **Central spindle**（中央纺锤体）促进 RhoA 在赤道激活。
- RhoA 激活后促进 actin-myosin ring 组装。

所以 cytokinesis 不是随机切割，而是由 mitotic spindle 指定切割位置。

### 3. 植物细胞的 Cell Plate

植物细胞有坚硬细胞壁，不能像动物细胞一样用 cleavage furrow 向内收缩。植物细胞通过 **Golgi-derived vesicles** 在中央形成 **cell plate**（细胞板），再逐渐扩展并与原有细胞壁融合。

## 六、细胞分裂与细胞生长的调控

### 1. 细胞为什么需要外界信号

多细胞生物中的细胞不能只根据自己内部状态分裂。它们还要听组织层面的指令：

- 是否有足够 **mitogens**（有丝分裂原）。
- 是否有营养和能量。
- 是否有 **survival signals**（存活信号）。
- 是否贴附在正确 **ECM**（细胞外基质）上。
- 周围细胞密度是否允许继续增殖。

如果细胞脱离这些控制仍持续分裂，就接近癌变逻辑。

### 2. Mitogens（有丝分裂原）

Mitogens 是促进细胞进入 cell cycle 的外界信号，例如 EGF、FGF、NGF、erythropoietin 等。

典型通路：

```text
Mitogen 结合受体
  -> Receptor Tyrosine Kinase 激活
  -> Ras-MAPK pathway
  -> Myc 等转录因子表达
  -> G1 cyclins 表达增加
  -> G1-Cdk / G1/S-Cdk 活化
  -> Rb 被磷酸化
  -> E2F 被释放
  -> S phase genes 被激活
  -> 细胞进入 S phase
```

### 3. Rb-E2F Restriction Point（限制点）

**Rb**（Retinoblastoma protein）是 G1/S transition 的重要抑制因子。

**无 mitogen 时**：

```text
Rb 结合 E2F（转录因子）
  -> E2F 不能激活 S phase genes
  -> 细胞停在 G1
```

**有 mitogen 时**：

```text
G1-Cdk / G1/S-Cdk 磷酸化 Rb
  -> Rb 构象改变，释放 E2F
  -> E2F 激活 DNA replication genes 和 S-cyclin genes
  -> 细胞通过 restriction point
  -> 之后对外界 mitogen 的依赖降低，自主完成剩余周期
```

**Restriction point 的意义**：通过这个点之后，细胞不再需要持续的 mitogen 刺激就能完成本轮周期。这是一个"不可逆的承诺点"。

### 4. DNA Damage Checkpoint（DNA 损伤检查点）

DNA damage 后，细胞会停下来修复。经典路径：

```text
DNA damage（如双链断裂）
  -> ATM / ATR（感受器激酶）被激活
  -> Chk1 / Chk2（效应器激酶）被激活
  -> p53 被稳定化（不被降解）
  -> p53 激活 p21 转录
  -> p21 抑制 Cyclin-Cdk
  -> cell cycle arrest（细胞周期停滞）
  -> 细胞有时间修复 DNA
```

如果损伤修复不了，p53 还可以激活 **apoptosis**（细胞凋亡）相关基因，让细胞自我毁灭，避免把突变传给子细胞。

**p53 因此被称为"基因组守护者"（guardian of the genome）**。p53 突变是人类癌症中最常见的突变之一。

### 5. 细胞大小与营养

细胞分裂前需要有足够质量和能量。细胞生长主要受 **mTOR、PI3K-Akt、Myc** 等通路调控。

关键逻辑：

- **Cell growth** 指细胞质量增加（变大）。
- **Cell division** 指细胞数量增加（变多）。
- 两者必须协调，否则会产生异常大小的细胞。

### 6. Contact Inhibition 与 Anchorage Dependence

正常细胞常受到两类组织环境限制：

- **Contact inhibition**（接触抑制）：细胞密度过高时停止增殖。
- **Anchorage dependence**（贴壁依赖）：许多细胞必须贴附 ECM 才能存活和分裂。

**癌细胞常丧失这些限制**，因此可以在高密度、低贴附甚至软琼脂中继续生长。这是癌细胞的重要特征之一。

## 七、考前速记版

| 阶段 | 核心事件 | 关键问题 |
|---|---|---|
| G1 | 生长、感受营养和 mitogens、决定是否进入周期 | 该不该分裂？ |
| S phase | DNA replication、histone synthesis、centrosome duplication | DNA 是否只复制一次？ |
| G2 | 检查 DNA replication 和 DNA damage | 能不能进 M phase？ |
| M phase | 染色体凝缩、核膜破裂、纺锤体组装、染色体分离 | 染色体能否平均分配？ |
| Cytokinesis | Contractile ring 收缩，细胞质分裂 | 两个子细胞如何真正分开？ |
| G0 | 暂时或长期退出细胞周期 | 是否保持静息或分化状态？ |

最常考的三个控制点：

1. **G1/S transition / Restriction point**：外界 mitogen、营养、细胞大小、DNA damage 决定是否进入 S phase。
2. **G2/M transition**：DNA 是否复制完成、是否有损伤，决定能否进入 mitosis。
3. **Metaphase-to-anaphase transition**：所有染色体是否正确连接 spindle，决定能否分离姐妹染色单体。

APC/C 降解路径速记：

```text
APC/C-Cdc20 激活
  -> 降解 securin -> separase 释放 -> cohesin 切割 -> 姐妹染色单体分离
  -> 同时降解 M-cyclin 和 S-cyclin -> Cdk 活性下降 -> 退出 mitosis
```

DNA replication once per cycle 速记：

```text
G1: low Cdk activity -> origin licensing 允许发生
S phase: S-Cdk -> firing origins 且阻止 re-licensing
S/G2/M: high Cdk activity -> 禁止 re-licensing
M exit: Cdk activity drops -> 下一轮 G1 才能重新 licensing
```

Rb-E2F 通路速记：

```text
无 mitogen: Rb 结合 E2F -> 细胞停在 G1
有 mitogen: G1-Cdk 磷酸化 Rb -> Rb 释放 E2F -> S phase genes 表达
```

## 八、关键词

- **Cell cycle**：细胞周期，细胞从一次分裂结束到下一次分裂结束的完整过程。
- **Cyclin**：周期蛋白，浓度随周期阶段波动，与 Cdk 结合后激活 Cdk。
- **Cdk**（Cyclin-dependent kinase）：周期蛋白依赖性激酶，蛋白水平稳定，活性由 cyclin 调控。
- **Checkpoint**：检查点，细胞周期中暂停并检查条件是否满足的质量控制机制。
- **Restriction point**：限制点，G1 晚期的不可逆承诺点，通过后不再依赖 mitogen。
- **Origin licensing**：复制起点许可，在 G1 期装载 MCM helicase 的过程。
- **Pre-RC**（pre-replicative complex）：前复制复合体，G1 期在 origin 上组装的蛋白复合物。
- **MCM helicase**：微小染色体维持解旋酶，在 S phase 解开 DNA 双链。
- **Cohesin**：粘连蛋白，连接姐妹染色单体。
- **Securin**：分离抑制蛋白，结合并抑制 separase。
- **Separase**：分离酶，切割 cohesin 的蛋白酶。
- **APC/C**（Anaphase-Promoting Complex/Cyclosome）：后期促进复合体，E3 泛素连接酶，降解 securin 和 cyclins。
- **SCF**：Skp1-Cullin-F-box 复合体，E3 泛素连接酶，降解 CKI 等蛋白。
- **Ubiquitin ligase**：泛素连接酶，给靶蛋白加上泛素标签，标记其被蛋白酶体降解。
- **Spindle Assembly Checkpoint (SAC)**：纺锤体组装检查点，监控 kinetochore 连接状态。
- **Kinetochore**：动粒，染色体着丝粒区域的蛋白复合体，连接 spindle microtubules。
- **Condensin**：凝缩蛋白，帮助染色体凝缩。
- **Nuclear lamins**：核纤层蛋白，构成核膜内层骨架，被 M-Cdk 磷酸化后导致核膜破裂。
- **Contractile ring**：收缩环，由 actin 和 myosin II 组成，执行动物细胞的胞质分裂。
- **RhoA**：小 GTP 酶，在赤道皮层激活，促进 contractile ring 组装。
- **Rb**（Retinoblastoma protein）：视网膜母细胞瘤蛋白，G1/S 转换的关键抑制因子。
- **E2F**：转录因子，被 Rb 抑制，释放后激活 S phase genes。
- **p53**：肿瘤抑制蛋白，"基因组守护者"，DNA 损伤后稳定化并激活 p21。
- **p21**：CKI，由 p53 上调，抑制 Cyclin-Cdk。
- **p27**：CKI，抑制 G1/S-Cdk 和 S-Cdk。
- **Mitogen**：有丝分裂原，促进细胞进入 cell cycle 的外界信号。
- **Wee1**：激酶，给 Cdk 加抑制性磷酸基团。
- **Cdc25**：磷酸酶，去掉 Cdk 上的抑制性磷酸基团，激活 Cdk。
- **CAK**（Cdk-activating kinase）：给 Cdk 加激活性磷酸基团。
- **Mad/Bub**：Spindle Assembly Checkpoint 蛋白，在未连接的 kinetochore 上抑制 APC/C-Cdc20。
- **Cdc20**：APC/C 的激活因子，在 metaphase-to-anaphase transition 激活 APC/C。
- **Cdh1**：APC/C 的激活因子，在 M phase 后期和 G1 维持 APC/C 活性。
- **Geminin**：抑制 Cdt1，阻止 origin re-licensing。

## 九、常见误区

- **"Cyclin 浓度高就有活性"是错的。** Cyclin 必须和 Cdk 结合，而且 Cdk 还需要激活性磷酸化、不能有抑制性磷酸化、不能被 CKI 结合，才有活性。
- **"Checkpoint 是一个具体位置"不准确。** Checkpoint 更像是一个质量控制机制，可以在多个时间点发挥作用，而不是细胞周期中的某个固定"站点"。
- **"APC/C 只在 anaphase 起作用"是错的。** APC/C 在 anaphase 启动时被 Cdc20 激活，之后通过 Cdh1 在 G1 期继续发挥作用，降解残余的 cyclins。
- **"DNA 复制只在 S phase 发生"需要精确理解。** 确实只有 S phase 进行大规模复制，但 licensing（装载 MCM）发生在 G1，而防止 re-licensing 的机制贯穿 S/G2/M。
- **"Spindle checkpoint 只检查有没有连接"不够全面。** 它检查的是所有 kinetochore 是否都正确双向连接（bi-orientation）并产生张力。
- **"p53 只负责细胞周期停滞"是错的。** p53 在损伤无法修复时还能激活凋亡（apoptosis）通路。
- **"Cytokinesis 和 mitosis 完全独立"不准确。** Cytokinesis 的分裂面由 mitotic spindle 指定，两者在时间和空间上是协调的。
- **"癌细胞只是分裂快"过于简化。** 癌细胞的核心特征是丧失正常的生长控制，包括 contact inhibition、anchorage dependence、checkpoint 功能等。

## 十、自测题

1. 为什么细胞必须把 DNA replication 和 mitosis 严格排序？如果顺序被打乱会怎样？

答题关键：DNA 必须先复制再分离，否则子细胞会缺失遗传信息。复制必须只发生一次，否则基因组不稳定。

2. Flow cytometry 中 2N、2N-4N、4N DNA content 分别对应哪些阶段？

答题关键：2N = G1；2N-4N = S phase（正在复制）；4N = G2/M（复制完成但尚未分裂）。

3. Cyclin 和 Cdk 在细胞周期控制中分别提供什么？

答题关键：Cyclin 提供周期性变化和底物特异性；Cdk 提供激酶活性（磷酸化能力）。两者结合才有功能。

4. 为什么 origin licensing 只能发生在 G1？

答题关键：G1 期 Cdk 活性低，licensing factors 不被磷酸化抑制，可以装载 MCM。进入 S phase 后 S-Cdk 磷酸化 licensing factors 并阻止 re-licensing。

5. APC/C 降解 securin 和 M-cyclin 分别产生什么后果？

答题关键：降解 securin -> 释放 separase -> 切割 cohesin -> 姐妹染色单体分离。降解 M-cyclin -> M-Cdk 活性下降 -> 细胞退出 mitosis（核膜重建、染色体去凝缩等）。

6. Spindle Assembly Checkpoint 如何防止 aneuploidy？

答题关键：未连接的 kinetochore 上 Mad/Bub 蛋白产生 wait signal，抑制 APC/C-Cdc20，阻止 securin 降解和 anaphase 启动。直到所有染色体正确双向连接后，checkpoint 才解除。

7. Rb-E2F 通路如何把 mitogen 信号转化为 S phase gene expression？

答题关键：Mitogen -> RTK -> Ras-MAPK -> G1 cyclin 表达 -> G1-Cdk 磷酸化 Rb -> Rb 释放 E2F -> E2F 激活 S phase genes。通过 restriction point 后细胞不再依赖 mitogen。

8. DNA damage 后 p53-p21 如何阻止细胞继续分裂？

答题关键：DNA damage -> ATM/ATR -> Chk1/Chk2 -> p53 稳定化 -> p21 转录 -> p21 抑制 Cyclin-Cdk -> 细胞周期停滞。若损伤不可修复，p53 激活凋亡。

9. 动物细胞 cytokinesis 的 contractile ring 是由什么组成的？分裂面是如何确定的？

答题关键：Actin + myosin II。分裂面由 mitotic spindle 指定：central spindle 激活 RhoA，RhoA 促进 contractile ring 在赤道组装。

10. 癌细胞与正常细胞在细胞周期控制上有哪些关键差异？

答题关键：癌细胞常丧失 contact inhibition、anchorage dependence，checkpoint 功能异常（如 p53 突变），对 mitogen 依赖降低，可以不依赖外界信号持续分裂。

## 十一、深入扩展：Cyclin-Cdk 调控的答题套路

遇到 cell cycle control 的大题，可以按这六层写：

1. **Cyclin 合成**：哪个阶段合成哪种 cyclin。
2. **Cyclin 降解**：哪个 ubiquitin ligase（SCF 还是 APC/C）在什么阶段降解哪种 cyclin。
3. **Cdk 激活性磷酸化**：CAK 在哪个位点加磷酸。
4. **Cdk 抑制性磷酸化**：Wee1 在哪个位点加磷酸。
5. **Cdc25 / Wee1 调节**：去磷酸化激活 vs 磷酸化抑制的平衡。
6. **CKI 抑制**：p21、p27 等如何在特定条件下关闭 Cyclin-Cdk。

这六层涵盖了几乎所有 Cyclin-Cdk 相关的考题。

## 十二、常考比较：三个 Checkpoint 的对比

| 比较维度 | G1/S Checkpoint | G2/M Checkpoint | Spindle Checkpoint |
|---|---|---|---|
| 检查什么 | DNA damage、细胞大小、营养、mitogens | DNA 是否复制完成、是否有损伤 | Kinetochore 是否正确连接 spindle |
| 核心调控者 | Rb-E2F、p53-p21 | ATM/ATR、Chk1/Chk2 | Mad/Bub |
| 失败后果 | 带损伤进入复制，突变累积 | 未复制完或受损 DNA 进入 mitosis | 染色体错误分离，aneuploidy |
| 阻止方式 | CKI 抑制 Cyclin-Cdk | 抑制 Cdc25 或激活 Wee1 | 抑制 APC/C-Cdc20 |

## 十三、本讲总主线

Cell cycle 的复习主线是：**Cyclin-Cdk 提供阶段性推进力，checkpoint 提供质量控制，SCF/APC-C 提供不可逆转换，Rb/E2F 和 p53/p21 把外界增殖信号与内部 DNA 状态接入周期决策。** 能把这几条线串起来，就能解释大多数细胞周期题。

一句话总结：

```text
G1 判断环境和细胞状态
  -> S phase 复制 DNA 且每个 origin 只启动一次
  -> G2 检查复制是否完成和 DNA 是否受损
  -> M phase 凝缩染色体、组装纺锤体、分离姐妹染色单体
  -> Cytokinesis 把一个细胞分成两个
```

细胞周期控制系统的本质是：**Cyclin-Cdk 活性按时间顺序升降，checkpoint 负责在错误未修复前踩刹车，蛋白降解系统（APC/C 和 SCF）负责让过程不可逆地向前推进。**
