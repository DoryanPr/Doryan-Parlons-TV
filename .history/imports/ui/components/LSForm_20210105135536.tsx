import { Meteor } from 'meteor/meteor';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Meteor } from 'meteor/meteor';
import StyledLSForm from '../elements/StyledLSForm';

const LSForm = (props: any): JSX.Element => {
    const { type } = props;
    const [editable, setEditable] = React.useState<boolean>(false);
    //Si title = actue le titre sera Actu sinon Votre nom
    const title:string = type ==="actu" ? "Actu" : "Votre nom"
    const value: string = type === "actu" ? Meteor.user().profile.actue : Meteor.user().username;
    
    
    const toggleEditable = (): void => {
        setEditable(!editable);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue: string = e.target.value;
        if (type === "actu") {
            Meteor.
        }
    }
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
                        value={value}
                    />
                    <FontAwesome
                        className="LSForm--icon"
                        name="pen"
                        onClick={toggleEditable}
                    />
                </div>
            ) : (
                <div className="LSForm--container">
                    <input
                        readOnly={false}
                        className="LSForm--input __border"
                            value={value}
                            onChange={handleChange}
                    />
                    <FontAwesome
                        className="LSForm--icon"
                        name="check"
                        onClick={toggleEditable}
                    />
                </div>   
            )}
        </StyledLSForm>
    )
}
export default LSForm;