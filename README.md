# ABS 生物学课程复习讲义

这是基于本地 ABS 课程课件和已有学习笔记整理的中文复习讲义网站，覆盖 Advanced Biological Sciences 课程第 1-13 讲。

## 阅读方式

本仓库已转为私有，并关闭公开 GitHub Pages，因为网页中加入了课程课件截图。请在本地预览网页：

```bash
npm run build
npm run serve
```

然后打开：

`http://localhost:4173`

网站支持按讲次阅读、侧边目录跳转、关键词搜索，并在每讲开头加入了机制图/概念图，方便复习时先抓主线。

每讲页面还加入了 Wikimedia Commons 辅助理解图，图注中标明了来源和许可，适合配合文字讲义建立直观图像记忆。

另外，每讲补充了若干课程课件截图，帮助你把讲义文字和原始课堂图示对应起来。课件截图仅用于私有复习，不公开发布。

## 内容范围

- 第 1 讲：Cells and Genomes
- 第 2 讲：Cell Chemistry
- 第 3 讲：Protein Structure and Function
- 第 4 讲：DNA, Chromosomes and Genomes
- 第 5 讲：DNA Replication, Repair and Recombination
- 第 6 讲：From DNA to Protein
- 第 7 讲：Control of Gene Expression
- 第 8 讲：Manipulating Proteins, DNA and RNA
- 第 9 讲：Cell Membrane Structure and Functions
- 第 10 讲：Cross-membrane Transport
- 第 11 讲：Intracellular Compartments and Protein Sorting
- 第 12 讲：Intracellular Vesicular Traffic
- 第 13 讲：Cell Communication

## 项目结构

- `notes/`：每讲的 Markdown 讲义源文件。
- `docs/`：GitHub Pages 发布用静态网页。
- `scripts/build.js`：把 Markdown 讲义构建为网页。
- `scripts/wiki-images.json`：Wikimedia Commons 辅助配图的来源与许可信息。
- `scripts/slide-images.json`：课件截图图组的来源页码信息。
- `scripts/serve.js`：本地预览网页。

## 本地使用

```bash
npm run build
npm run serve
```

然后打开 `http://localhost:4173`。

## 说明

本仓库不提交原始 PDF、PPTX、DOCX 课件文件；网页中包含从本地课件截取的关键页图片，因此仓库应保持私有。
