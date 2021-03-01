import React, { useState } from 'react';
import { useState } from 'react';

const MessageForm = () => {

    //creating state property for input textbox
    const [value , setValue] = useState('');
 

    //handling the submit of sending a message.
    const handleSumit = ({ }) => {

    }

    //handling the change of a message.
    const handleChange = () => {

    }


    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
             className="message-input"
             placeholder="Send a message!"
             value={value}
             onChange={handleChange}
            />
        </form>
    );
};

export default MessageForm;