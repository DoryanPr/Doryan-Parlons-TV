import React from 'react';
import FontAwesome from 'react-fontawesome';
import { uploadFile } from '../../../api/helpers';
import StyledAvatar from '../../elements/homepage/StyledAvatar';

const Avatar = (props: any): JSX.Element => {
    const { inLS } = props;
    const [hover, setHover] = React.useState<boolean>(false);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files[0];
        if (file) {
            uploadFile(file, false);
        }
    }

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
            //   onClick={handleyClick}
            // onMouseEnter={showOverlay}
            />
            {/*
            <input
                id="avatarupload"
                type="file"
                accept="image/*"
                onChange={onInputChange}

            />}*/
            {/*renderOverlay()*/}
        </StyledAvatar>

    )
}

export default Avatar;