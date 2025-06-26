# Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
# SPDX-License-Identifier: MIT

import os
import dataclasses
from datetime import datetime
from jinja2 import Environment, FileSystemLoader, select_autoescape
from langgraph.prebuilt.chat_agent_executor import AgentState
from src.config.configuration import Configuration

# 初始化Jinja2环境
env = Environment(
    loader=FileSystemLoader(os.path.dirname(__file__)),
    autoescape=select_autoescape(),
    trim_blocks=True,
    lstrip_blocks=True,
)


def get_prompt_template(prompt_name: str) -> str:
    """
    使用Jinja2加载并返回提示模板。

    Args:
        prompt_name: 提示模板文件名（不含.md扩展名）

    Returns:
        具有适当变量替换语法的模板字符串
    """
    try:
        template = env.get_template(f"{prompt_name}.md")
        return template.render()
    except Exception as e:
        raise ValueError(f"加载模板 {prompt_name} 时出错: {e}")


def apply_prompt_template(
    prompt_name: str, state: AgentState, configurable: Configuration = None
) -> list:
    """
    将模板变量应用到提示模板并返回格式化的消息。

    Args:
        prompt_name: 要使用的提示模板名称
        state: 包含要替换变量的当前代理状态

    Returns:
        以系统提示作为第一条消息的消息列表
    """
    # 将状态转换为字典以进行模板渲染
    state_vars = {
        "CURRENT_TIME": datetime.now().strftime("%a %b %d %Y %H:%M:%S %z"),
        **state,
    }

    # 添加可配置变量
    if configurable:
        state_vars.update(dataclasses.asdict(configurable))

    try:
        template = env.get_template(f"{prompt_name}.md")
        system_prompt = template.render(**state_vars)
        return [{"role": "system", "content": system_prompt}] + state["messages"]
    except Exception as e:
        raise ValueError(f"应用模板 {prompt_name} 时出错: {e}")
