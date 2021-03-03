import React, { useState } from 'react';
import axios from 'axios';


const LoginForm = () => {

    //state for the username field.
    const [username, setUsername] = useState('');

    //state for the password field
    const [password, setPassword] = useState('');


    //handle login
    const handleSubmit = () => {


    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onchange={(e) => setUsername(e.target.value)}  />


                </form>
            </div>
            
        </div>
    );
};

export default LoginForm;