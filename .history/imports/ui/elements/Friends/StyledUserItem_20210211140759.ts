import styled from 'styled-components';



const StyledUserItem = styled.div`
    .chat--contentContainer {
        border-bottom: none;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .__divider {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 0.1rem;
        background: #f2f2f2;
    }
`

export default StyledUserItem;