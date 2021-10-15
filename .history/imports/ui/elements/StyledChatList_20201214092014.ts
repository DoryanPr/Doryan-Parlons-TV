import styled from 'styled-components';

const StyledChatList = styled.div`
    display: flex;
    flex-direction: column;
    background: ${ ({theme}) => theme.chatList.color.background};
`
