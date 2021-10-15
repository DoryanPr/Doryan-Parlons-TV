import { Meteor } from 'meteor/meteor';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledProfileForm from '../../elements/profile/StyledProfileForm';


const profile_ = (props: any): JSX.Element => {
    const { type } = props;
    const [editable, setEditable] = React.useState<boolean>(false);
    //Si title = actu le titre sera Actu sinon Votre nom
    const title: string = type === "actu" ? "Actu" : "Votre nom"
    const value: string = type === "actu" ? Meteor.user().profile.actu : Meteor.user().username;
    const [state, setState] = React.useState<string>(value);

    const toggleEditable = (): void => {
        if (!editable) {
            setEditable(true);
        } else {

            if (type === "actu") {
                Meteor.users.update({ _id: Meteor.userId() }, {
                    $set: {
                        "profile.actu": state
                    }
                })
            } else {
                Meteor.call('user.username', Meteor.userId(), state);
            }
            setEditable(false);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue: string = e.target.value;
        setState(newValue);

    }
    return (
        <StyledProfileForm>
            <span className="profile_--title">
                {title}
            </span>
            {!editable ? (
                <div className="profile_--container">
                    <input
                        readOnly={true}
                        className="profile_--input __border"
                        value={state}
                    />
                    <FontAwesome
                        className="profile_--icon"
                        name="pen"
                        onClick={toggleEditable}
                    />
                </div>
            ) : (
                    <div className="profile_--container">
                        <input
                            readOnly={false}
                            className="profile_--input __border"
                            value={state}
                            onChange={handleChange}
                        />
                        <FontAwesome
                            className="profile_--icon"
                            name="check"
                            onClick={toggleEditable}
                        />
                    </div>
                )}
        </StyledProfileForm>
    )
}
export default profile_;