import styled from 'styled-components';

const StyledMessagesList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 71%;
    overflow-y: auto;
    position: relative;
    margin-top: 30px;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
 }

    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 0.2rem;
    }

    ::webkit-scrollbar-thumb:hover {
        background: #555;
    }

    a {
    color: #1a213f;
    text-decoration: none;
    background-color: transparent;
    padding: 15px;
    border-radius: 30%;
 `

export default StyledMessagesList;