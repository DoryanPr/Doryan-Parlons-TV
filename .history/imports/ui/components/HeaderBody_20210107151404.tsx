import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledHeaderBody from ''

const headerBody = (props: any): JSX.Element => {
    return (
        <div>
            <nav className="headerTop">
                <div className="liensNav">
                    <form className="formSubmit">
                        <input type="text" className="inputRecherche" />
                        <button type="submit">
                            <FontAwesome className="logoLoupe" name="search" />
                        </button>
                    </form>
                </div>
            </nav>

        </div>
    )
}
export default headerBody