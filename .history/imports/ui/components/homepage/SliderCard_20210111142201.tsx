import React from 'react';

/* Bootstrap */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const SliderCard = (props: any): JSX.Element => {

    return (
        <Col className="flex-grow-0">
            <a href={"/chat/" + props.link} className="">
                <Card className="channel-slider__item">
                    <div className="channel-slider__card-header">
                        <Card.Img variant="top" src={props.logo} />
                    </div>
                    <Card.Body className="">
                        <Card.Title className="">{props.name}</Card.Title>
                        <Card.Text className="">
                            {props.messages} messages
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </Col>
    )
}

export default SliderCard;