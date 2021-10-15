import React from 'react';
import FontAwesome from 'react-fontawesome';

const FABItem = (props:any):JSX.Element => {
    const {children, iconName, bg } = props;
    
    const setBg = ():string => {
        switch(bg) {
            case 'violet':
                retur {
                    background: "#BF59CF"
                }
                case 'orange':
                retur {
                    background: "#F47B34"
                }
                case 'blue':
                retur {
                    background: "#5157AE"
                }
                case 'lightblue':
                retur {
                    background: "#OA7BBF"
                }
                default:
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