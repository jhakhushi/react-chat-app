import { ChatEngine } from 'react-chat-engine';

import './App.css';
import LoginFrom from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginFrom/>
    return (
        <ChatEngine
            height="100vh"
            projectID="58444c7e-56e7-49c9-8651-95f18592d40a"
            userName="user2"
            userSecret="Welcome@123"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;