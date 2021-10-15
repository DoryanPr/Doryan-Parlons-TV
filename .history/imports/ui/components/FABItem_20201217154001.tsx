import React from 'react';
import FontAwesome from 'react-fontawesome';

const FABItem = (props:any):JSX.Element => {
    const {children, iconName, bg } = props;
    
    const setBg = ():string => {
        switch(bg) {
            case 'violet':
                retur {
                    background: "#BF"
                }
        }
    }
    return (
        <div style={setBg} className="fab">
            <FontAwesome
                className="fab--icon"
                name={iconName}
            />
            {children}
        </div>

    )
}

export default FABItem;