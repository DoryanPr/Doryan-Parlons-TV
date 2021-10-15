import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';


const icones = (props: any): JSX.Element => {

    const { icons } = props;
    const renderIcons = (): JSX.Element[] => {
        return icons.map((icon: any, i: number) => {
            return (
                <FontAwesome
                    key={i}
                    name={icon.name}
                    onClick={icon.func}
                    className={icon.className}
                    onChange={icon.onChange}
                />
            )
        })

    }

    return (
        <StyledMessageEdit>
            {renderIcons()}
        </StyledMessageEdit>

    )
}

export default icones;

{
    "name": "image",
        "onClick": "ƒ func() {}",
            "className": "chat__messages-edit-picture",
                "onChange": "ƒ onChange() {}"
}