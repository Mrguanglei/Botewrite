// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { motion } from "framer-motion";
import Link from "next/link";

import { cn } from "~/lib/utils";

export function Welcome({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn("flex flex-col", className)}
      style={{ transition: "all 0.2s ease-out" }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h3 className="mb-2 text-center text-3xl font-medium">
        👋 Hello, 好久不见!
      </h3>
      <div className="text-muted-foreground px-4 text-center text-lg">
        Welcome to{" "}
        <Link
          href="https://github.com/Mrguanglei/Botewrite"
          target="_blank"
          className="text-muted-foreground hover:text-foreground"
        >
          Botewrite
        </Link>
        , 一个基于前沿语言模型打造的深度研究助手，能够帮助您进行网络搜索、浏览信息以及处理复杂任务。
      </div>
    </motion.div>
  );
}
