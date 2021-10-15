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
                <span>Parlons-TV</span>
                <p>Pour toute demande contactez nous <a href="/contact" >ICI</a></p>
            </div>
        </footer>
        </StyledFooter>
    )
}

export default Footer;