# Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
# SPDX-License-Identifier: MIT

import logging
import os
import subprocess
import uuid

from src.ppt.graph.state import PPTState

logger = logging.getLogger(__name__)


def ppt_generator_node(state: PPTState):
    logger.info("Generating ppt file...")
    # use marp cli to generate ppt file
    # https://github.com/marp-team/marp-cli?tab=readme-ov-file
    generated_file_path = os.path.join(
        os.getcwd(), f"generated_ppt_{uuid.uuid4()}.pptx"
    )
    ppt_file_path = state["ppt_file_path"]
    
    # Check if input file exists
    if not os.path.exists(ppt_file_path):
        error_msg = f"PPT markdown file not found: {ppt_file_path}"
        logger.error(error_msg)
        raise FileNotFoundError(error_msg)
    
    logger.info(f"Converting markdown to PPT: {ppt_file_path} -> {generated_file_path}")
    
    # Run marp command and check for errors
    result = subprocess.run(
        ["marp", ppt_file_path, "-o", generated_file_path],
        capture_output=True,
        text=True,
        timeout=60,  # 60 second timeout
    )
    
    if result.returncode != 0:
        error_msg = f"Failed to generate PPT: {result.stderr or result.stdout}"
        logger.error(f"Marp command failed with return code {result.returncode}")
        logger.error(f"Error output: {error_msg}")
        # Clean up temp file before raising error
        if os.path.exists(ppt_file_path):
            try:
                os.remove(ppt_file_path)
            except Exception as e:
                logger.warning(f"Failed to remove temp file {ppt_file_path}: {e}")
        raise RuntimeError(error_msg)
    
    # Check if output file was created
    if not os.path.exists(generated_file_path):
        error_msg = f"PPT file was not generated: {generated_file_path}"
        logger.error(error_msg)
        raise FileNotFoundError(error_msg)
    
    # remove the temp file
    if os.path.exists(ppt_file_path):
        try:
            os.remove(ppt_file_path)
        except Exception as e:
            logger.warning(f"Failed to remove temp file {ppt_file_path}: {e}")
    
    logger.info(f"generated_file_path: {generated_file_path}")
    return {"generated_file_path": generated_file_path}
