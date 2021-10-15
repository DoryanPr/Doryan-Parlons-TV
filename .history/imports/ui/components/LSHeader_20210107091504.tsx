import React from 'react';
import FontAwesome from 'react-fontawesome';

const LSHeader = (props: any): JSX.Element => {
    return (
        <div className="LS--header">
            <div className="LS--header">
                <FontAwesome
                    className="LS--header__icon"
                    name="arrow-left"
                    onClick={props.onLSClose}
                />
                <div className="LS-header__line">
                    <h3>h3</h3>
                    <span>Profil</span>
                </div>
            </div>
        </div>
    )
}
export default LSHeader;