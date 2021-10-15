import React from 'react';
import FontAwesome from 'react-fontawesome';

const headerBody = (props: any): JSX.Element => {
    return (
        <div>
            <nav className="headerTop">
                <div className="liensNav">
                    <form className="formSubmit">
                        <input type="text" className="inputRecherche"/>
                        <button type="submit">
                            <FontAwesome className="search"/>

                           
                        </button>
                    </form>
               </div>
            </nav>
        </div>
    )
}
export default headerBody