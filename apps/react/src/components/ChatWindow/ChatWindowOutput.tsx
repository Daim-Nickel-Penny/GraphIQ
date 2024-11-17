import { useEffect } from "react";
import useChatStore from "../../stores/chatStore";
import useLoadingChatStore from "../../stores/loadingChatStore";
import { IChatRequest } from "../../types/chatRequest";
import { IChatResponse } from "../../types/chatResponse";
import Icon from "../Icon/Icon";

const ChatRequestComponent = ({ userPrompt, id }: IChatRequest) => {
  return (
    <div className="chat-window__chat-request" key={id}>
      <div className="chat-window__chat-request__content">{userPrompt}</div>
    </div>
  );
};

const ChatResponseComponent = ({ id, response }: IChatResponse) => {
  return (
    <div className="chat-window__chat-response" key={id}>
      <div className="chat-window__chat-response__icon">
        <Icon name="Sparkles" color="white" size="20px" />
      </div>
      <div className="chat-window__chat-response__content">{response}</div>
    </div>
  );
};

export default function ChatWindowOutput() {
  const { chatRequests, chatResponses } = useChatStore();
  const { isLoading } = useLoadingChatStore();

  return (
    <div className="chat-window__output" key={"chat-window-output"}>
      {chatRequests && chatRequests.length > 0 ? (
        <>
          {chatRequests.map((request, index) => (
            <div key={request.id}>
              <ChatRequestComponent
                userPrompt={request.userPrompt}
                id={request.id}
                createdAt={request.createdAt}
              />

              {chatResponses[index] && (
                <ChatResponseComponent
                  id={chatResponses[index].id}
                  createdAt={chatResponses[index].createdAt}
                  model={chatResponses[index].model}
                  response={chatResponses[index].response}
                  timeTaken={chatResponses[index].timeTaken}
                />
              )}
            </div>
          ))}
        </>
      ) : (
        <div className="chat-window__output__greeting">
          <img
            className="chat-window__output__greeting__logo"
            src="https://lucide.dev/logo.dark.svg"
            alt="logo"
          />
          <h3>Hi, how can I help you today?</h3>
        </div>
      )}
      {isLoading && (
        <div className="chat-window__output__loading">
          <div
            className="chat-window__output__loading__skeleton"
            style={{
              width: "50%",
            }}
          />
          <div
            className="chat-window__output__loading__skeleton"
            style={{
              width: "30%",
            }}
          />
          <div
            className="chat-window__output__loading__skeleton"
            style={{
              width: "10%",
            }}
          />
        </div>
      )}
    </div>
  );
}
