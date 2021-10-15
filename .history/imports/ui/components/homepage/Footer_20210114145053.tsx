import React from 'react';
import StyledFooter from '../../elements/homepage/StyledFooter';

const Footer = (props: any): JSX.Element => {
    
    return (
        <StyledFooter>
            <footer className="footer">
                <div>
                    <span>Je suis un footer</span>
                </div>

            </footer>
        </StyledFooter>
    )
}

export default Footer;