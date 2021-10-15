import React from 'react';

import StyledActu from '../elements/StyledActu';

const Actu = (props: any): JSX.Element => {
    return (
        <StyledActu>
            <span className="actu--tilte">
                Actu et numéro de téléphone
            </span>
            <span className="actu--content">
                {actu}
            </span>
            <div className="actu--divide"></div>
        </StyledActu>
    )
}