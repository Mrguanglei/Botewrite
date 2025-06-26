// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { Bike, Building, Film, Github, Ham, Home, Pizza } from "lucide-react";
import { Bot } from "lucide-react";

import { BentoCard } from "~/components/magicui/bento-grid";

import { SectionHeader } from "../components/section-header";

const caseStudies = [
  {
    id: "eiffel-tower-vs-tallest-building",
    icon: Building,
    title: "埃菲尔铁塔与最高建筑相比有多高？",
    description:
      "该研究比较了埃菲尔铁塔和哈利法塔的高度和全球意义，并使用Python代码计算倍数。",
  },
  {
    id: "github-top-trending-repo",
    icon: Github,
    title: "GitHub上最热门的仓库有哪些？",
    description:
      "该研究利用MCP服务识别最受欢迎的GitHub仓库，并使用搜索引擎详细记录。",
  },
  {
    id: "nanjing-traditional-dishes",
    icon: Ham,
    title: "写一篇关于南京传统菜品的文章",
    description:
      "该研究通过丰富的内容和图像生动展示了南京的著名菜品，揭示了它们隐藏的历史和文化意义。",
  },
  {
    id: "rental-apartment-decoration",
    icon: Home,
    title: "如何装饰小型出租公寓？",
    description:
      "该研究为读者提供了装饰公寓的实用和直接方法，并配有鼓舞人心的图像。",
  },
  {
    id: "review-of-the-professional",
    icon: Film,
    title: "介绍电影《这个杀手不太冷》",
    description:
      "该研究全面介绍了电影《这个杀手不太冷》，包括其情节、角色和主题。",
  },
  {
    id: "china-food-delivery",
    icon: Bike,
    title: "如何看待中国的外卖战争？（中文）",
    description:
      "该研究分析了京东和美团之间日益激烈的竞争，突出了它们的策略、技术创新和挑战。",
  },
  {
    id: "ultra-processed-foods",
    icon: Pizza,
    title: "超加工食品与健康有关联吗？",
    description:
      "该研究考察了超加工食品消费增加的健康风险，敦促对长期影响和个体差异进行更多研究。",
  },
  {
    id: "ai-twin-insurance",
    icon: Bot,
    title: '写一篇关于"你会为你的AI双胞胎投保吗？"的文章',
    description:
      "该研究探讨了为AI双胞胎投保的概念，突出了它们的益处、风险、伦理考虑和不断发展的监管。",
  },
];

export function CaseStudySection() {
  return (
    <section className="relative container hidden flex-col items-center justify-center md:flex">
      <SectionHeader
        anchor="case-studies"
        title="案例研究"
        description="通过回放查看Botewrite的实际应用。"
      />
      <div className="grid w-3/4 grid-cols-1 gap-2 sm:w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.title} className="w-full p-2">
            <BentoCard
              {...{
                Icon: caseStudy.icon,
                name: caseStudy.title,
                description: caseStudy.description,
                href: `/chat?replay=${caseStudy.id}`,
                cta: "点击观看回放",
                className: "w-full h-full",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
