# Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
# SPDX-License-Identifier: MIT

from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, Field


class StepType(str, Enum):
    RESEARCH = "research"
    PROCESSING = "processing"


class Step(BaseModel):
    need_search: bool = Field(..., description="必须为每个步骤明确设置")
    title: str
    description: str = Field(..., description="明确指定要收集什么数据")
    step_type: StepType = Field(..., description="表示步骤的性质")
    execution_res: Optional[str] = Field(
        default=None, description="步骤执行结果"
    )


class Plan(BaseModel):
    locale: str = Field(
        ..., description="例如'en-US'或'zh-CN'，基于用户的语言"
    )
    has_enough_context: bool
    thought: str
    title: str
    steps: List[Step] = Field(
        default_factory=list,
        description="研究和处理步骤以获得更多上下文",
    )

    class Config:
        json_schema_extra = {
            "examples": [
                {
                    "has_enough_context": False,
                    "thought": (
                        "为了了解AI的当前市场趋势，我们需要收集全面的信息。"
                    ),
                    "title": "AI市场研究计划",
                    "steps": [
                        {
                            "need_search": True,
                            "title": "当前AI市场分析",
                            "description": (
                                "收集AI行业市场规模、增长率、主要参与者和投资趋势的数据。"
                            ),
                            "step_type": "research",
                        }
                    ],
                }
            ]
        }
