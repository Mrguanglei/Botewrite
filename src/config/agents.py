# Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
# SPDX-License-Identifier: MIT

from typing import Literal

# Define available LLM types
LLMType = Literal["basic", "reasoning", "vision"]

# Define agent-LLM mapping
AGENT_LLM_MAP: dict[str, LLMType] = {
    "coordinator": "reasoning",
    "planner": "reasoning",
    "researcher": "reasoning",
    "coder": "reasoning",
    "reporter": "reasoning",
    "podcast_script_writer": "reasoning",
    "ppt_composer": "reasoning",
    "prose_writer": "reasoning",
    "prompt_enhancer": "reasoning",
}
