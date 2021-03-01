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
        <div className="message" style={{ float: 'right', marinRight: '18px', color: 'white' , backgroundColor : '#3858FF'}}>
           {message.text}    
        </div>
    );
};

export default MyMessage;