import React from 'react';
import StyledFooter from '../../elements/homepage/StyledFooter';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Footer = (props: any): JSX.Element => {

    return (
        <StyledFooter>
            <footer className="footer">
                <div className="footer-div">
                    <span>Je suis un footer</span>
                </div>
            </footer>
        </StyledFooter>
    )
}

export default Footer;