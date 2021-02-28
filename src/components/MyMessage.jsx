import React from 'react';

const MyMessage = ({ message }) => {

    if(message?.attatchements?.length > 0) {

        return (
                <img 
                    src={message.attatchements[0].file}
                    alt="message-attatchement"
                    className="message-image"
                    style={{ float : 'right'}}
                />
        );
    }

    
    return (
        <div>
               
        </div>
    );
};

export default MyMessage;