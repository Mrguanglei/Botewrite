import { type BoteWriteConfig } from "../config/types";

import { resolveServiceURL } from "./resolve-service-url";

declare global {
  interface Window {
    __botewriteConfig: BoteWriteConfig;
  }
}

export async function loadConfig() {
  const res = await fetch(resolveServiceURL("./config"));
  const config = await res.json();
  return config;
}

export function getConfig(): BoteWriteConfig {
  if (
    typeof window === "undefined" ||
    typeof window.__botewriteConfig === "undefined"
  ) {
    throw new Error("Config not found");
  }

  return window.__botewriteConfig;
}
