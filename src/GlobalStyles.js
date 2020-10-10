import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
    * {
        margin: 0;
    }
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333333;
        font-size: 16px;
        background-color: black;
    }
`;