import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledModal from '../elements/StyledModal';

const Modal = (props: any): JSX.Element => {
    return (
        <StyledModal>
            <div className="modal--header">
                <FontAwesome
                    className="modal--header__icon"
                />

            </div>
            <div className="modal--body">

            </div>
            <div className="modal--footer">

            </div>
        </StyledModal>
    )
}

export default Modal;