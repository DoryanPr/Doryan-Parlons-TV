import React from 'react';

/* Bootstrap */
import Card from 'react-bootstrap/Card';

const ChatSliderCard = (props: any): JSX.Element => {

    return (
        <
        <a href={"/chats/" + props.link} className="chat-slider__link">
            <Card className="chat-slider__item">
                <div className="chat-slider__card-header">
                    <div className="chat-slider__card-header-logo" style={{ backgroundImage: 'url(' + props.logo + ')' }}></div>
                </div>
                <Card.Body className="chat-slider__card-body">
                    <div className="chat-slider__card-body-informations">
                        <Card.Title className="chat-slider__card-body-informations-title">{props.name}</Card.Title>
                    </div>
                </Card.Body>
            </Card>
        </a>
    )
}

export default ChatSliderCard;