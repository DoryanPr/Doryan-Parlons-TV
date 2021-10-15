import React from 'react';

/* Bootstrap */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const SliderCard = (props: any): JSX.Element => {

    return (
        <Col className="flex-grow-0">
            <a href={"/chat/" + props.link} className="all-channels__link">
                <Card className="all-channels__card">
                    <div className="all-channels__card-header">
                        <Card.Img variant="top" src={props.logo} />
                    </div>
                    <Card.Body className="all-channels__card-body">
                        <Card.Title className="all-channels__card-body-title">{props.name}</Card.Title>
                        <Card.Text className="all-channels__card-body-text">
                            {props.viewers} blablateurs
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </Col>
    )
}

export default ChannelCard;