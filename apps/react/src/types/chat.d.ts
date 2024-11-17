import { IChatResponse } from "./chatResponse";

export interface IChat {
  createdAt: number;
  model: string;
  responses?: Array<IChatResponse>;
  requests?: Array<IChatRequest>;
}
