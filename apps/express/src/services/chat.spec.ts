import Groq from "groq-sdk";
import chatResponseFormatter from "src/utils/chatResponseFormatter";
import { describe, expect, it, vi, vitest } from "vitest";

vi.mock("groq-sdk", () => ({
  Groq: vi.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: vi.fn(),
      },
    },
  })),
}));

vi.mock("src/utils/chatResponseFormatter", () => ({
  formatter: vi.fn(),
}));

// describe("Chat Service", () => {
//   it("should return chat response", async () => {
//     const userPrompt = "Tell me a joke";
//     const mockGroqResponse = {
//       id: "123",
//       created: 1631837644,
//       model: "LLAMA_3_8B_8192",
//       choices: [
//         {
//           message: {
//             content:
//               "Why don't skeletons fight each other? They don't have the guts.",
//           },
//         },
//       ],
//       usage: { total_time: 1.23 },
//     };

//     const formattedResponse = {
//       id: "123",
//       createdAt: "11/21/2024, 2:11:08 PM",
//       model: "lama3-8b-8192",
//       response:
//         "Why don't skeletons fight each other? They don't have the guts.",
//       timeTaken: 1.23,
//     };

//     const groqInstance = new Groq({
//       apiKey: "mock-api-key",
//     });

//     // chatResponseFormatter.formatter.mockReturnValue(formattedResponse);
//   });
// });
