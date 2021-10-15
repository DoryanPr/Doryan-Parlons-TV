import React from 'react';
import FontAwesome from 'react-fontawesome';

const FABItem = (props:any):JSX.Element => {
    const {children, iconName, bg } =
    return (
        <div className="fab">
            <FontAwesome
                className="fab--icon"
                name={iconName}
            />
            {children}
        </div>

    )
}

export default FABItem;