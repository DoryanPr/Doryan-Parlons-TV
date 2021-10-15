import React from 'react';

import StyledFABs from '../elements/StyledFABs';
import FABItem from './FABItem';


const FABs = (props:any):JSX.Element => {
    return (
        <StyledFABs>
            <FABItem bg="violet" iconName="image">
                
            </FABItem>
            <FABItem bg="orange" iconName="camera"/>
            <FABItem bg="blue" iconName="file"/>
            <FABItem bg="lightblue" iconName="user"/>
        </StyledFABs>
    )
}

export default FABs;