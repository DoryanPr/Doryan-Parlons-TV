import React from 'react';
import FontAwesome from 'react-fontawesome';
import Moment from 'react-moment';

import StyledMessageImage from '../elements/StyledMessageImage';

const MessageImage = (props: any): JSX.Element => {
    const { mine } = props;

    const renderImage = (): JSX.Element => {
        if (mine) {
            return (
            <>
                <img 
                    className="image"
                    alt="img"
                    src={content}
                    />
                    <div className="image--overlay">
                        <div className="detailsContainer__date">
                            <div className="image--date">
                                <Moment
                            </div>
                        </div>
                    </div>
            </>

            )
        }
    }
    return (
        <StyledMessageImage mine={mine}>
            {renderImage()}
        </StyledMessageImage>
    )
}