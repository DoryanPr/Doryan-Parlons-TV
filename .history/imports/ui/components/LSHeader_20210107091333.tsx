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
                <div className></div>
                <span>Profil</span>
            </div>
        </div>
    )
}
export default LSHeader;