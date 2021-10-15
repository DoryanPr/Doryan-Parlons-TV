import styled from 'styled-components';

const StyledHeaderBody = styled.div`
    .formSubmit {
        display:flex;
        shrink: 1;
        background
    }
    
    .inputRecherche {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 2rem;
        min-height: 2rem;
        outline: none;
        width: 100%;
        user-select: text;
        z-index: 1;
        border: none;
        color: black;
        &::placeholder {
            color: grey;
            opacity: 1;
            font-size: 1.4rem;
        }
    }
    
`

export default StyledHeaderBody;