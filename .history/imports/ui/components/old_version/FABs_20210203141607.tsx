import React from 'react';

import StyledFABs from '../../elements/StyledFABs';
import FABItem from './FABItem';


const FABs = (props: any): JSX.Element => {
    const { fabVisible, onFABItemClick, onInputChange } = props;
    return (
        <StyledFABs fabVisible={props.fabVisible}>
            <FABItem onClick={onFABItemClick} bg="violet" iconName="image">
                <input 
                    id="fileUpload"
                    type="file"
                    accept="image/*"
                    onChange={onInputChange}
                    
                />
            </FABItem>
            <FABItem bg="orange" iconName="camera"/>
            <FABItem bg="blue" iconName="file"/>
            <FABItem bg="lightblue" iconName="user"/>
        </StyledFABs>
    )
}

export default FABs;