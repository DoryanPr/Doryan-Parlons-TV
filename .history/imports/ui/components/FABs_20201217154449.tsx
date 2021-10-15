import React from 'react';

import StyledFABs from '../elements/StyledFABs';
import FABItem from './FABItem';


const FABs = (props:any):JSX.Element => {
    return (
        <StyledFABs>
            <FABItem bg="" iconName=""/>
            <FABItem bg="" iconName=""/>
            <FABItem bg="" iconName=""/>
            <FABItem bg="" iconName=""/>

        </StyledFABs>
    )
}

export default FABs;