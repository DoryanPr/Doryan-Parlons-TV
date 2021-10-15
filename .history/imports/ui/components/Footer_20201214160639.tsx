import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledFooter from '../elements/StyledFooter';

const Footer = (props: any): JSX.Element => {
    const [inputValue, setInputValue] = React.useState<string>("");
    const [iconName, setIconName] = React.useState<string>("microphone");
    
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