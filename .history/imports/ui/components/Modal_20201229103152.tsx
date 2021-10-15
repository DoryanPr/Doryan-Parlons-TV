import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledModal from '../elements/StyledModal';

const Modal = (props: any): JSX.Element => {
    return (
        <StyledModal>
            <div className="modal--header">
                <FontAwesome
                    className="modal--header__icon"
                    size="2x"
                    name="times"
                />
                <span className="modal--header__title">Apercu</span>
            </div>
            <div className="modal--body">
                <img
                    style={{width: "349px", height:"349px" }}
                />
            </div>
            <div className="modal--footer">

            </div>
        </StyledModal>
    )
}

export default Modal;