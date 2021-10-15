import React from 'react';

import StyledMessageBox from '../elements/StyledMessageBox';

const MessageBox = (props: any): JSX.Element => {
    const { messages } = props;
    console.log()
    return (
        <StyledMessageBox>
            Message Box

        </StyledMessageBox>
    )
}

export default MessageBox;