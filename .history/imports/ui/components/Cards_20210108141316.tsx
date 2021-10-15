import React from 'react';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import StyledCards from '../elements/StyledCards';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const Cards: React.FC = () => {
    return (
        <div className="Cards">
            <>Toutes les chaînes</>
            <Container>
                <Row>
                    <div className="directionCards">
                        <Card style={{ width: '105px' }}>
                            <Card.Img variant="top" src="./images/tf1.jpg" />
                            <Card.Body>
                                <Card.Title>TF1</Card.Title>
                                <Card.Text>
                                    Viewers
                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '105px' }}>
                            <Card.Img variant="top" src="./images/tf1.jpg" />
                            <Card.Body>
                                <Card.Title>France 2</Card.Title>
                                <Card.Text>
                                    Viewers
                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '105px' }}>
                            <Card.Img variant="top" src="./images/tf1.jpg" />
                            <Card.Body>
                                <Card.Title>France 3</Card.Title>
                                <Card.Text>
                                    Viewers
                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '105px' }}>
                            <Card.Img variant="top" src="./images/tf1.jpg" />
                            <Card.Body>
                                <Card.Title>Canal+</Card.Title>
                                <Card.Text>
                                    Viewers
                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '105px' }}>
                            <Card.Img variant="top" src="./images/tf1.jpg" />
                            <Card.Body>
                                <Card.Title>France 5</Card.Title>
                                <Card.Text>
                                    Viewers 5
                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '105px' }}>
                            <Card.Img variant="top" src="./images/tf1.jpg" />
                            <Card.Body>
                                <Card.Title>M6</Card.Title>
                                <Card.Text>
                                    Viewers
                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className="directionCards">

                        <Card style={{ width: '105px' }}>
                            <Card.Img variant="top" src="./images/tf1.jpg" />
                            <Card.Body>
                                <Card.Title>Arte</Card.Title>
                                <Card.Text>
                                    Viewers
                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '105px' }}>
                            <Card.Img variant="top" src="./images/tf1.jpg" />
                            <Card.Body>
                                <Card.Title>W8</Card.Title>
                                <Card.Text>
                                    Viewers
                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '105px' }}>
                            <Card.Img variant="top" src="./images/tf1.jpg" />
                            <Card.Body>
                                <Card.Title>W9</Card.Title>
                                <Card.Text>
                                    Viewers
                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '105px' }}>
                            <Card.Img variant="top" src="./images/tf1.jpg" />
                            <Card.Body>
                                <Card.Title>TMC</Card.Title>
                                <Card.Text>
                                    Viewers
                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Cards;
