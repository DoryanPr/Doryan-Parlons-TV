import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledStatus from '../elements/StyledStatus';
import StyledAvatar from '../elements/StyledAvatar';


const Status = (props:any):JSX.Element => {
    return (
        <StyledStatus color="blue">
            <StyledAvatar>
                <FontAwesome 
                    name="bell-slash"
                    size="2x"
                    className="icon--color"
                />
            </StyledAvatar>
            <div className="status--textContainer">
                <div className="text--big">
                    Etre Averti(e) denouveaux messages.
                </div>
                <span className="text__small">
                    Afficher Les notifications sur le bureau &gt;
                </span>
            </div>
        </StyledStatus>
    )
}

export default Status;