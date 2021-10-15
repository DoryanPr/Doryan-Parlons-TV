import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledHeader from '../elements/StyledHeader';

const Header = (props: any): JSX.Element => {

    const renderIcons = (): JSX.Element[] => {
        const { icons, iconClass } = props;
            return icons.map((icon: string, i: number) => {
                return (
                    <FontAwesome
                        key={i}
                        className={iconClass}
                        name={icon}
                    />
             )
         })
        
    }

    return (
        <StyledHeader>
            {props.children}
            <div className={props.iconsWidthSmall ? "icons--left small" : "icons--left" }></div>
            {renderIcons()}
        </StyledHeader>
    )
}

export default Header;