import styled from 'styled-components';
import '../../../public/'

const StyledHeaderBody = styled.div`

    .header-top {
      margin-top: 22px;
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
          background-color: #24AF8D;
          height: 40px;
          width: 117px;
          border-radius: 5px;
          color: #E5F1EE;
          border: none;
          margin-left: 4px;
        }

          .header-top__form-submit-icon {
            color: #E5F1EE;
            margin-right: 7px;
          }
`

export default StyledHeaderBody;