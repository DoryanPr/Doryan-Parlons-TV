import React from 'react';

const MessageText = (props:any):JSX.Element => {
    return (
        <div className="messageContainer">
            <div className={props.msgClass} >
                
            </div>
        </div>

    )
}

export default MessageText;