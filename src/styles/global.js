import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0;
        box-sizing: border-box;
    }


    @media only screen and (max-width: 480px){
    body{
        width: 92vw;
        height: 94vh;
        //background-color: #f0f2f5;
        font-family: Arial, Helvetica, sans-serif;
        align-content: center;
        margin-left: 52px;
    }
}
`;

export default GlobalStyle