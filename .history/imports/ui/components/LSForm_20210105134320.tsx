import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledLSForm from '../elements/StyledLSForm';

const LSForm = (props: any): JSX.Element => {
    const { type } = props;
    const [editable, setEditable] = React.useState<boolean>(false);
    //Si title = actue le titre sera Actu sinon Votre nom
    const title:string = type ==="actu" ? "Actu" : "Votre nom"
    return (
        <StyledLSForm>
            <span className="LSForm--title">
                {title}
            </span>
            {!editable ? (
                <div className="LSForm--container">
                    <input
                        readOnly={true}
                        className="LSForm--input __border"
                    />
                    <FontAwesome
                        className="LSForm--icon"
                        name="pen"
                        onClickc
                    />
                </div>
            ) : (
                <div className="LSForm--container">
                    <input
                        readOnly={false}
                        className="LSForm--input __border"
                    />
                    <FontAwesome
                        className="LSForm--icon"
                        name="check"
                        onClickcccc
                    />
                </div>   
            )}
        </StyledLSForm>
    )
}
export default LSForm;