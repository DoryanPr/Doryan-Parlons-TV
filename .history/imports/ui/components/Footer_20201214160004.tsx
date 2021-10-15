import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledFooter from '../elements/StyledFooter';

const Footer = (props: any): JSX.Element => {
    return (
        <FontAwesome
            className="iconFooter"
            name="smile"

        />
        <label className="message--label">
            <input className="message--input"
        </label>
    )
}

export default Footer;