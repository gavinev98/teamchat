import React from 'react';

const TheirMessage = ({ message, lastMessage}) => {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;



    return (
        <div className="message-row">
       {isFirstMessageByUser && (
           <div 
                className="message-avatar"
                style={{backgroundImage: `url(${message?.sender?.avatar})`}}
           />
       )} 
        {message?.attatchements?.length > 0
           ?(
                <img 
                src={message.attatchements[0].file}
                alt="message-attatchement"
                className="message-image"
                style={{ float: 'right'}}
                />
            ) : (
                <div className="message" style={{ float: 'right', marinRight: '18px', color: 'white' , backgroundColor : '#3B2A50'}}>
                {message.text}    
             </div>
            )
        }   
        </div>
    );
};

export default TheirMessage;