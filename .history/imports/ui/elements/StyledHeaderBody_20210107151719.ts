import styled from 'styled-components';

const StyledHeaderBody = styled.div`
    .buttonSubmit {
        background: ${({ theme }) => theme.searchBar.color.labelBackground};
        border-radius: 0.7rem;
        padding-left: 2.5rem;
        padding-right: 2.2rem;
        height: 3.5rem;
        width: 18rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.3rem;
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
            color: ;
            opacity: 1;
            font-size: 1.4rem;
        }
    }
    
`

export default StyledHeaderBody;