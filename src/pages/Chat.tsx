import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import '../styles/chat.scss'


const Chat: React.FC = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <div className="chat-page">
            <div className="chat-box">
                <div className="chat-header">
                    <h3>Chat Room</h3>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>

                <div className="messages">
                    <div className="message">Hello!</div>
                    <div className="message">Hi! How are you?</div>
                </div>

                <form className="input-form">
                    <input type="text" placeholder="Type a message..." />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>

    )
}

export default Chat
