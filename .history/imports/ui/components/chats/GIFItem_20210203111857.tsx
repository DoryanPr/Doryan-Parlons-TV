import React from 'react';
import FontAwesome from 'react-fontawesome';

const GIFItem = (props: any): JSX.Element => {
    // Il faut faire passer la proprieter onClick a fabItem car le compossant ne prend pas en compte onClick
    const { children, iconName, bg, onClick } = props;

    return (
        <div onClick={onClick} className="gif">
            <FontAwesome
                
                
            />
            {children}
        </div>

    )
}

export default GIFItem;