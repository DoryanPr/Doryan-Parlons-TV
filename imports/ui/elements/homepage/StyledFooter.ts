import styled, { css } from 'styled-components';


const StyledFooter = styled.div`
margin-left: 15%;

@media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 0;
}

.footer {
    background-color: #151932;
    margin-bottom: 0;
    position: static;
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
    .footer {
        bottom: 0%;
        position: relative;
    }
   


`

export default StyledFooter;