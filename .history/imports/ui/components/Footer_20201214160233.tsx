import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledFooter from '../elements/StyledFooter';

const Footer = (props: any): JSX.Element => {
    return (
        <StyledFooter>

            <FontAwesome
                className="iconFooter"
                name="smile"
                />
            <label className="message--label">
                <input
                    className="message--input"
                    placeholder="Taper un message"
                />
            </label>
            <FontAwesome
        </StyledFooter>
    )
}

export default Footer;