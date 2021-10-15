import React from 'react';
import FontAwesome from 'react-fontawesome';

const FABItem = (props: any): JSX.Element => {
    // Il faut faire passer la proprieter onClick a fabItem car le compossant ne prend pas en compte onClick
    const { children, iconName, bg, onClick } = props;

    const setBg = (): any => {
        switch (bg) {
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