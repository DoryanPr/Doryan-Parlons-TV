import React from 'react';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

const Cards: React.FC = () => {
    return (
        <div>
            
        </div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/105px125" />
            <Card.Body>
                <Card.Title>TF1</Card.Title>
                <Card.Text>
                    TF 1
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        
    );
};

export default Cards;
