export interface IGroqModelData {
  id: string;
  ownedBy: string;
  contextWindow: number;
}

export const GROQMODELDATA: IGroqModelData[] = [
  {
    id: "llama3-groq-70b-8192-tool-use-preview",
    ownedBy: "Groq",
    contextWindow: 8192,
  },
  {
    id: "gemma2-9b-it",
    ownedBy: "Google",
    contextWindow: 8192,
  },
  {
    id: "llama3-8b-8192",
    ownedBy: "Meta",
    contextWindow: 8192,
  },
  {
    id: "llama-3.2-90b-vision-preview",
    ownedBy: "Meta",
    contextWindow: 8192,
  },
  {
    id: "llama3-70b-8192",
    ownedBy: "Meta",
    contextWindow: 8192,
  },
  {
    id: "llama-3.2-11b-vision-preview",
    ownedBy: "Meta",
    contextWindow: 8192,
  },
  {
    id: "llama-3.2-11b-text-preview",
    ownedBy: "Meta",
    contextWindow: 8192,
  },
  {
    id: "whisper-large-v3-turbo",
    ownedBy: "OpenAI",
    contextWindow: 448,
  },
  {
    id: "llava-v1.5-7b-4096-preview",
    ownedBy: "Other",
    contextWindow: 4096,
  },
  {
    id: "llama-3.1-70b-versatile",
    ownedBy: "Meta",
    contextWindow: 32768,
  },
  {
    id: "llama-3.2-3b-preview",
    ownedBy: "Meta",
    contextWindow: 8192,
  },
  {
    id: "whisper-large-v3",
    ownedBy: "OpenAI",
    contextWindow: 448,
  },
  {
    id: "llama-guard-3-8b",
    ownedBy: "Meta",
    contextWindow: 8192,
  },
  {
    id: "mixtral-8x7b-32768",
    ownedBy: "Mistral AI",
    contextWindow: 32768,
  },
  {
    id: "gemma-7b-it",
    ownedBy: "Google",
    contextWindow: 8192,
  },
  {
    id: "distil-whisper-large-v3-en",
    ownedBy: "Hugging Face",
    contextWindow: 448,
  },
  {
    id: "llama-3.2-1b-preview",
    ownedBy: "Meta",
    contextWindow: 8192,
  },
  {
    id: "llama-3.2-90b-text-preview",
    ownedBy: "Meta",
    contextWindow: 8192,
  },
  {
    id: "llama3-groq-8b-8192-tool-use-preview",
    ownedBy: "Groq",
    contextWindow: 8192,
  },
  {
    id: "llama-3.1-8b-instant",
    ownedBy: "Meta",
    contextWindow: 131072,
  },
];
