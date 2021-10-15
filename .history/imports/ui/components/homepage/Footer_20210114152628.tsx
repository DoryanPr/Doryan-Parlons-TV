import React from 'react';
import StyledFooter from '../../elements/homepage/StyledFooter';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Footer = (props: any): JSX.Element => {

    return (
        <footer className="footer">
            <div className="footer-div">
                <span>Parlons-TV</span>
                <p></p>
            </div>
        </footer>
    )
}

export default Footer;