import React from 'react';
import StyledFooter from '../../elements/homepage/StyledFooter';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Row';

const Footer = (props: any): JSX.Element => {
    
    return (
        <StyledFooter>
            container
             
            <footer className="footer">
                <div className="footer-div">
                    <span>Je suis un footer</span>
                </div>

            </footer>
        </StyledFooter>
    )
}

export default Footer;