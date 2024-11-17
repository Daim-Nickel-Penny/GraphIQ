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
    id: "1",
    userPrompt:
      "How can I identify significant communities within a large social network graph?",
    createdAt: 1731851654692,
  },
  {
    id: "2",
    userPrompt:
      "What are some effective techniques for detecting anomalies or outliers in graph data?",
    createdAt: 1731851654692,
  },
  {
    id: "3",
    userPrompt:
      "How can I measure the centrality of nodes in a graph to understand their importance?",
    createdAt: 1731851654692,
  },
  {
    id: "4",
    userPrompt:
      "What are the key challenges in analyzing dynamic graphs, and how can they be addressed?",
    createdAt: 1731851654692,
  },
  {
    id: "5",
    userPrompt:
      "Can you recommend a suitable graph database for handling large-scale graph data?",
    createdAt: 1731851654692,
  },
  {
    id: "6",
    userPrompt: "How can I extract meaningful insights from a knowledge graph?",
    createdAt: 1731851654692,
  },
  {
    id: "7",
    userPrompt:
      "What are some good datasets for practicing graph analysis techniques?",
    createdAt: 1731851654692,
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
    id: "1",
    createdAt: "1/21/1970, 6:34:11 AM",
    model: "llama3-8b-8192",
    response:
      "There are several techniques to identify significant communities within a large social network graph, including community detection algorithms like Louvain Modularity, Label Propagation, and Infomap. These algorithms can help you uncover groups of nodes that are densely connected within the graph.",
    timeTaken: 0.032978469,
  },
  {
    id: "2",
    createdAt: "1/21/1970, 6:34:11 AM",
    model: "llama3-8b-8192",
    response:
      "Anomaly detection in graph data can be approached using various methods, such as statistical anomaly detection, spectral clustering, and isolation forest. These techniques can help you identify nodes or edges that deviate significantly from the normal patterns within the graph.",
    timeTaken: 0.032978469,
  },
  {
    id: "3",
    createdAt: "1/21/1970, 6:34:11 AM",
    model: "llama3-8b-8192",
    response:
      "Node centrality measures like degree centrality, betweenness centrality, and eigenvector centrality can help you understand the importance of nodes within a graph. These measures can be used to identify influential nodes or hubs that play critical roles in the network.",
    timeTaken: 0.032978469,
  },
  {
    id: "4",
    createdAt: "1/21/1970, 6:34:11 AM",
    model: "llama3-8b-8192",
    response:
      "Analyzing dynamic graphs presents challenges like handling temporal changes, evolving relationships, and scalability. Techniques like temporal graph mining, time-aware community detection, and incremental graph algorithms can be employed to address these challenges.",
    timeTaken: 0.032978469,
  },
  {
    id: "5",
    createdAt: "1/21/1970, 6:34:11 AM",
    model: "llama3-8b-8192",
    response:
      "The choice of graph database depends on factors like data volume, query complexity, and performance requirements. Popular options include Neo4j, Amazon Neptune, and TigerGraph, each with its strengths and weaknesses.",
    timeTaken: 0.032978469,
  },
  {
    id: "6",
    createdAt: "1/21/1970, 6:34:11 AM",
    model: "llama3-8b-8192",
    response:
      "Extracting insights from a knowledge graph often involves techniques like knowledge graph embedding, path finding algorithms, and rule-based reasoning. These techniques can help you discover hidden relationships, identify anomalies, and make predictions.",
    timeTaken: 0.032978469,
  },
  {
    id: "7",
    createdAt: "1/21/1970, 6:34:11 AM",
    model: "llama3-8b-8192",
    response:
      "Some popular datasets for practicing graph analysis techniques include: * SNAP Datasets: Offers a variety of social networks, citation networks, and web graphs. * Cora and CiteSeer: Citation networks for academic papers. * Amazon Co-Purchasing Network: A network of products frequently bought together. * Protein-Protein Interaction Networks: Biological networks representing interactions between proteins.",
    timeTaken: 0.067,
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
