import React from 'react';

import Container from 'react-bootstrap/Container';
import StyledRight from '../../elements/homepage/StyledRight';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Burger from './Burger';

const Right = ({ children }): JSX.Element => {

    const pathName = window.location.pathname;
    return (
        <StyledRight>
            <Container fluid={pathName.includes("chats") || pathName.includes("profile-messages")}>
                <Row> 
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        </StyledRight>
    )
}

export default Right;