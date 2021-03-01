import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {

    //destructure props recieved
    const { chatId, creds } = props;

    

    //creating state property for input textbox
    const [value , setValue] = useState('');
 

    //handling the submit of sending a message.
    const handleSubmit = (event) => {
        //this is to stop page from refreshing.
        event.preventDefault();

        //trimming text of message
        const text = value.trim();

        if(text.length > 0) {
            //we pass credentials, chatId, and text value.
            sendMessage(creds, chatId, { text });

            //clear input value 
            setValue('');
        }
    }

    //handling the change of a message.
    const handleChange = (event) => {
        //setting the value of the input field.
       setValue(event.target.value);

       //we can call the isTyping function as user is typing
       isTyping(creds, chatId);
    }


    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
             className="message-input"
             placeholder="Send a message!"
             value={value}
             onChange={handleChange}
             onSubmit={handleSubmit}
            />
        </form>
    );
};

export default MessageForm;