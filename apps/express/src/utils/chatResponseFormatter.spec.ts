import { groqchatResponseMock } from "../__mocks__/groqchatResponseMock";
import chatResponseFormatter from "./chatResponseFormatter";
import { IChatResponse } from "../types/chatResponse";
import { describe, expect, it } from "vitest";
import { HttpError } from "src/errors/httpError";

describe("Unit test for Chat Response Formatter", () => {
  it("should return formatted response object as IChatResponse", async () => {
    const chatFormattedResponse =
      chatResponseFormatter.formatter(groqchatResponseMock);

    const expectedResponse: IChatResponse = {
      id: "chatcmpl-32232-343-4434-b603-4dghjsgej9",
      createdAt: "11/21/2024, 2:11:08 PM",
      model: "lama3-8b-8192",
      response:
        "Hi! It seems like you want me to analyze a graph for research purposes and extract important insights. I'd be happy to help! Can you please provide the graph you'd like me to analyze? It could be a visual graph, a table, or even a dataset. Additionally, what kind of insights are you looking to extract from the graph? Are you looking for trends, correlations, patterns or something else?",
      timeTaken: 0.080814619,
    };

    expect(chatFormattedResponse).toEqual(expectedResponse);
  });

  it("should throw error if response is empty", () => {
    expect(() => chatResponseFormatter.formatter(null)).toThrow(
      new HttpError("Error formatting chat response", 400)
    );
  });

  it("should throw error if response is not an object", () => {
    expect(() => chatResponseFormatter.formatter("test")).toThrow(
      new HttpError("Error formatting chat response", 400)
    );
  });
});
