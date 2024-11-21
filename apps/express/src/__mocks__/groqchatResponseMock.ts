export const groqchatResponseMock = {
  id: "chatcmpl-32232-343-4434-b603-4dghjsgej9",
  object: "chat.completion",
  created: 1732178468,
  model: "lama3-8b-8192",
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        content:
          "Hi! It seems like you want me to analyze a graph for research purposes and extract important insights. I'd be happy to help! Can you please provide the graph you'd like me to analyze? It could be a visual graph, a table, or even a dataset. Additionally, what kind of insights are you looking to extract from the graph? Are you looking for trends, correlations, patterns or something else?",
      },
      logprobs: null,
      finish_reason: "stop",
    },
  ],
  usage: {
    queue_time: 0.004084740999999999,
    prompt_tokens: 30,
    prompt_time: 0.009981286,
    completion_tokens: 85,
    completion_time: 0.070833333,
    total_tokens: 115,
    total_time: 0.080814619,
  },
  system_fingerprint: "fp_4993jd9d034j",
  x_groq: {
    id: "req_04848njehdud9neh4",
  },
};
