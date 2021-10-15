import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledMessageImage from '../elements/StyledMessageImage';

const MessageImage = (props: any): JSX.Element => {
    const { mine } = props;

    const renderImage = (): JSX.Element => {
        if(mine)
    }
    return (
        <StyledMessageImage mine={mine}>
            {renderImage()}
        </StyledMessageImage>
    )
}