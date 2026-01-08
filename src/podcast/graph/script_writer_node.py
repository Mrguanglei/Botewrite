# Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
# SPDX-License-Identifier: MIT

import logging

from langchain.schema import HumanMessage, SystemMessage

from src.config.agents import AGENT_LLM_MAP
from src.llms.llm import get_llm_by_type
from src.prompts.template import get_prompt_template

from ..types import Script
from .state import PodcastState

logger = logging.getLogger(__name__)


def script_writer_node(state: PodcastState):
    logger.info("Generating script for podcast...")
    model = get_llm_by_type(AGENT_LLM_MAP["podcast_script_writer"])
    response = model.invoke(
        [
            SystemMessage(content=get_prompt_template("podcast/podcast_script_writer")),
            HumanMessage(content=state["input"]),
        ],
    )
    
    # 手动解析 JSON 响应
    try:
        import json
        from src.utils.json_utils import repair_json_output
        
        # 修复和解析 JSON 响应
        content = repair_json_output(response.content)
        script_data = json.loads(content)
        
        # 创建 Script 对象
        script = Script(**script_data)
    except Exception as e:
        logger.error(f"Failed to parse script JSON: {e}")
        # 如果解析失败，创建一个默认的 Script 对象
        script = Script(
            locale="en",
            lines=[]
        )
    
    print(script)
    return {"script": script, "audio_chunks": []}
