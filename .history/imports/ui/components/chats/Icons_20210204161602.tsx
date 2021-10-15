import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';


const Icons = (props: any): JSX.Element => {

    const { icons } = props;
    const renderIcons = (): JSX.Element[] => {
        return icons.map((icon: any, i: number) => {
            return (
                <div>
                    
                </div>
                <input
                    key={2}
                    name={icon.name}
                    onClick={icon.func}
                    className={icon.className}
                    type={icon.type}

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

export default Icons;
