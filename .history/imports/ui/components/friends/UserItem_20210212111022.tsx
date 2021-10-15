import React from 'react';
import StyledUserItem from '../../elements/friends/StyledUserItem';
import { Col, Row } from 'react-bootstrap';

import Avatar from '../layout/Avatar';

const UserItem = (props: any): JSX.Element => {
    const { picture, actu, username, id, onUserItemClick } = props;
    return (
        <StyledUserItem onClick={() => onUserItemClick(id, username, picture)}>
            <Avatar large avatar_url={picture} />
            <col>
                <div className="chat--content-container">
                    <div className="chat--content-container-line1">
                        <span className="chat--content-container-title">
                            {username}
                        </span>
                    </div>
                    <div className="chat--content-container-line2">
                        <span className="chat--content-container-message">
                            {actu}
                        </span>
                    </div>
                </div>
            </col>
            <col>
                <button className="chat--content-add-friend">
                    <i className="fas fa-user-plus"></i>
                </button>
            </col>
        </StyledUserItem>
    )
}

export default UserItem;