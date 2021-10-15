import React from 'react';

const MessageText = (props:any):JSX.Element => {
    return (
        <div className="messageContainer">
            <div className={props.msgClass} >
                <p>{props.content}</p> 
                <div className="detailsContainer">
                    <span>
                        11:33
                    </span>
                    {props.ownership === "mine"
                    
                    }
                </div>

            </div>
        </div>

    )
}

export default MessageText;