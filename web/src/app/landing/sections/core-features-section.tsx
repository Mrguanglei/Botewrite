// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { Bird, Microscope, Podcast, Usb, User } from "lucide-react";

import { BentoCard, BentoGrid } from "~/components/magicui/bento-grid";

import { SectionHeader } from "../components/section-header";

const features = [
  {
    Icon: Microscope,
    name: "深入探索，广泛覆盖",
    description:
      "通过先进工具解锁更深入的洞察。我们强大的搜索+爬虫和Python工具收集全面数据，提供深度报告以增强您的研究。",
    href: "https://github.com/Mrguanglei/Botewrite/blob/main/src/tools",
    cta: "了解更多",
    background: (
      <img alt="background" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: User,
    name: "人机协作",
    description:
      "通过简单的自然语言完善您的研究计划或调整重点领域。",
    href: "https://github.com/Mrguanglei/Botewrite/blob/main/src/graph/nodes.py",
    cta: "了解更多",
    background: (
      <img alt="background" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Bird,
    name: "Lang Stack",
    description:
      "使用LangChain和LangGraph框架自信地构建。",
    href: "https://www.langchain.com/",
    cta: "了解更多",
    background: (
      <img alt="background" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Usb,
    name: "MCP集成",
    description:
      "通过无缝MCP集成增强您的研究工作流程并扩展您的工具包。",
    href: "https://github.com/Mrguanglei/Botewrite/blob/main/src/graph/nodes.py",
    cta: "了解更多",
    background: (
      <img alt="background" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Podcast,
    name: "播客生成",
    description:
      "从报告中即时生成播客。非常适合移动学习或轻松分享发现。",
    href: "https://github.com/Mrguanglei/Botewrite/blob/main/src/podcast",
    cta: "了解更多",
    background: (
      <img alt="background" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
];

export function CoreFeatureSection() {
  return (
    <section className="relative flex w-full flex-col content-around items-center justify-center">
      <SectionHeader
        anchor="core-features"
        title="核心功能"
        description="了解Botewrite的有效性所在。"
      />
      <BentoGrid className="w-3/4 lg:grid-cols-2 lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
