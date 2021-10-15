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
                            <input type="text" className="inputRecherche" placeholder="Rechercher une chaîne"
                            <FontAwesome className="logoLoupe" name="search" />
                            />
                            <button type="submit" className="buttonSubmit">
                                
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