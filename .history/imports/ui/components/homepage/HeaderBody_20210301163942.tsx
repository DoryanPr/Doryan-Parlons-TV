import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledHeaderBody from '../../elements/homepage/StyledHeaderBody';

const HeaderBody = (props: any): JSX.Element => {

    const [state, setState] = React.useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const pattern: string = e.target.value;
        setState(pattern);
        props.onSearch(pattern);
    }
    return (
        <div>
            <StyledHeaderBody>
                <nav className="header-top">
                    <form className="header-top__form">
                        <FontAwesome className="header-top__form-icon" name="search" />
                        <input
                            type="text"
                            className="header-top__form-search"
                            value={state}
                            onChange={handleChange}
                            placeholder="Vous recherchez quelque chose ?"
                        />
                    </form>
                </nav>
            </StyledHeaderBody>
        </div>
    )
}
export default SearchBar

{/* <button
     type="submit"
     className="header-top__form-submit">
     <FontAwesome className="header-top__form-submit-icon" name="gem" />
     Rechercher
</button>*/}