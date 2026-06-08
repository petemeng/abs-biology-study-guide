# 第18讲学习讲义：Cell Junctions, Cell Adhesion and the Extracellular Matrix (II)（细胞连接与细胞外基质 II）

对应课件：`Lecture_18.pptx.pdf`

这一讲是"细胞连接与细胞外基质"系列的下篇。上篇主要讲了 Cadherin 介导的细胞-细胞粘附；本篇则把焦点转到**细胞如何通过 Integrin（整合素）粘附到细胞外基质上**，并由此获得生存信号、力学感知和迁移能力。随后还会讲到基底层（Basal Lamina）的组成与功能，以及细胞外基质（ECM）的三大类大分子。零基础也没关系，每个概念都会从"是什么、为什么、怎么工作"三步来讲。

## 这讲到底在讲什么

你需要先抓住三个核心判断：

- Integrin 是负责"细胞-基质粘附"的跨膜蛋白，它既是结构连接者，也是信号传递者。
- Integrin 可以通过"outside-in"和"inside-out"两种方向被激活，实现双向信号传递。
- 细胞外基质不是被动的填充物，它由蛋白聚糖、纤维蛋白和糖蛋白三大类分子组成，主动参与调控细胞的生存、迁移、分化和组织再生。

如果你把这三条真正理解了，后面关于 FAK/Src 信号通路、焦点粘附、基底层组装和 ECM 降解的内容就会非常顺。

## 一、前情回顾：细胞连接的完整分类

在学习 Integrin 之前，先回顾上篇讲过的细胞连接分类，确保框架完整。

### 1. 四大类细胞连接

| 类型 | 中文名 | 功能 | 涉及的细胞骨架 |
|------|--------|------|----------------|
| Tight junction | 紧密连接 | 封闭细胞间空隙（occluding） | -- |
| Adherens junction | 黏附连接 | 锚定相邻细胞的肌动蛋白（anchoring） | 肌动蛋白 actin |
| Desmosome | 桥粒 | 锚定相邻细胞的中间纤维（anchoring） | 中间纤维 IF |
| Gap junction | 间隙连接 | 形成通道，小分子通信（channel-forming） | -- |

### 2. 两类"细胞-基质"锚定连接（本讲主角）

| 类型 | 中文名 | 跨膜蛋白 | 连接的骨架 | 接头蛋白 |
|------|--------|----------|-----------|---------|
| **Focal adhesion** | 焦点粘附 | Integrin | 肌动蛋白 actin | talin, vinculin, kindlin |
| **Hemidesmosome** | 半桥粒 | Integrin (alpha6 beta4) | 中间纤维 IF | plectin, dystonin |

### 3. 两类跨膜粘附蛋白

- **Cadherin（钙黏蛋白）**：介导细胞与细胞之间的粘附。
- **Integrin（整合素）**：介导细胞与基质之间的粘附。

两者都可以连接 actin 或中间纤维，取决于具体亚型。

### 4. 上皮组织 vs 结缔组织

- **上皮组织（epithelial）**：细胞紧密排列成片，靠细胞-细胞连接为主；下面垫着**基底层**。
- **结缔组织（connective）**：细胞散在大量 ECM 中（如成纤维细胞、巨噬细胞），ECM 直接承担机械应力。

## 二、Integrin 是什么：结构与命名

### 1. 定义

Integrin 是一种跨膜蛋白，由 **alpha 亚基**和 **beta 亚基**组成的异二聚体（heterodimer），负责把细胞"挂"在细胞外基质上。

### 2. 为什么叫"integrin"

integr- 表示"整合"，因为它**整合**了细胞外环境的信号和细胞内的细胞骨架。它既是结构连接者，也是信号传递者。

### 3. 核心特点

- 是异二聚体（alpha + beta 各一条）。
- 胞外端结合 ECM 蛋白（如纤连蛋白 fibronectin、层粘连蛋白 laminin、胶原 collagen）。
- 胞内端通过 **talin、kindlin、vinculin** 等接头蛋白连接到 actin 或中间纤维。
- 调控细胞功能（增殖、存活、迁移、分化）。
- 突变会导致多种遗传疾病。

### 4. 直观比喻

想象细胞是个站在钢丝上的杂技演员，Integrin 就是他脚下的"防滑钉鞋"——既能抓住钢丝（ECM），又能把脚部的肌肉力量（actin）传递给鞋底。

## 三、Integrin 的两种构象：活性态与失活态

这是理解 Integrin 功能的核心基础。

Integrin 是**双稳态分子**——可以在两种形状之间切换：

| 状态 | 形状 | 结合能力 |
|------|------|----------|
| **Inactive（失活态）** | 弯曲（bent），头部贴近膜 | 配体亲和力低，接头蛋白结合也弱 |
| **Active（激活态）** | 伸直（extended），头部翘起 | 强结合 ECM 配体 + 强结合胞内 talin |

实验证据：在电镜下，加入 RGD 肽（配体模拟物）后，Integrin 从蜷缩变成站立，直接证明了构象切换。

**关键点**：Integrin 既要会"粘"，也要会"松"。一直粘住就走不了，松开了又掉下来。两态切换正是实现这种动态调控的分子基础。

## 四、Integrin 激活的两种方向（核心考点）

这是 Integrin **信号双向传递**的精髓，也是本讲最重要的内容之一。

### 1. Outside-in activation（外向内激活）

**触发方式**：胞外 ECM 配体先结合到 Integrin 头部。

**过程**：
- 配体结合导致构象变化，胞内尾巴分开。
- talin、kindlin 被招募过来，焦点粘附开始组装。
- 激活下游信号：FAK、Src、PI3K、Rho-GTPase 等。
- 最终影响：actin 重组、细胞极性建立、细胞迁移、细胞收缩。

**意义**：让细胞**感知**自己粘在了什么基质上，并据此调整内部状态。

### 2. Inside-out activation（内向外激活）

**触发方式**：胞内信号分子激活 Integrin（以血小板凝血为经典例子）。

**过程**（血小板凝血通路）：
- 凝血酶（thrombin）结合受体，激活 Rap1，使其从 Rap1-GDP 变为 Rap1-GTP。
- Rap1-GTP 招募接头蛋白 RIAM。
- RIAM 把胞质中"折叠失活"的 talin 招募到膜上，暴露其 actin 结合域和 Integrin 结合域。
- Talin 结合 beta Integrin 胞内尾巴，Integrin 从弯曲变伸直。
- 胞外端获得高亲和力，强结合 fibrinogen（纤维蛋白原）。
- 血小板互相粘连，血栓形成。

**意义**：让细胞"决定"什么时候要变粘。平时血小板不粘血管壁（避免不停长血栓），但凝血信号一来立即激活粘附功能。

**临床联系**：alpha-IIb beta-3 突变导致 **Glanzmann 血小板无力症**，血小板不聚集，出血不止。

## 五、Integrin 下游信号通路：FAK/Src 与 Rho-GTPase

Integrin 激活后会启动多条下游信号通路，其中最重要的是 FAK/Src 通路和 Rho-GTPase 通路。

### 1. FAK/Src 通路

- Integrin 聚集导致 **FAK**（focal adhesion kinase，焦点粘附激酶）自磷酸化。
- FAK 招募 **Src** 家族激酶，进一步磷酸化下游底物。
- FAK/Src 磷酸化许多效应蛋白，影响三大方面：
  - **粘附动态**（adhesion dynamics）：焦点粘附的组装与拆解。
  - **细胞迁移**（cell migration）：驱动细胞运动。
  - **存活与生长**（survival/growth）：提供生存信号。

**关键实验**：敲掉 FAK 的成纤维细胞变成球形、不再迁移——直接证明 FAK 对细胞运动是必需的。

### 2. Rho-GTPase 通路

Rho-GTP（活化态）通过两条"腿"发挥作用：

**腿 A：通过 Rho kinase（ROCK）**
- ROCK 磷酸化 MLC（肌球蛋白轻链），激活 myosin。
- ROCK 同时抑制 MLC phosphatase，让 MLC 持续保持磷酸化状态。
- ROCK 激活 LIM kinase，抑制 cofilin，使 actin 不再被切断。
- 结果：myosin 活性升高，肌动蛋白趋于稳定。

**腿 B：通过 Formins**
- 促进 actin 束的生长。

**两条腿汇合**：应力纤维（stress fibers）增多，Integrin 进一步聚集，焦点粘附形成。

一句话总结：**Rho-GTPase 是焦点粘附 + 应力纤维的总开关。**

### 3. 焦点粘附的分层结构

焦点粘附是一个多层复合物，从上到下依次为：

- **最上层：Actin 调控层**（myosin, actinin 等）——调控肌动蛋白的组装与收缩。
- **力传导层**（vinculin, talin, paxillin, zyxin）——传递力学信号。
- **信号层**（FAK, paxillin）——启动下游信号。
- **细胞膜**。
- **受体层**（Integrin + ECM 配体）——直接结合基质。

功能上，焦点粘附同时承担**力传导（mechanotransduction）**和**信号转导**双重任务。

## 六、Integrin 与细胞迁移：五步循环

细胞像毛毛虫一样移动的过程可以分为五步：

1. **附着（Attachment）**：细胞已经通过焦点粘附粘在基质上。
2. **延伸（Extension）**：前缘伸出片状伪足（lamellipodium）和丝状伪足（filopodia），靠 actin 在 plus end 聚合驱动。
3. **新附着（New attachment）**：在前缘形成新的焦点粘附。
4. **收缩（Cell contraction）**：myosin II 收缩，把胞体往前拉。
5. **解粘附（De-adhesion）**：后部焦点粘附拆解；Integrin 被胞吞，回收到前缘，进入下一轮循环。

**Integrin 在迁移中的双重角色**：既要在前缘"粘住"，又要在后部"松手"。这正是前面讲的活性态/失活态切换和 inside-out/outside-in 激活的生理意义。

## 七、Integrin 与细胞生死：失锚凋亡

### 经典实验

把同样多的纤连蛋白涂成**一个大斑**或**许多小斑**：
- 大斑：细胞只能粘在一个点上，几小时后凋亡。
- 小斑：细胞能伸开、贴在多个点上，存活并增殖。

### 结论

- 没有正确的 ECM 附着，细胞会启动凋亡程序，这种现象叫 **anoikis（失锚凋亡）**。
- 有附着且 Integrin 信号被激活，细胞才能存活和增殖。

### 临床意义

肿瘤细胞往往能逃避 anoikis——不依赖锚定也能存活——这是它们能够转移的重要原因之一。

## 八、Integrin 缺陷与遗传疾病（考点）

以下是必须记忆的几种 Integrin 缺陷病：

| Integrin | 配体 | 分布 | 突变后的表型 |
|----------|------|------|-------------|
| alpha-5 beta-1 | Fibronectin（纤连蛋白） | 广泛 | 胚胎致死，血管/体节/神经嵴缺陷 |
| alpha-6 beta-1 | Laminin（层粘连蛋白） | 广泛 | 严重皮肤起疱 |
| alpha-7 beta-1 | Laminin | 肌肉 | 肌营养不良（muscular dystrophy） |
| **alpha-L beta-2（LFA-1）** | **ICAM-1**（Ig 超家族） | **白细胞** | **白细胞粘附缺陷（LAD）**，反复严重感染 |
| **alpha-IIb beta-3** | **Fibrinogen**（纤维蛋白原） | **血小板** | **Glanzmann 病**：血小板不聚集，出血 |
| **alpha-6 beta-4** | Laminin | **半桥粒（上皮）** | **严重皮肤起疱** |

**记忆窍门**：
- **beta-1 家族 = 通用粘附**（除非题目提示别的）。
- **beta-2 家族 = 白细胞**（免疫学常考）。
- **beta-3 家族 = 血小板/凝血**。
- **beta-4 = 半桥粒专属**（连接中间纤维，不是 actin）。

## 九、焦点粘附 vs 半桥粒：关键对比

| 特征 | 焦点粘附（Focal adhesion） | 半桥粒（Hemidesmosome） |
|------|---------------------------|------------------------|
| 跨膜蛋白 | Integrin | Integrin alpha-6 beta-4 |
| 连接的细胞骨架 | 肌动蛋白 actin | 中间纤维 keratin |
| 胞内接头蛋白 | talin, vinculin, kindlin | plectin, dystonin |
| 特点 | 动态、可拆装 | 稳定的"焊点" |
| 功能 | 细胞迁移、信号传导 | 上皮锚定到基底层 |

## 十、基底层 Basal Lamina

### 1. 基底层是什么

基底层是一层薄薄（40-120 nm）的特殊细胞外基质，铺在上皮细胞下方，像一层"地毯"。

注意区分：
- **Basal lamina（基底层）**= basement membrane 的核心层。
- **Basement membrane（基底膜）**= basal lamina + reticular lamina（网状层）。

### 2. 基底层出现在哪里

不只是上皮下方，还有：
- **肌肉细胞周围**：整圈包裹。
- **肾小球**：作为血液-尿液间的关键过滤层。
- **脂肪细胞、施万细胞（神经髓鞘形成细胞）周围**。

### 3. 基底层的五大功能

1. **机械屏障**：固定细胞位置，分隔上皮和结缔组织。
2. **再生指引模板**：组织受伤时细胞死了，基底层往往还在——它告诉新细胞"在哪里、长成什么样"。
3. **机械支撑**：薄但坚韧。
4. **过滤器**：肾小球的核心功能。
5. **影响细胞极性、分化、迁移**：通过 Integrin 信号。

### 4. 经典实验：基底层引导组织再生

切断神经-肌肉接头处的肌肉和神经，让细胞退化死亡，只剩残留的基底层壳。结果：
- 再生的神经回到原来的接头位置。
- 再生的肌纤维在原来位置形成新的乙酰胆碱受体簇。

这说明基底层"记得"接头位置，是一个**模板**。

### 5. 基底层的四大组成成分

| 分子 | 类型 | 角色 |
|------|------|------|
| **Laminin（层粘连蛋白）** | 糖蛋白 | 主组织者（primary organizer） |
| **Type IV collagen（IV 型胶原）** | 纤维蛋白 | 第二骨架，形成片状网络 |
| **Nidogen（巢蛋白）** | 糖蛋白 | 连接器，桥接 laminin 和 collagen IV |
| **Perlecan（基底膜聚糖）** | 蛋白聚糖 | 连接器 + 结构 + 过滤 |

**组装模型**：Laminin 和 Collagen IV 各自形成网络，Nidogen 和 Perlecan 作为连接器把两个网"钉"在一起，同时两个网都有 Integrin 结合位点，把细胞固定在基底层上。

### 6. 临床联系：表皮分离症（Epidermolysis bullosa）

病人皮肤一碰就起大水泡。

**机制**：表皮通过半桥粒连到基底膜，基底膜下方靠 VII 型胶原作为"锚定纤维"拉到真皮的胶原网。任何一个环节坏了——laminin、collagen VII、Integrin alpha-6 beta-4、collagen XVII——都会导致表皮和真皮分离，形成大水泡。

- **Junctional EB** = 基底膜内部断裂（laminin 或 collagen XVII 突变）。
- **Dystrophic EB** = 基底膜下方断裂（collagen VII 突变）。

## 十一、细胞外基质 ECM 概述

### 1. ECM 是什么

ECM 是比基底层更广义的概念——任何细胞外的"填充物质"都属于 ECM。它的多样性极大：骨骼和牙齿（钙化的 ECM）、肌腱（致密的 I 型胶原）、角膜（透明的 ECM）、水母的"果冻"（含水极高的 ECM）。

ECM 不只是"胶水"，它本身可以是组织的主要成分。

### 2. ECM 的多重功能

- 分化与生长调控。
- 形态发生。
- 组织结构维持。
- 损伤组织重塑。
- 细胞存活与迁移。
- 血管发生（angiogenesis）。

ECM 不是被动支架，它是**信号库**：释放因子（如 TGF-beta）、储存生长因子、决定组织硬度、通过 Integrin 影响细胞生死和分化。

### 3. 组织力学性质

不同组织的硬度（Young's modulus，杨氏模量）差异巨大：

| 组织 | 硬度趋势 |
|------|---------|
| 脑（brain） | 最软 |
| 肝（liver） | 软 |
| 正常乳腺 | 中等 |
| 恶性乳腺癌 | 比正常硬很多 |
| 肌肉、皮肤 | 较硬 |
| 关节软骨 | 很硬 |

**临床意义**：临床上摸到"硬块"怀疑癌——确实癌组织 ECM 重塑后会变硬。

## 十二、ECM 的三大类大分子

这是 ECM 部分的核心框架，必须记牢。

| 类别 | 中文 | 代表 | 特点 |
|------|------|------|------|
| **Proteoglycans + GAGs** | 蛋白聚糖 + 糖胺聚糖 | aggrecan, decorin, perlecan, syndecan, hyaluronan | 糖含量高（可达 95%）、强负电、形成凝胶 |
| **Fibrous proteins** | 纤维蛋白 | collagen, elastin | 纤维状、提供机械强度 |
| **Non-collagen glycoproteins** | 非胶原糖蛋白 | laminin, fibronectin, nidogen | 多功能，常作为黏附和组织"标记" |

后面所有内容都是在填充这三个框架。

## 十三、GAGs（糖胺聚糖）与透明质酸

### 1. GAGs 的结构

- 由**重复二糖单元**组成的未分支长链。
- 每个二糖由氨基糖和糖醛酸组成。
- 带大量负电（来自 -COO- 和 -SO3-），高度亲水，形成凝胶。

### 2. 四大类 GAG

| GAG | 关键特征 | 分布 |
|-----|---------|------|
| **Hyaluronan（透明质酸）** | 不硫酸化、不连蛋白、最长 | 关节液、皮肤、ECM 大空间填充 |
| Chondroitin sulfate / Dermatan sulfate | 硫酸化、连蛋白 | 软骨、皮肤 |
| **Heparin / Heparan sulfate** | 高度硫酸化、常作辅受体 | 细胞表面、基底层 |
| Keratan sulfate | 硫酸化 | 角膜、软骨 |

### 3. GAGs 为什么能抗压

- 负电吸引 Na+，渗透压拉水进来，GAGs 膨胀。
- 膨胀的 GAGs 像凝胶垫，能抗压缩（如关节软骨能承重）。
- 同时胶原抗拉伸，两者搭档，ECM 又抗压又抗拉。

想象一床棉被：GAGs 是棉花（蓬松，抗压），胶原是被套缝线（抗拉伸不破裂）。

### 4. 透明质酸（Hyaluronan）的特殊性

透明质酸与其他 GAG 截然不同：

| 特征 | Hyaluronan | 其他 GAGs |
|------|-----------|-----------|
| 是否硫酸化 | 否 | 是 |
| 是否连核心蛋白 | 否（自由游离） | 是（构成蛋白聚糖） |
| 合成位置 | 细胞膜表面酶直接合成 | 高尔基体内合成 |
| 长度 | 可达 25,000 个二糖重复 | 较短 |

功能：空间填充剂、引导细胞迁移的"高速公路"、保湿（1 g HA 能结合数升水）。

## 十四、蛋白聚糖 Proteoglycans

### 1. 蛋白聚糖 vs 糖蛋白（常考对比）

| 性质 | Proteoglycans（蛋白聚糖） | Glycoproteins（糖蛋白） |
|------|--------------------------|------------------------|
| 糖比重 | 最高可达 95% | 1-60% |
| 糖链类型 | GAGs（长、未分支） | 短、分支的寡糖 |
| 分子量 | 大（可达 3000 kD） | 一般小 |

### 2. 蛋白聚糖的功能

- **选择性筛网**：根据孔径和电荷决定哪些分子能通过。
- **结合并调控生长因子**：FGF、TGF-beta、趋化因子。
- **作为共受体**：例如 syndecan 协助 FGF 信号。

### 3. 重要蛋白聚糖

| 名字 | GAG 类型 | 位置 | 功能 |
|------|---------|------|------|
| **Aggrecan** | 硫酸软骨素 + 硫酸角质素 | 软骨 | 机械支撑，与 HA 形成巨型聚合体 |
| **Perlecan** | 硫酸肝素 | 基底层 | 结构 + 过滤 |
| **Syndecan-1** | 硫酸软骨素 + 硫酸肝素 | 细胞表面 | 黏附，结合生长因子 |

**Aggrecan 在软骨中的妙用**：上百条 aggrecan 通过 link protein 挂在一条 HA 长链上，形成"瓶刷"巨型复合物，把水牢牢锁住，使软骨能承重而不被压垮。

## 十五、胶原 Collagens

### 1. 基本性质

- ECM 的主要纤维蛋白。
- 哺乳动物总蛋白量的约 25%，是体内最多的蛋白质。
- 已知 27 种胶原、42 种 alpha 链。
- 典型分子：长、僵直、三股螺旋（triple helix）。
- 富含脯氨酸（proline）和甘氨酸（glycine），每 3 个氨基酸就有 1 个 Gly。

### 2. 结构层次

单条 alpha 链（Gly-X-Y 重复）→ 3 条绞合成三股螺旋分子（tropocollagen）→ 多个排列错位堆叠成原纤维（fibril，横纹周期 67 nm）→ 多个原纤维聚集成纤维（fiber）。

Gly 必不可少，因为 Gly 最小，能塞进三螺旋中心。

### 3. 主要胶原类型

| 类型 | 类别 | 分布 | 突变后果 |
|------|------|------|---------|
| **I** | 纤维形成型 | 骨、皮、肌腱、内脏（全身胶原 90%） | 骨缺陷、脆骨症（成骨不全） |
| II | 纤维形成型 | 软骨、椎间盘 | 软骨缺陷、侏儒 |
| III | 纤维形成型 | 皮肤、血管 | 血管易破 |
| **IV** | **网络形成型** | **基底层** | **Alport 综合征**（肾炎、耳聋） |
| VII | 锚定型 | 上皮下 | 皮肤起疱 |
| XVII | 跨膜型 | 半桥粒 | 皮肤起疱 |

**最关键的对比**：I 型胶原 = 全身骨架（最多）；IV 型胶原 = 基底层专属（不形成纤维而形成网）。

## 十六、弹性蛋白 Elastin

### 1. 基本性质

- 弹性纤维的核心成分。
- 弹性纤维 = elastin 核心 + 外层 fibrillin 微纤维。
- 弹性约为橡皮筋的 5 倍以上。

### 2. 工作原理

Elastin 单体含两种交替的结构域：疏水域（可舒展/卷曲，提供弹性）和交联域（通过赖氨酸残基交联形成网络）。拉时单体伸开，松时单体自发卷回，交联点不动，网络整体保持完整。

### 3. 相关遗传病

| 疾病 | 突变基因 | 主要表现 |
|------|---------|---------|
| **Marfan 综合征** | FBN1（fibrillin-1） | 主动脉容易破裂、晶体脱位、骨骼异常（个子高、手指长） |
| Williams 综合征 | ELN（elastin） | 动脉变薄、血管平滑肌过度增生 |

## 十七、纤连蛋白 Fibronectin

### 1. 基本性质

- 大型糖蛋白，二聚体，两条链通过二硫键连接。
- 可溶（血浆中循环）或不可溶纤维（组织中）。
- 特殊性质：不会自发组装，只有感受到张力 + 细胞表面受体才开始组装。

### 2. RGD 序列

**RGD = Arg-Gly-Asp**（精氨酸-甘氨酸-天冬氨酸），是 fibronectin 上结合 Integrin 的关键三联氨基酸，也是**通用粘附密码**——许多 ECM 蛋白都用 RGD 与 Integrin 结合。

**临床奇闻**：某些蛇毒分泌的"disintegrin"含有 RGD 序列，抢占血小板 Integrin 位点，阻止血小板聚集，导致受害者流血不止。这启发了抗血小板药物的设计。

## 十八、ECM 的降解与调控

ECM 不是一成不变的，必须能降解才能重塑（如伤口愈合、胚胎发育、肿瘤侵袭）。

### 1. 两大类降解酶

- **基质金属蛋白酶 MMPs**：依赖 Ca2+ 或 Zn2+，切胶原、纤连蛋白、层粘连蛋白等。
- **丝氨酸蛋白酶**：如 plasmin（纤溶酶）、uPA。

### 2. 三种控制降解的策略

**策略一：局部激活。** 例如 plasmin 系统——血液中循环的是无活性的 plasminogen，tPA 在血栓局部将其激活为 plasmin。PAI-1 抑制 tPA，alpha2-antiplasmin 抑制 plasmin，防止失控。这是临床溶栓药 tPA 的基础。

**策略二：膜面限制。** 让蛋白酶只在细胞膜上活化。例如膜结合型 MMPs、uPA 与 uPA 受体结合后仅在膜表面活化 plasminogen。肿瘤细胞高表达 uPA 可在膜表面降解周围 ECM，促进侵袭和转移。

**策略三：分泌抑制物。** TIMPs 抑制 MMPs，Serpins 抑制丝氨酸蛋白酶。alpha1-antitrypsin 是重要 serpin，其缺陷导致肺气肿（弹性蛋白酶失控破坏肺泡）。

## 十九、你现在必须会的关键词

- Integrin（整合素）：alpha-beta 异二聚体，介导细胞-基质粘附和信号传导。
- Focal adhesion（焦点粘附）：Integrin 聚集形成的粘附复合物，含 talin/vinculin/FAK 等。
- Hemidesmosome（半桥粒）：上皮细胞通过 alpha-6 beta-4 Integrin 锚定到基底层的连接结构。
- Outside-in activation：ECM 配体结合 Integrin 后启动胞内信号。
- Inside-out activation：胞内信号激活 Integrin，增强其对 ECM 的亲和力。
- FAK（焦点粘附激酶）：Integrin 下游关键激酶，对细胞迁移必不可少。
- Rho-GTPase：调控应力纤维和焦点粘附的总开关。
- Anoikis（失锚凋亡）：细胞失去 ECM 附着后启动的凋亡程序。
- Basal lamina（基底层）：铺在上皮下方的薄层特殊 ECM。
- Laminin（层粘连蛋白）：基底层的主组织者。
- Type IV collagen（IV 型胶原）：基底层的第二骨架，形成片状网络。
- Proteoglycan（蛋白聚糖）：核心蛋白 + GAG 链，糖含量可达 95%。
- GAG（糖胺聚糖）：强负电长链，形成凝胶，抗压缩。
- Hyaluronan（透明质酸）：不硫酸化、不连蛋白的超长 GAG。
- Collagen（胶原）：体内最多的蛋白质，三股螺旋结构。
- Elastin（弹性蛋白）：提供组织弹性的核心蛋白。
- Fibronectin（纤连蛋白）：含 RGD 序列的多功能糖蛋白。
- RGD 序列：Arg-Gly-Asp，Integrin 识别的通用粘附密码。
- MMP（基质金属蛋白酶）：降解 ECM 的关键酶家族。
- TIMP：MMP 的组织抑制物。

## 二十、常见误区

- "Integrin 只是一个粘附分子"是错的。它同时是信号受体，能激活 FAK/Src、Rho-GTPase 等多条通路，控制细胞存活、迁移和分化。
- "Outside-in 和 inside-out 是同一件事的两个方向"不准确。Outside-in 是细胞感知环境，inside-out 是细胞主动调控自己的粘附状态，两者触发机制和生理意义不同。
- "FAK 敲除只是让细胞粘不住"是错的。FAK 敲除的细胞仍然能粘附，但不能迁移，说明 FAK 的核心功能是驱动迁移而非粘附。
- "ECM 只是被动的结构支架"是错的。ECM 主动储存生长因子、传递力学信号、调控细胞命运。
- "蛋白聚糖和糖蛋白是一回事"是错的。蛋白聚糖糖含量可达 95%，糖链是长而不分支的 GAG；糖蛋白糖含量通常只有几个百分点，糖链是短而分支的寡糖。
- "所有胶原都形成纤维"是错的。IV 型胶原形成片状网络，不形成纤维。
- "半桥粒和焦点粘附的区别只是位置不同"是错的。它们的骨架连接（中间纤维 vs actin）、接头蛋白（plectin/dystonin vs talin/vinculin）和动态性都不同。
- "失锚凋亡（anoikis）和普通凋亡一样"不完全准确。Anoikis 特指因失去 ECM 附着而触发的凋亡，肿瘤细胞逃避 anoikis 是转移的关键步骤。

## 二十一、自测题

1. Integrin 有哪两种构象？它们分别对应什么功能状态？

答题关键：
- 失活态（弯曲，bent）：低亲和力。
- 激活态（伸直，extended）：高亲和力，可结合 ECM 配体和胞内 talin。

2. 请分别用一句话解释 outside-in activation 和 inside-out activation。

答题关键：
- Outside-in：ECM 配体结合 Integrin，触发胞内信号（FAK/Src/Rho），让细胞感知环境。
- Inside-out：胞内信号（如 Rap1-GTP）招募 talin 激活 Integrin，让细胞主动增强粘附（如血小板凝血）。

3. FAK 敲除的成纤维细胞会出现什么表型？这说明什么？

答题关键：
- 变成球形，不再迁移。
- 说明 FAK 对细胞运动是必需的，缺失 FAK 会导致细胞运动停滞。

4. 细胞迁移的五步循环是什么？

答题关键：
- 附着、延伸（lamellipodium）、新附着、收缩（myosin II）、解粘附（后部拆解，Integrin 回收）。

5. 什么是失锚凋亡（anoikis）？肿瘤细胞如何逃避它？

答题关键：
- 细胞失去 ECM 附着后启动的凋亡程序。
- 肿瘤细胞能不依赖锚定存活，逃避 anoikis，这是转移的重要基础。

6. 基底层的四大组成成分分别是什么？各自的核心功能？

答题关键：
- Laminin（主组织者）、Type IV collagen（第二骨架）、Nidogen（连接器）、Perlecan（蛋白聚糖型连接 + 过滤）。

7. 蛋白聚糖和糖蛋白有什么区别？

答题关键：
- 蛋白聚糖糖含量可达 95%，糖链是长而不分支的 GAG；糖蛋白糖含量通常只有几个百分点，糖链是短而分支的寡糖。

8. 为什么 GAGs 能帮助组织抗压缩？

答题关键：
- GAGs 带大量负电，吸引 Na+，渗透压拉水进来形成膨胀的凝胶，像凝胶垫一样抗压缩。同时胶原抗拉伸，两者配合使 ECM 既抗压又抗拉。

9. Glanzmann 病、LAD、Alport 综合征分别涉及哪些分子的突变？

答题关键：
- Glanzmann 病：Integrin alpha-IIb beta-3（血小板不聚集）。
- LAD：Integrin beta-2（白细胞粘附缺陷）。
- Alport 综合征：Type IV collagen（肾炎 + 耳聋）。

10. RGD 序列是什么？为什么蛇毒中的"disintegrin"能导致出血？

答题关键：
- RGD 是 Arg-Gly-Asp，Integrin 识别的通用粘附密码。
- Disintegrin 含 RGD 序列，竞争性抢占血小板 Integrin 位点，阻止血小板聚集，导致出血不止。

## 二十二、考前速记版

| 主题 | 速记要点 |
|------|---------|
| Integrin 结构 | alpha + beta 异二聚体，胞外结合 ECM，胞内连接 talin/vinculin/actin |
| 两种构象 | 失活态弯曲（低亲和力） vs 激活态伸直（高亲和力） |
| Outside-in | ECM 配体 → Integrin → FAK/Src/Rho → 感知环境 |
| Inside-out | 胞内信号（Rap1-GTP）→ talin 招募 → Integrin 激活 → 增强粘附 |
| 典型 inside-out | 血小板凝血：thrombin → Rap1 → RIAM → talin → Integrin 激活 → 血栓 |
| FAK/Src | Integrin 聚集 → FAK 自磷酸化 → 招募 Src → 磷酸化效应蛋白 |
| FAK 敲除 | 细胞变球形，不再迁移（FAK 对运动必需） |
| Rho-GTPase | 通过 ROCK（激活 myosin）和 Formins（促进 actin 生长）→ 应力纤维 + 焦点粘附 |
| 细胞迁移五步 | 附着 → 延伸 → 新附着 → 收缩 → 解粘附 → 循环 |
| Anoikis | 失去 ECM 附着 → 凋亡；肿瘤逃避它 → 可转移 |
| 基底层四成分 | Laminin（主组织者）+ Collagen IV（骨架）+ Nidogen（连接器）+ Perlecan（过滤） |
| ECM 三大类 | 蛋白聚糖+GAGs（抗压）；纤维蛋白 collagen+elastin（抗拉+弹性）；糖蛋白 laminin+fibronectin（粘附） |
| GAGs 特点 | 强负电、亲水、形成凝胶、抗压缩 |
| 透明质酸 | 不硫酸化、不连蛋白、超长、膜表面合成 |
| 蛋白聚糖 vs 糖蛋白 | 蛋白聚糖糖含量 95%、长 GAG 链；糖蛋白糖含量低、短分支寡糖 |
| 胶原 | 体内最多蛋白（25%），三螺旋，Gly-X-Y 重复，I 型最多（90%），IV 型形成网络（基底层） |
| 弹性蛋白 | elastin + fibrillin，交联网络，拉伸-回弹，Marfan 综合征（FBN1 突变） |
| Fibronectin | 含 RGD 序列，结合 Integrin，张力依赖组装 |
| ECM 降解 | MMPs + 丝氨酸蛋白酶；控制策略：局部激活、膜面限制、分泌抑制物（TIMPs/Serpins） |
| Glanzmann 病 | alpha-IIb beta-3 突变 → 血小板不聚集 → 出血 |
| LAD | beta-2 突变 → 白细胞不粘附 → 反复感染 |
| Alport 综合征 | Collagen IV 突变 → 肾炎 + 耳聋 |
| 表皮分离症 | 半桥粒/基底膜任一环节断裂 → 皮肤起疱 |

---

> **最重要的一句话总结**：细胞不是悬浮的孤立物，它通过 **Integrin** 抓住 **ECM**（含 collagen 提供拉力、GAGs 提供抗压、glycoproteins 提供精细识别），并通过这种抓握**感知力、获取生存信号、决定迁移方向**。Integrin 的双向激活（outside-in 和 inside-out）使细胞既能被动感知环境，也能主动调控粘附。FAK/Src 和 Rho-GTPase 是下游两大核心通路。基底层是 ECM 的一种特殊"薄膜版"，专门垫在上皮下方。任何一环出问题——粘附蛋白、ECM 蛋白、降解酶——都会导致从皮肤起疱到肿瘤转移的各种疾病。
