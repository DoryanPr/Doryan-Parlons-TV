import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledIcons from '../../elements/chats/StyledIcons';


const Icons = (props: any): JSX.Element => {

    

    const { icons, type } = props;

    const openInputFile = () => {
        document.getElementById('input-file').click();
    }

    const renderIcons = (): JSX.Element[] => {
        return icons.map((icon: any, i: number) => {

            return (
                icon.type === "file" ? (
                    
                    <div key={"file-div-" + i}>
                        <input
                            name={icon.name}
                            type="file"
                            onChange={icon.onChange}
                            id="input-file"
                            style={{ display: 'none' }} />

                        <FontAwesome
                            name={icon.name}
                            onClick={openInputFile}
                            className={icon.className}
                            id={icon.id} />
                    </div>

                ) : (
                        <FontAwesome
                            key={"fa" + i}
                            name={icon.name}
                            onClick={icon.func}
                            className={icon.className}
                            type={type}
                            onChange={icon.onChange}
                            id={icon.id}
                            onEmojiClick={icon.onEmojiClick} />
                    )

            )
        }
        )

    }

    const emojis = ():JSX.Element => {}
    return (
        <StyledIcons>
            {renderIcons()}
        </StyledIcons>

    )
}

export default Icons;
