import userPng from '../assets/user.png'
import robotPng from '../assets/robot.png'
import './ChatMessage.css'
export function ChatMessage({ message, sentBy }) {
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