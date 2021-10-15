import React from 'react';
import FontAwesome from 'react-fontawesome';

const FABItem = (props:any):JSX.Element => {
    const {children, iconName, bg } = props;
    
    const setBg = ():any => {
        switch(bg) {
            case 'violet':
                return {
                    background: "#BF59CF"
                }
                case 'orange':
                return {
                    background: "#F47B34"
                }
                case 'blue':
                return {
                    background: "#5157AE"
                }
                case 'lightblue':
                return {
                    background: "#OA7BBF"
                }
                default:
                    return;
        }
    }
    return (
        <div onClick={props.onClick} style={setBg()} className="fab">
            <FontAwesome
                className="fab--icon"
                name={iconName}
            />
            {children}
        </div>

    )
}

export default FABItem;