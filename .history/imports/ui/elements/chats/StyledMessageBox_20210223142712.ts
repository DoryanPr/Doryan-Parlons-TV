import styled from 'styled-components';

const StyledMessageBox = styled.div`
    .chat__messages-box {
        height: calc(100vh - 30px);
        overflow-x: hidden;
        overflow-y: scroll;
        display: flex;
        flex-direction: column-reverse;
    }

    .chat__messages-box::-webkit-scrollbar {
      width: 3px;
    }

    .chat__messages-box::-webkit-scrollbar-thumb {
      background: #1a213f;
    }

      .chat__messages-box-flipmove {
          display: flex;
          flex-direction: column-reverse;
      }
      .day--container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 1.2rem;
    }
    .day--wrapper {
        background: grey;
        border-radius: 0.7rem;
        padding: 0.6rem 1.2rem;
        text-align: center;
        height: 2.2rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .day--span {
        color: blue ;
        font-size: 1.25rem;
        text-transform: uppercase;
    }
`

export default StyledMessageBox;