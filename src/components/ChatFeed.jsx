import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages} = props;

    //finding the current active chat,
    const chatActive = chats && chats[activeChat];

    return (
        <div>
          
        </div>
    );
};

export default ChatFeed;