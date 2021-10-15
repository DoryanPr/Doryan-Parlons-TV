import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import StyledMessageItem from '../../elements/messages/StyledMessageItem';
import Avatar from '../layout/Avatar';
import { getBadges, updateBadges } from '../../../api/helpers';
//import StyledChatItem from '../elements/StyledChatItem';
//import Avatar from './Avatar';



const MessageItem = (props: any): JSX.Element => {
    const { name, picture, lastMessage, onChatClick, _id, active, message, sender } = props;
    const { content, createdAt, type } = lastMessage;
    const now: string = moment().format("D/MM/Y");
    const today: boolean = now === moment(createdAt).format("D/MM/Y");
    let badge: number = getBadges(_id);
    console.log("badge", badge);

    React.useEffect(() => {
        if (active) {
            updateBadges(sender, _id);
            
        }
    }, [lastMessage])
    /*console.log('today', today);
    console.log('now', now);
    console.log('createdAt', createdAt);
    console.log('createdAt formated', moment(createdAt).format("D/MM/Y"));
    */

    return (
        <StyledMessageItem active={active} onClick={() => onChatClick(_id)}>
            <Avatar large avatar_url={picture} />
            <div className="chat--contentContainer">
                <div className="content--line1">
                    <span className="content--line1__title">
                        {name}
                    </span>
                    <div className="content--line1__date">
                        {today ? (
                            <Moment format="HH:mm">
                                {createdAt}
                            </Moment>
                        ) : (
                                <Moment format="D/MM/Y">
                                    {createdAt}
                                </Moment>
                            )}
                    </div>
                </div>
                <div className="content--line1">
                    {type === "text" ? (
                        <span className="content--message">
                            {content}
                        </span>
                    ) : (
                            <span className="content--message">
                                <FontAwesome
                                    name="camera"
                                    style={{ "marginRight": "0.4rem" }}
                                />
                                Photo
                            </span>
                        )}
                    {badge > 0 ? (
                        <div className="chat--badge">{badge}</div>
                    ) : null}

                </div>
            </div>
        </StyledMessageItem>
    )
}

export default MessageItem;