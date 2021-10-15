import React from 'react';
import FontAwesome from 'react-fontawesome';

const FABItem = (props:any):JSX.Element => {
    const {}
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