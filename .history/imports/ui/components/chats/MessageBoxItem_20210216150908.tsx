import React from 'react';
import { Message, MessageType } from '../../../api/models';
import StyledMessageBoxItem from '../../elements/chats/StyledMessageBoxItem';
import StyledMessageBox from '../../elements/old/StyledMessageBox';
import Avatar from '../layout/Avatar';
import Moment from 'react-moment';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';


const MessageBoxItem = (props: Message): JSX.Element => {

    const { sender, createdAt, content, type } = props;
    const now: string = moment().format("D/MM/Y");
    const today: boolean = now === moment(createdAt).format("D/MM/Y");

    const handleClick = () => {
        return (
            <a href="/profile" className="profile-link" >
            </a>
        )
    }
    return (

        <StyledMessageBoxItem>
            <div className="chat__messages-box-item">
                <Row>
                    <Col xs={2}>
                        <Avatar />
                    </Col>
                    <Col>
                        <div className="chat__messages-box-item-message">
                            <div className="chat__messages-box-item-message-header">
                                <a href="/profile"
                                    className="chat__messages-box-item-message-header-name">{sender && sender.profile ? sender.profile.name : ''}</a>
                                <p className="chat__messages-box-item-message-header-since">
                                    {today ? (
                                        <Moment format="HH:mm">
                                            {createdAt}
                                        </Moment>
                                    ) : (
                                            <Moment format="D/MM/Y">
                                                {createdAt}
                                            </Moment>
                                        )}
                                </p>
                            </div>
                            <div className="chat__messages-box-item-message-content">{

                                type === MessageType.TEXT ? (
                                    <p>{content}</p>
                                ) : type === MessageType.EMOJI ? (

                                    <p> {content ? String.fromCodePoint(parseInt(content, 16)) : ("")} </p>
                                ) : (
                                            <img
                                                src={content}
                                                className="chat__messages-box-item-message-content-image"
                                            />
                                        )}

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyledMessageBoxItem>
    )
}

export default MessageBoxItem;