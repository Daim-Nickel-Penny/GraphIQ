import { create } from "zustand";
import { IChatResponse } from "../types/chatResponse";
import { IChatRequest } from "../types/chatRequest";
const seedChats = [
  {
    id: "chat1",
    createdAt: Date.now(),
    model: "chatgpt-3.5",
    responses: [
      {
        id: "response1",
        createdAt: Date.now(),
        model: "chatgpt-3.5",
        response: "This is a sample response.",
        timeTaken: 1200,
      },
    ],
    requests: [
      {
        id: "jrj3-dfkj-234",
        userPrompt: "What's the weather like today?",
        createdAt: Date.now(),
      },
    ],
  },
  {
    id: "chat2",
    createdAt: Date.now(),
    model: "chatgpt-4",
    responses: [
      {
        id: "response2",
        createdAt: Date.now(),
        model: "chatgpt-4",
        response:
          "You will need to use the environment variables defined in .env.example to run Next.js AI Chatbot. It's recommended you use Vercel Environment Variables for this, but a .env file is all that is necessary. Note: You should not commit your .env file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts. Install Vercel CLI: npm i -g vercel Link local instance with Vercel and GitHub accounts (creates .vercel directory): vercel link Download your environment variables: vercel env pull",
        timeTaken: 1500,
      },
    ],
    requests: [
      {
        id: "ikd=3-dfkj-234",
        userPrompt: "Tell me a joke.",
        createdAt: Date.now(),
      },
    ],
  },
  {
    id: "chat3",
    createdAt: Date.now(),
    model: "bard", // Replace with the specific large language model used
    responses: [
      {
        id: "response3",
        createdAt: Date.now(),
        model: "bard",
        response: "What kind of music are you in the mood for today?",
        timeTaken: 800,
      },
    ],
    requests: [
      {
        id: "abc1-dfkj-234",
        userPrompt: "Hey there! What can you do for me?",
        createdAt: Date.now(),
      },
    ],
  },
  {
    id: "chat4",
    createdAt: Date.now(),
    model: "megatron-turing-nlg", // Replace with the specific large language model used
    responses: [
      {
        id: "response4",
        createdAt: Date.now(),
        model: "megatron-turing-nlg",
        response:
          "The capital of France is Paris. Did you know the Eiffel Tower was built in 1889?",
        timeTaken: 1300,
      },
    ],
    requests: [
      {
        id: "def2-dfkj-234",
        userPrompt: "What's the capital of France?",
        createdAt: Date.now(),
      },
    ],
  },
  {
    id: "chat5",
    createdAt: Date.now(),
    model: "gpt-j-6b", // Replace with the specific large language model used
    responses: [
      {
        id: "response5",
        createdAt: Date.now(),
        model: "gpt-j-6b",
        response:
          "Here are some upcoming events happening near you: Art Exhibition at City Hall, Concert in the Park, Food Truck Festival. Would you like details?",
        timeTaken: 2000,
      },
    ],
    requests: [
      {
        id: "ghi3-dfkj-234",
        userPrompt: "What's going on around town this weekend?",
        createdAt: Date.now(),
      },
    ],
  },
  {
    id: "chat6",
    createdAt: Date.now(),
    model: "Jurassic-1 Jumbo", // Replace with the specific large language model used
    responses: [
      {
        id: "response6",
        createdAt: Date.now(),
        model: "Jurassic-1 Jumbo",
        response:
          "I can translate between over 100 languages!  What language would you like to translate from and to?",
        timeTaken: 900,
      },
    ],
    requests: [
      {
        id: "jkl4-dfkj-234",
        userPrompt: "Can you translate something for me?",
        createdAt: Date.now(),
      },
    ],
  },
  {
    id: "chat7",
    createdAt: Date.now(),
    model: "WuDao 2.0", // Replace with the specific large language model used
    responses: [
      {
        id: "response7",
        createdAt: Date.now(),
        model: "WuDao 2.0",
        response:
          "Absolutely! I can help you write different kinds of creative text formats,  like poems, code, scripts, musical pieces, email, letters, etc. What would you like to try?",
        timeTaken: 1700,
      },
    ],
    requests: [
      {
        id: "mno5-dfkj-234",
        userPrompt: "I need help writing something creative. Can you assist?",
        createdAt: Date.now(),
      },
    ],
  },
];

interface ChatStore {
  chatRequests: IChatRequest[];
  chatResponses: IChatResponse[];

  addChatResponse: (response: IChatResponse) => void;
  addChatRequest: (request: IChatRequest) => void;
}

const useChatStore = create<ChatStore>((set) => ({
  chatRequests: [],
  chatResponses: [],

  addChatRequest: (request: IChatRequest) =>
    set((state) => ({
      chatRequests: [...state.chatRequests, request],
    })),
  addChatResponse: (response: IChatResponse) =>
    set((state) => ({
      chatResponses: [...state.chatResponses, response],
    })),
}));

export default useChatStore;
