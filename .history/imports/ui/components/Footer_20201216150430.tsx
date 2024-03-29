import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledFooter from '../elements/StyledFooter';

const Footer = (props: any): JSX.Element => {
    const [inputValue, setInputValue] = React.useState<string>("");
    const [iconName, setIconName] = React.useState<string>("microphone");
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
        const name:string = e.target.value !== "" ? "paper-plane" : "microphone"
        setIconName(name);
    }

    const handleclick = ():void => {
        if(iconName)
    }
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
                    value={inputValue}
                    onChange={handleChange}
                />
            </label>
            <FontAwesome
                className="iconFooter"
                name={iconName}
                onClick={handleclick}
                />
        </StyledFooter>
    )
}

export default Footer;