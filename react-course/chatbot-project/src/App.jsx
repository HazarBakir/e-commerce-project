import {Chatbot} from 'supersimpledev';
import { useState, useRef,useEffect } from 'react'
import LoadingSpinnerGif from './assets/loading-spinner.gif'
import userPng from './assets/user.png'
import robotPng from './assets/robot.png'
import './App.css'



function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading) return;

    const newChatMessages = [
      ...chatMessages,
      {
        id: crypto.randomUUID(),
        message: inputText,
        sentBy: "user"
      }
    ];
    setChatMessages(newChatMessages);
    setIsLoading(true);

    // Create loading message
    const loadingMessageId = crypto.randomUUID();
    const messagesWithLoading = [
      ...newChatMessages,
      {
        id: loadingMessageId,
        message: <img src={LoadingSpinnerGif} className="loading-spinner" />,
        sentBy: "robot"
      }
    ];
    setChatMessages(messagesWithLoading);

    // Get response and update the same message
    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages(prevMessages =>
      prevMessages.map(msg =>
        msg.id === loadingMessageId
          ? { ...msg, message: response }
          : msg
      )
    );
    setIsLoading(false);
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        type="text"
        placeholder="type to chat"
        size="30"
        onChange={saveInputText}
        value={inputText}
        disabled={isLoading}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            sendMessage();
            setInputText('');
          }
          if (event.key === "Escape") {
            setInputText('')
          }
        }}
      />
      <button
        onClick={sendMessage}
        disabled={isLoading}
        className="send-button"
      >Send</button>
    </div>
  );
}

function ChatMessage({ message, sentBy }) {
  return (
    <div className={
      sentBy === "robot"
        ? "chat-message-robot"
        : "chat-message-user"
    }>
      {sentBy === "robot" && (
        <img src={robotPng} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sentBy === "user" && (
        <img src={userPng} className="chat-message-profile" />
      )}
    </div>
  );
}

function ChatMessages({ chatMessages }) {

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
function App() {
  const [chatMessages, setChatMessages] = useState([]);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className="app-container">
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages
        chatMessages={chatMessages}
      />
    </div>
  );
}

export default App
