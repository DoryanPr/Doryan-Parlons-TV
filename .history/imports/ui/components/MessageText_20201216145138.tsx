import React from 'react';
import Fontawesome from 'react-fontawesome';

const MessageText = (props: any): JSX.Element => {
    return (
        <div className="messageContainer">
            <div className={props.msgClass} >
                <p>{props.content}</p>
                <div className="detailsContainer">
                    <span>11:33</span>
                    {props.ownership === "mine" ?
                        <Fontawesome name="check-double" /> : null
                    }
                </div>

            </div>
        </div>

    )
}

export default MessageText;