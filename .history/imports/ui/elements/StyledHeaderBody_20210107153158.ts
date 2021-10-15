import styled from 'styled-components';

const StyledHeaderBody = styled.div`
    .formSubmit {
        display:flex;
        shrink: 1;
        background-color: black;
    }
    
    .inputRecherche {
        font-size: 1.5rem;
        font-weight: 40;
        line-height: 2rem;
        height: 40;
        outline: none;
        width: 250px;
        user-select: text;
        z-index: 1;
        border: none;
        background-color: black;
        &::placeholder {
            color: grey;
            opacity: 1;
            font-size: 1.4rem;
        }
    }

    .buttonSubmit {
         background-color: #24AF8D;

    }
    
`

export default StyledHeaderBody;