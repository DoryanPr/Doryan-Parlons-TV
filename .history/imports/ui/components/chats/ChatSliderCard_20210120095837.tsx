import React from 'react';

/* Bootstrap */
import Card from 'react-bootstrap/Card';

const ChatSliderCard = (props: any): JSX.Element => {

    return (
        <a href={"/chats/" + props.link} className="channel-slider__link">
            <Card className="channel-slider__item">
                <div className="channel-slider__card-header">
                    <div className="channel-slider__card-header-logo" style={{ backgroundImage: 'url(' + props.logo + ')' }}></div>
                </div>
                <Card.Body className="channel-slider__card-body">
                    <div className="channel-slider__card-body-informations">
                        <Card.Title className="channel-slider__card-body-informations-title">{props.name}</Card.Title>
                        <Card.Text className="channel-slider__card-body-informations-text">
                            {props.messages} messages
                        </Card.Text>
                    </div>
                    
                </Card.Body>
            </Card>
        </a>
    )
}

export default ChatSliderCard;