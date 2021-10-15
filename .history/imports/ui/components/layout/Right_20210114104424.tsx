import React from 'react';

import Container from 'react-bootstrap/Container';
import StyledRight from '../../elements/homepage/StyledRight';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';

const Right = ({ children }): JSX.Element => {
    return (
        <StyledRight>
            <Container>
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