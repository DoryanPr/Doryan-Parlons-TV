import React from 'react';

import StyledFABs from '../elements/StyledFABs';
import FABItem from './FABItem';


const FABs = (props: any): JSX.Element => {
    const handleClick = (): void => {
        console.log('click ok');
        const myInput:HTMLElement = document.
    }
    return (
        <StyledFABs fabVisible={props.fabVisible}>
            <FABItem onClick={handleClick} bg="violet" iconName="image">
                <input 
                    id="fileUpload"
                    type="file"
                    accept="image/*"
                />
            </FABItem>
            <FABItem bg="orange" iconName="camera"/>
            <FABItem bg="blue" iconName="file"/>
            <FABItem bg="lightblue" iconName="user"/>
        </StyledFABs>
    )
}

export default FABs;