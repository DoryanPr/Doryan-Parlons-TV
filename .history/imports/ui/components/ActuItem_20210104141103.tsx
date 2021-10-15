import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledActuItem from '../elements/StyledActuItem';

const ActuItem = (props: any): JSX.Element => {
    return (
        <StyledActuItem red={red}>
            <FontAwesome
            className=""
            />
        </StyledActuItem>
    )
}

export default ActuItem;