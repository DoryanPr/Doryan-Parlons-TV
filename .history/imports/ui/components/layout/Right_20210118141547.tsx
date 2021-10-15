import React from 'react';

import Container from 'react-bootstrap/Container';
import StyledRight from '../../elements/homepage/StyledRight';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Burger from './Burger';

const Right = ({ children }): JSX.Element => {
    return (
        <StyledRight>
            <Container fluid>
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