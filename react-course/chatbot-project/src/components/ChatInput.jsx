import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import LoadingSpinnerGif from '../assets/loading-spinner.gif'
import './ChatInput.css'


export function ChatInput({ chatMessages, setChatMessages }) {
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
