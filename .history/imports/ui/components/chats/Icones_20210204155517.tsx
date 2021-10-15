import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';


const icones = (props: any): JSX.Element => {

    const { icons, iconClass, OPVisible } = props;
    const renderIcons = (): JSX.Element[] => {
        return icons.map((icon: any, i: number) => {
            return (
                <FontAwesome
                    key={i}
                    name={icon.name}
                    onClick={icon.func}
                    
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