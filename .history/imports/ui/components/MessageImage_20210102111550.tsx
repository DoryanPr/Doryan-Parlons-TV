import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledMessageImage from '../elements/StyledMessageImage';

const MessageImage = (props: any): JSX.Element => {
    const { mine } = props;

    const renderImage = (): JSX.Element => {
        if (mine) {
            return (
            <>
                <img 
                    className="image"
                    alt="img"
                    src={content}
                    />
                    <div className="image--overlay">
                        
                    </div>
            </>

            )
        }
    }
    return (
        <StyledMessageImage mine={mine}>
            {renderImage()}
        </StyledMessageImage>
    )
}