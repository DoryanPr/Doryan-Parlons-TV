import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledLSForm from '../elements/StyledLSForm';

const LSForm = (props: any): JSX.Element => {
    return (
        <StyledLSForm>
            <span className="LSForm--title">
                {title}
            </span>
        </StyledLSForm>
    )
}
export default LSForm;