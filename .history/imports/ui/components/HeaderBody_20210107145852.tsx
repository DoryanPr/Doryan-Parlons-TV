import React from 'react';

const headerBody = (props: any): JSX.Element => {
    return (
        <div>
            <nav className="headerTop">
                <div className="liensNav">
                    <form className="formSubmit">
                        <input type="text" className="inputRecherche"/>
                        <button type="submit">
                            <img src="" alt=""/>
                        </button>
                    </form>
               </div>
            </nav>
        </div>
    )
}
export default headerBody