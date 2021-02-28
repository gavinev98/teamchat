import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages} = props;

    //finding the current active chat,
    const chatActive = chats && chats[activeChat];

    //generating messages
    const renderMessages = () => {
        //this will bring back the ids of specific messages as an array.
        const keys = Object.keys(messages);
        //return array of messages via loop via map.
        return keys.map((key, index) => {
            //once we loop over we set message equal to current message.
            const message = messages[key];
            //we need to check if this is the last message sent. 
            //We are checking if there is message 'if index is 0 then there is none otherwise we find last key.
            const lastMessageKey = index == 0 ? null : keys[index - 1];
            //check if it is my message that has sent the message.
            const isMyMessage = userName === message.sender.username;
            
            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                <div className="message-block">
                    {
                        isMyMessage ?
                        <MyMessage /> :
                        <TheirMessage />
                    }
                </div>
                 <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px' , marginLeft : isMyMessage ? '0px' : '68px' }}>
                 read-receipts
                 </div>
                </div>
            )
        
        })
    }

    if(!chatActive) return 'Loading...'


    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chatActive.title}</div>
                <div className="chat-subtitle">
                    {chatActive.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
           {renderMessages()}
           <div style={{height : '100px'}} />
           <div className="message-form-container">
           <MessageForm />
           </div>

        </div>
    );
};

export default ChatFeed;