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
                <p>Pour toute demande contactez nous <a  ></a></p>
            </div>
        </footer>
    )
}

export default Footer;