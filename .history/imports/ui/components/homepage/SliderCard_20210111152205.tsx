import React from 'react';

/* Bootstrap */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SliderCard = (props: any): JSX.Element => {

    return (
        <Col className="flex-grow-0">
            <a href={"/chat/" + props.link} className="">
                <Card className="channel-slider__item">
                    <div className="channel-slider__card-header">
                        <Card.Img variant="top" src={props.logo} />
                    </div>
                    <Card.Body className="channel-slider__card-body">
                            <Card.Title className="channel-slider__card-body-title">{props.name}</Card.Title>
                            <Card.Text className="channel-slider__card-body-text">
                                {props.messages} messages
                            </Card.Text>
                            <div className="channel-slider__card-body-hashtag">
                                {props.hashtag}
                            </div>
                    </Card.Body>
                </Card>
            </a>
        </Col>
    )
}

export default SliderCard;