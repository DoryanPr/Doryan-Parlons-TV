// App.styled.js
import styled from 'styled-components';

const StyledApp = styled.div`
    background: #f8f8f8;
    min-height: 100vh;

    .form-login {
        background: white;
        margin: 20px auto;
        max-width: 550px;
        padding: 20px;
        text-align: center;
    }

    .form-login h1 {
        margin-bottom: 30px;
    }

    .form-login label {
        opacity: 0.7;
    }

    .form-login input {
        text-align: center;
        border: none;
        border-bottom: solid 1px #ddd;
        padding: 5px 15px;
    }

    .form-login button {
        display: block;
        margin: 10px auto;
        background-color: #ff6457;
        border: 1px;
        border-radius: 3px;
        color: white;
        font-size: 13px;
        padding: 5px 12px;
    }

    .form-login a {
        color: black;
        display: inline-block!important;
        font-size: 13px;
        justify-content: center;
        letter-spacing: 0.5px;
        margin-bottom: 20px;
        opacity: 80%;
        text-decoration: none;
    }
    
        .form-login a:hover {
            opacity: 100%;
        }
    
        .form-login a::after {
            background: #ff6457;
            content: "";
            display: block;
            height: 2px;
            transition: width .3s;
            position: relative;
            width: 0;
        }
    
        .form-login a:hover::after {
            background: #ff6457;
            position: relative;
            transition: width .3s;
            -webkit-transition: width .3s;
            width: 100%;
        }
`
export default StyledApp;