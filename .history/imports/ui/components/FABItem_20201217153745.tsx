import React from 'react';
import FontAwesome from 'react-fontawesome';

const FABItem = (props:any):JSX.Element => {
    return (
        <div className="fab">
            <FontAwesome
                className="fab--icon"
                name={icno}
            />
        </div>

    )
}

export default FABItem;