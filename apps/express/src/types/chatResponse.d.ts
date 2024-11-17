export interface IChatResponse {
  id: string;
  createdAt: number;
  model: string;
  response: string;
  timeTaken: number;
}

/**
  {
  "id": "chatcmpl-ee384858-2d6d-4fbc-ba9a-486860620247",
  "createdAt": 1731837644,
  "model": "llama3-8b-8192",
  "response": "Hi! I'm here to help you analyze a graph for research purposes and extract important insights. What kind of graph do you have, and what are you looking to learn from it?",
  "timeTaken": 0.03281386
}
 */
