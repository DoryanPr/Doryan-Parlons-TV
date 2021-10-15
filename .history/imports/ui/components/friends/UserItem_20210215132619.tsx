import React from 'react';
import StyledUserItem from '../../elements/friends/StyledUserItem';
import { Col, Row } from 'react-bootstrap';

import Avatar from '../layout/Avatar';

const UserItem = (props: any): JSX.Element => {
    const { picture, actu, username, id, onUserItemClick } = props;

    const handleClick = () => {
        return (
            <a href="/profile" className="profile-link" >
            </a>
        )
    }
    return (
        <StyledUserItem>
            <Avatar large avatar_url={picture} />
            <Col>
                <div className="chat--content-container">
                    <a href className="chat--content-container-line1"
                        onClick={handleClick}
                    >
                        <span className="chat--content-container-title">
                            {username}
                        </span>
                    </a>
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
                <button className="chat--content-send-message">
                    <i className="far fa-comments"></i>
                </button>
            </Col>
        </StyledUserItem>
    )
}

export default UserItem;