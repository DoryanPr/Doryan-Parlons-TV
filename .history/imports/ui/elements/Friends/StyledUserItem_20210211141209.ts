import styled from 'styled-components';



const StyledUserItem = styled.div`

    display: flex;
    padding: 15px;

    .chat--content-container {
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

    .chat--content-container-line1 {

    }
    chat--content-container-title {}
`

export default StyledUserItem;