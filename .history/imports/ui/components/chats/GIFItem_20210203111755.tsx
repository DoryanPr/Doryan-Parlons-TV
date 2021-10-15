import React from 'react';
import FontAwesome from 'react-fontawesome';

const 
gif = (props: any): JSX.Element => {
    // Il faut faire passer la proprieter onClick a fabItem car le compossant ne prend pas en compte onClick
    const { children, iconName, bg, onClick } = props;

    return (
        <div onClick={onClick} style={setBg()} className="fab">
            <FontAwesome
                className="fab--icon"
                name={iconName}
            />
            {children}
        </div>

    )
}

export default FABItem;