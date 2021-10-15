import styled, { css } from 'styled-components';


const StyledFooter = styled.div`

.footer {
    background-color: #1F1D24;
    bottom: 0%;
    position: absolute;
    padding: 50px;
    width: 100%;
    height: 150px;
    
    
    
    .footer-content {  
       p {
           align-items: center;
           color: white; 
           display: block;
           font-weight: bold;
           font-size: 10px;
           opacity: 70%;
           text-align: center !important;
        } 
    }

}
@media (max-width: ${({ theme }) => theme.mobile}) {
    .all-channels__container {
      position: relative;
      width: 100%;
    }

   


`

export default StyledFooter;