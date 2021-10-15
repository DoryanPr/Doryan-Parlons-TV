import React from 'react';

import StyledFABs from '../elements/StyledFABs';
import FABItem from './FABItem';

let fileInput: any;


const FABs = (props: any): JSX.Element => {
    const handleClick = (): void => {
        const myInput: HTMLElement = document.getElementById('fileUpload');
        console.log('click ok', myInput);
        myInput.click();
    
    }
    return (
        <StyledFABs fabVisible={props.fabVisible}>
            <FABItem onClick={handleClick} bg="violet" iconName="image">
                <input 
                    id="fileUpload"
                    type="file"
                    accept="image/*"
                    onChange=
                />
            </FABItem>
            <FABItem bg="orange" iconName="camera"/>
            <FABItem bg="blue" iconName="file"/>
            <FABItem bg="lightblue" iconName="user"/>
        </StyledFABs>
    )
}

export default FABs;