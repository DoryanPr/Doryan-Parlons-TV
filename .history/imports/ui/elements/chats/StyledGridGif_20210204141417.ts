import styled from 'styled-components';

const StyledMessageBox = styled.div`
    .chat__messages-box {
        height: calc(100vh - 30px);
        overflow-y: scroll;
        display: flex;
        flex-direction: column-reverse;
    }
`

export default StyledMessageBox;