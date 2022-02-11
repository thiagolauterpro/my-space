import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.25s linear;
    
    :root{
        font-size: 0.8rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "inter";
    }

    @media (min-width: 700px) {
    :root {
            font-size: 85%;
        }
    }

`;
/* background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text}; */
