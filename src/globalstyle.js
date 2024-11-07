import { createGlobalStyle } from "styled-components";
import backgroundImage from "./currency_background.jpg"


export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, ::after, ::before {
    box-sizing: inherit;
}


body {
    background-image: url(${backgroundImage});
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-size: cover;
    font-family: 'Aleo', serif;
}
`;
