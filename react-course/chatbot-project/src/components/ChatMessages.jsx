import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css'


export function ChatMessages({ chatMessages }) {

    function useAutoScroll(dependency) {
        const ref = useRef(null);
        useEffect(() => {
            const containerElem = ref.current;
            if (containerElem) {
                containerElem.scrollTop = containerElem.scrollHeight;
            }
        }, [dependency]);
        return ref;
    }
    const chatMessagesRef = useAutoScroll(chatMessages);


    return (
        chatMessages.length === 0 ? (
            <div className="empty-chat-message">
                Welcome to the chatbot project! Send a message using the textbox below
            </div>
        ) : (
            <div className="chat-messages-container"
                ref={chatMessagesRef}>
                {chatMessages.map((chatMessage) => {
                    return (
                        <ChatMessage
                            key={chatMessage.id}
                            message={chatMessage.message}
                            sentBy={chatMessage.sentBy}
                        />
                    );
                })}
            </div>
        )
    )
}