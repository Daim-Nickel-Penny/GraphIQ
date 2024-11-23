export interface IChatRequest {
  id: string;
  userPrompt: string;
  base64Image?: string;
  context?: string;
  createdAt: number;
}
