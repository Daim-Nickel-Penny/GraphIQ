import { useEffect, useRef } from "react";
import useChatStore from "../../stores/chatStore";
import useLoadingChatStore from "../../stores/loadingChatStore";
import { IChatRequest } from "../../types/chatRequest";
import { IChatResponse } from "../../types/chatResponse";
import Icon from "../Icon/Icon";

// import { encode, decode } from "js-base64";

const ChatRequestComponent = ({
  userPrompt,
  id,
  base64Image,
}: IChatRequest) => {
  return (
    <div className="chat-window__chat-request" key={id}>
      <div className="chat-window__chat-request__content">
        {userPrompt}

        {base64Image && (
          <img
            className="chat-window__chat-request__image"
            src={base64Image}
            alt="chat-window__chat-request__image"
          />
        )}
      </div>
    </div>
  );
};

const makeTextBold = (text: string) => {
  const bold = /\*\*(.*?)\*\*/gm;
  const boldText = text.replace(bold, "<strong>$1</strong>");
  return boldText;
};

const makeList = (text: string) => {
  //replace all * with <br/>
  text = text.replace(/\*/gm, "<br/> -");
  return text;
};

const ChatResponseComponent = ({ id, response }: IChatResponse) => {
  response = makeTextBold(response);
  response = makeList(response);

  return (
    <div className="chat-window__chat-response" key={id}>
      <div className="chat-window__chat-response__icon">
        <Icon name="Sparkles" color="white" size="20px" />
      </div>

      <div
        className="chat-window__chat-response__content"
        dangerouslySetInnerHTML={{ __html: response }}
      >
        {
          //set response as innerHTML
        }
      </div>
      <div
        className="chat-window__chat-copy__icon"
        onClick={() => {
          navigator.clipboard.writeText(response);
        }}
      >
        <Icon name="Clipboard" color="var(--very-light-grey)" size="20px" />
      </div>
    </div>
  );
};

export default function ChatWindowOutput() {
  const { chatRequests, chatResponses } = useChatStore();
  const { isLoading } = useLoadingChatStore();
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // console.log(chatRequests);
    // console.log(chatResponses);
  }, [chatRequests, chatResponses]);

  return (
    <div className="chat-window__output" key={"chat-window-output"}>
      {chatRequests && chatRequests.length > 0 ? (
        <>
          {chatRequests.map((request, index) => (
            <div key={request.id}>
              <ChatRequestComponent
                userPrompt={request.userPrompt}
                id={request.id}
                base64Image={request?.base64Image}
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
          <div ref={chatEndRef}></div>
        </>
      ) : (
        <div className="chat-window__output__greeting">
          <Icon name="Shell" color="white" size="50px" />
          <h3>Hi, got any graph questions?</h3>
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
