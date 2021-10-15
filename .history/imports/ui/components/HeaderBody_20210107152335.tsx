import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledHeaderBody from '../elements/StyledHeaderBody';

const headerBody = (props: any): JSX.Element => {
    return (
        <div>
            <StyledHeaderBody>

            <nav className="headerTop">
                <div className="liensNav">
                    <form className="formSubmit">
                        <input type="text" className="inputRecherche" />
                        <button type="submit" className="buttonSubmit">
                            <FontAwesome className="logoLoupe" name="search" />
                            Rechercher
                        </button>
                    </form>
                </div>
            </nav>

            </StyledHeaderBody>
        </div>
    )
}
export default headerBody