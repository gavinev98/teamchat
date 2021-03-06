import React, { useState } from 'react';
import axios from 'axios';


const LoginForm = () => {

    //state for the username field.
    const [username, setUsername] = useState('');

    //state for the password field
    const [password, setPassword] = useState('');

    //set state for login error.
    const [error, setError] = useState('');


    //handle login
    const handleSubmit = async (e) => {
        //prevent refresh from occuring.
        e.preventDefault();

        const authObject = { 'Project-ID' : 'f135e1d0-8999-4545-b622-3954a72de173', 'User-Name' : username, 'User-Secret' : password}

        try {
            //we add the await keyword as it is asynchronous.
            //username / password => chatengine => give messages
           await axios.get('https://api.chatengine.io/chats', { headers: authObject});
            // works -> logged in
            //store in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch(error){
             //error => try with new username
              setError('Oops, incorrect credentials!');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username..." required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input"  placeholder="password..." required  />
                 <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                 </div>
                 <h2 className="error">{error}</h2>
                </form>
            </div>
            
        </div>
    );
};

export default LoginForm;