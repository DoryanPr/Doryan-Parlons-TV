import React from 'react';
import { pathToFileURL } from 'url';

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
            <div className="actu--divider" />
            <span className="actu--phone">
                {pathToFileURL,e}
            </span>
        </StyledActu>
    )
}