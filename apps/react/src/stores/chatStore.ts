import { create } from "zustand";
import { IChatResponse } from "../types/chatResponse";
import { IChatRequest } from "../types/chatRequest";
const seedChatRequests = [
  {
    id: "857460e2-eda1-4460-b3dd-43a423974db0",
    userPrompt: "hi",
    createdAt: 1731851654692,
  },
  {
    id: "23456789-abcd-ef12-3456-789012345678",
    userPrompt: "hello",
    createdAt: 1731851654693,
  },
  {
    id: "abcdef12-3456-7890-abcd-ef1234567890",
    userPrompt: "how are you?",
    createdAt: 1731851654694,
  },
  {
    id: "98765432-10fe-dcba-9876-543210fedcba",
    userPrompt: "what's the weather like?",
    createdAt: 1731851654695,
  },
  {
    id: "fedcba98-7654-3210-fedc-ba9876543210",
    userPrompt: "can you help me with something?",
    createdAt: 1731851654696,
  },
  {
    id: "13579246-80df-6c3a-e7b9-1597531a8fc2",
    userPrompt: "I have a question.",
    createdAt: 1731851654697,
  },
];
const seedChatResponses = [
  {
    id: "chatcmpl-09243048-7631-4aa8-86e8-3ea78adf36d6",
    createdAt: "1/21/1970, 6:34:11 AM",
    model: "llama3-8b-8192",
    response:
      "Hi! How can I help you with analyzing a graph for research purposes and parsing important insights? Do you have a specific graph or dataset in mind that you'd like to work with?",
    timeTaken: 0.032978469,
  },
  {
    id: "chatcmpl-12345678-90ab-cdef-1234-567890abcdef",
    createdAt: "1/22/1970, 6:34:12 AM",
    model: "llama3-8b-8192",
    response:
      "I can help you with that. Please provide me with the graph or dataset, and I'll analyze it for you.",
    timeTaken: 0.045678901,
  },
  {
    id: "chatcmpl-abcdef12-3456-7890-abcdef-1234567890",
    createdAt: "1/23/1970, 6:34:13 AM",
    model: "llama3-8b-8192",
    response:
      "Here are some insights I found from the graph: [list of insights]",
    timeTaken: 0.067890123,
  },
  {
    id: "chatcmpl-90abcdef-1234-5678-90ab-cdef12345678",
    createdAt: "1/24/1970, 6:34:14 AM",
    model: "llama3-8b-8192",
    response: "Would you like to explore any of these insights further?",
    timeTaken: 0.03456789,
  },
  {
    id: "chatcmpl-cdef1234-5678-90ab-cdef-1234567890",
    createdAt: "1/25/1970, 6:34:15 AM",
    model: "llama3-8b-8192",
    response:
      "I can help you with that. Please let me know what you'd like to explore.",
    timeTaken: 0.023456789,
  },
  {
    id: "chatcmpl-12345678-90ab-cdef-1234-567890abcdef",
    createdAt: "1/26/1970, 6:34:16 AM",
    model: "llama3-8b-8192",
    response:
      "I can also help you with other data analysis tasks. Just let me know what you need.",
    timeTaken: 0.012345678,
  },
];
interface ChatStore {
  chatRequests: IChatRequest[];
  chatResponses: IChatResponse[];

  addChatResponse: (response: IChatResponse) => void;
  addChatRequest: (request: IChatRequest) => void;
  getLastChatResponse: () => IChatResponse | undefined;
  getLastChatRequest: () => IChatRequest | undefined;
}

const useChatStore = create<ChatStore>((set, get) => ({
  chatRequests: seedChatRequests,
  chatResponses: seedChatResponses,

  addChatRequest: (request: IChatRequest) =>
    set((state) => ({
      chatRequests: [...state.chatRequests, request],
    })),
  addChatResponse: (response: IChatResponse) =>
    set((state) => ({
      chatResponses: [...state.chatResponses, response],
    })),

  getLastChatResponse: () => {
    const state = get();
    const { chatResponses } = state;
    return chatResponses.length > 0
      ? chatResponses[chatResponses.length - 1]
      : undefined;
  },

  getLastChatRequest: () => {
    const state = get();
    const { chatRequests } = state;
    return chatRequests.length > 0
      ? chatRequests[chatRequests.length - 1]
      : undefined;
  },
}));

export default useChatStore;
