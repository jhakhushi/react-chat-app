import { useState } from "react";
import axios from "axios";

const LoginFrom = () => {
    const [username, setUsername] = useState('user2');
    const [password, setPassword] = useState('Welcome@123');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': '58444c7e-56e7-49c9-8651-95f18592d40a',
            'User-Name': 'user2',
            'User-Secret': 'Welcome@123'
        }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', 'user2');
            localStorage.setItem('password', 'Welcome@123');

            window.location.reload();
        } catch (error) {
            setError('Oops, Incorrect credentials!!')
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit} >
                    <input 
                        type='text' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="input" 
                        placeholder="Username" 
                        required
                    />
                    <input 
                        type='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="input" 
                        placeholder="Password" 
                        required
                    />

                    <div align='center'>
                        <button type='submit' className="button">
                            <span>Start Chatting!</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginFrom;