import styled from 'styled-components';

const StyledHeaderBody = styled.div`
    .formSubmit {
        display:flex;
        shrink: 1;
    }
    
    .inputRecherche {
        font-size: 1.5rem;
        font-weight: 40;
        line-height: 2rem;
        height: 40px;
        outline: none;
        width: 250px;
        user-select: text;
        z-index: 1;
        border: none;
        border-radius: 5px;
        background-color: black;
        &::placeholder {
            color: grey;
            opacity: 1;
            font-size: 1.4rem;
        }
    }

    .buttonSubmit {
        background-color: #24AF8D;
        height: 40px;
        width: 117px;
        border-radius: 5px;
        color: #E5F1EE;
        margin left
    }

    .gemme {
        color: #E5F1EE;
        margin-right: 7px;
    }
    
`

export default StyledHeaderBody;