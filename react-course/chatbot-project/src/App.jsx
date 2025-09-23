import { useState, } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages';



function App() {
  const [chatMessages, setChatMessages] = useState([]);
  // const [chatMessages, setChatMessages] = array;
  // and
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />

    </div>
  );
}

export default App
