import React from 'react';

import StyledFABs from '../elements/StyledFABs';
import FABItem from './FABItem';


const FABs = (props:any):JSX.Element => {
    return (
        <StyledFABs>
            <FABItem bg="violet" iconName=""/>
            <FABItem bg="orange" iconName=""/>
            <FABItem bg="blue" iconName=""/>
            <FABItem bg="li" iconName=""/>

        </StyledFABs>
    )
}

export default FABs;