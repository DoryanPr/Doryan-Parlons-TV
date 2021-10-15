import React from 'react';
import FontAwesome from 'react-fontawesome';
import { uploadFile } from '../../../api/helpers';
import StyledAvatar from '../../elements/homepage/StyledAvatar';

const Avatar = (props: any): JSX.Element => {
    const { inLS } = props;
    const [hover, setHover] = React.useState<boolean>(false);

    

    const handleClick = (): void => {
        const fileInput: HTMLElement = document.getElementById('avatarupload');
        fileInput.click();
    }
 
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