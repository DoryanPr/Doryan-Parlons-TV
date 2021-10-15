import React from 'react';
import { Message } from '../../../api/models';
import StyledMessageBoxItem from '../../elements/chats/StyledMessageBoxItem';
import StyledMessageBox from '../../elements/old/StyledMessageBox';
import Avatar from '../Avatar';
import Moment from 'react-moment';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';


const MessageBoxItem = (props: Message): JSX.Element => {

    const { sender, ownership, createdAt, content } = props;
    const now: string = moment().format("D/MM/Y");
    const today: boolean = now === moment(createdAt).format("D/MM/Y");
    const users: User[] = props.users;
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
                                <p className="chat__messages-box-item-message-header-name">{{ sender }}</p>
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
                            <p className="chat__messages-box-item-message-content">{content}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyledMessageBoxItem>
    )
}

export default MessageBoxItem;