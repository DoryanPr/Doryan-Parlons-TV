import styled from 'styled-components';

const StyledHeaderBody = styled.div`

    .header-top {
      margin-top: 22px;
      position: absolut;
    }

      .header-top__form {
        display:flex;
        shrink: 1;
      }

        .header-top__form-icon {
          background-color: #1F1D24;
          border-bottom-left-radius: 5px;
          border-top-left-radius: 5px;
          color: white;
          font-size: 17px;
          padding: 11px;
        }

        .header-top__form-search {
          background-color: #1F1D24;
          border: none;
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;
          color: white;
          font-size: 1.5rem;
          font-weight: 40;
          height: 40px;
          line-height: 2rem;
          outline: none;
          user-select: text;
          width: 250px;
          z-index: 1;

          &::placeholder {
            margin-left: 6px;
            color: grey;
            opacity: 1;
            font-size: 1.4rem;
          }
        }

        .header-top__form-submit {
          background-color: #ff6457;
          border-radius: 5px;
          border: none;
          color: #E5F1EE;
          font-size: 14px;
          height: 40px;
          margin-left: 4px;
          width: 117px;
        }

          .header-top__form-submit-icon {
            color: #E5F1EE;
            margin-right: 7px;
          }
`

export default StyledHeaderBody;