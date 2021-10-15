import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledProfileForm from '../../elements/profile/StyledProfileForm';


const profile_form = (props: any): JSX.Element => {
    const { type } = props;
    const [editable, setEditable] = React.useState<boolean>(false);
    //Si title = actu le titre sera Actu sinon Votre nom
    const title: string = type === "actu" ? "Actu" : "Votre nom"
    // const value: string = type === "actu" ? Meteor.user().profile.actu : Meteor.user().profile.name;

    const value = props.value;
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

    const updateProfile = (_id: string): void => {

      
        console.log(_id);

        Meteor.call('user.update', { _id: _id }, (err, id) => {
            if (err) {
                console.log(err, 'erreur user.update')
            } else {
                console.log(id, 'resultat')
            }
        })
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue: string = e.target.value;
        setState(newValue);

    }
    return (
        <StyledProfileForm>
            <span className="profile_form--title">
                {title}
            </span>
            {!editable ? (
                <div className="profile_form--container">
                    <input
                        readOnly={true}
                        className="profile_form--container--input __border"
                        value={state}
                    />
                    <FontAwesome
                        className="profile_form--container--icon"
                        name="pen"
                        onClick={toggleEditable}
                    />
                </div>
            ) : (
                    <div className="profile_form--container">
                        <input
                            readOnly={false}
                            className="profile_form--container--input __border"
                            value={state}
                            onChange={handleChange}
                        />
                        <FontAwesome
                            className="profile_form--container--icon"
                            name="check"
                            onClick={toggleEditable}
                        />
                    </div>
                )}
        </StyledProfileForm>
    )
}
export default withTracker(() => {

    Meteor.subscribe('user.update');
    return {}

})(profile_form)