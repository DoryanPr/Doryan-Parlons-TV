import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledFooter from '../elements/StyledFooter';

const Footer = (props: any): JSX.Element => {
    const
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
                className="iconFooter"
                name="microphone"
                />
        </StyledFooter>
    )
}

export default Footer;