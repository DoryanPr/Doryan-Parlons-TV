import React from 'react';
import FontAwesome from 'react-fontawesome';
import { uploadFile } from '../../../api/helpers';
import StyledAvatar from '../../elements/homepage/StyledAvatar';

const Avatar = (props: any): JSX.Element => {
    const { inLS } = props;
    const [hover, setHover] = React.useState<boolean>(false);

    return (
        <StyledAvatar large={props.large} big={props.big}>
            <img
                src={props.avatar_url}
                alt="avatar"
                className="avatar--img"
           
            />
        </StyledAvatar>
    )
}

export default Avatar;