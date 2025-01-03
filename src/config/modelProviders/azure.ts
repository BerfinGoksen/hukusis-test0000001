import { ModelProviderCard } from '@/types/llm';

// ref: https://learn.microsoft.com/azure/ai-services/openai/concepts/models
const Azure: ModelProviderCard = {
  chatModels: [
    {
      deploymentName: 'gpt-35-turbo',
      description:
        'GPT 3.5 Turbo，OpenAI提供的高效模型，适用于聊天和文本生成任务，支持并行函数调用。',
      displayName: 'GPT 3.5 Turbo',
      enabled: true,
      functionCall: true,
      id: 'gpt-35-turbo',
      maxOutput: 4096,
      tokens: 16_385,
    },
    {
      deploymentName: 'gpt-35-turbo-16k',
      description: 'GPT 3.5 Turbo 16k，高容量文本生成模型，适合复杂任务。',
      displayName: 'GPT 3.5 Turbo',
      functionCall: true,
      id: 'gpt-35-turbo-16k',
      tokens: 16_384,
    },
    {
      deploymentName: 'gpt-4-turbo',
      description: 'GPT 4 Turbo，多模态模型，提供杰出的语言理解和生成能力，同时支持图像输入。',
      displayName: 'GPT 4 Turbo',
      enabled: true,
      functionCall: true,
      id: 'gpt-4',
      tokens: 128_000,
      vision: true,
    },
    {
      deploymentName: 'gpt-4-vision',
      description: 'GPT-4 视觉预览版，专为图像分析和处理任务设计。',
      displayName: 'GPT 4 Turbo with Vision Preview',
      id: 'gpt-4-vision-preview',
      tokens: 128_000,
      vision: true,
    },
    {
      deploymentName: 'VENI-AI-gpt-4o',
      description: 'GPT-4o Mini，小型高效模型，具备与GPT-4o相似的卓越性能。',
      displayName: 'GPT 4o Mini',
      enabled: true,
      functionCall: true,
      id: 'VENI-AI-gpt-4o',
      tokens: 128_000,
      vision: true,
    },
    {
      deploymentName: 'gpt-4o',
      description: 'GPT-4o 是最新的多模态模型，结合高级文本和图像处理能力。',
      displayName: 'GPT 4o',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o',
      tokens: 128_000,
      vision: true,
    },
  ],
  defaultShowBrowserRequest: true,
  description:
    'Azure 提供多种先进的AI模型，包括GPT-3.5和最新的GPT-4系列，支持多种数据类型和复杂任务，致力于安全、可靠和可持续的AI解决方案。',
  id: 'azure',
  modelsUrl: 'https://learn.microsoft.com/azure/ai-services/openai/concepts/models',
  name: 'Azure',
  url: 'https://azure.microsoft.com',
};

export default Azure;
