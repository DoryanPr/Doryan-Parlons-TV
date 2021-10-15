import React from 'react';
import StyledUserItem from '../../elements/friends/StyledUserItem';
import { Col, Row } from 'react-bootstrap';

import Avatar from '../layout/Avatar';

const UserItem = (props: any): JSX.Element => {
    const { picture, actu, username, id, onUserItemClick } = props;
    return (
        <StyledUserItem onClick={() => onUserItemClick(id, username, picture)}>
            <Avatar large avatar_url={picture} />
            <Col>
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
            </Col>
            <Col>
                <button className="chat--content-add-friend">
                    <i className="fas fa-user-plus"></i>
                </button>
                <button className="chat--content-add-friend">
                    <i className="fas fa-user-plus"></i>
                </button>
            </Col>
        </StyledUserItem>
    )
}

export default UserItem;