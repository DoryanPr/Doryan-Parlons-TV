import React from 'react';

import Container from 'react-bootstrap/Container';

const : React.FC = () => {
    return (
        <Container className="p-3">
            <Jumbotron>
                <h1 className="header">
                    Welcome To React-Bootstrap TypeScript Example
        </h1>
            </Jumbotron>
            <h2>Buttons</h2>
            <ButtonsShowcase />
            <h2>Toasts</h2>
            <ToastsShowcase />
        </Container>
    );
};

export default App;
