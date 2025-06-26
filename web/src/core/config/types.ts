export interface ModelConfig {
  basic: string[];
  reasoning: string[];
}

export interface RagConfig {
  provider: string;
}

export interface BoteWriteConfig {
  rag: RagConfig;
  models: ModelConfig;
}
