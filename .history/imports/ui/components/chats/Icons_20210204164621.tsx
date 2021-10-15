import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';


const Icons = (props: any): JSX.Element => {

    const { icons, type } = props;

    const renderIcons = (): JSX.Element[] => {
        return icons.map((icon: any, i: number, type) => {
            return (
                type === "file" ? (
                    <input
                        key={i}
                        name={icon.name}
                        onClick={icon.func}
                        className={icon.className}
                        type={icon.type}
                        onChange={icon.onChange}
                        id={icon.id} />
                ) : (
                        <FontAwesome
                            key={i}
                            name={icon.name}
                            onClick={icon.func}
                            className={icon.className}
                            type={type}
                            onChange={icon.onChange}
                            id={icon.id} />
                    )

            )
        }
        )

    }

    return (
        <StyledMessageEdit>
            {renderIcons()}
        </StyledMessageEdit>

    )
}

export default Icons;
