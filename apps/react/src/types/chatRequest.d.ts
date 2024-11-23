export interface IChatRequest {
  id: string;
  userPrompt: string;
  base64Image?: string;
  createdAt: number;
}
