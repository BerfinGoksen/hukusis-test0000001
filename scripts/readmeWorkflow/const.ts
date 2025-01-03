export interface DataItem {
  author: string;
  createdAt: string;
  homepage: string;
  identifier: string;
  meta: { avatar: string; description: string; tags: string[]; title: string };
}

export const MARKET_URL = 'https://chat-preview.lobehub.com/market';
export const PLGUIN_URL = 'https://chat-preview.lobehub.com/settings/agent';
export const AGENT_EN_URL = 'https://chat-agents.lobehub.com/';
export const AGENT_CN_URL = 'https://chat-agents.lobehub.com/';
export const AGENT_REPO = 'https://github.com/aliozkanozdurmus/invenire-law-expert';
export const PLUGIN_EN_URL = 'https://chat-plugins.lobehub.com/index.json';
export const PLUGIN_CN_URL = 'https://chat-plugins.lobehub.com/index.zh-CN.json';
export const PLUGIN_REPO = 'www.invenire.com.tr-plugins';

export const AGENT_SPLIT = '<!-- AGENT LIST -->';
export const PLUGIN_SPLIT = '<!-- PLUGIN LIST -->';
