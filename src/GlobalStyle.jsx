import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, 'Fira Sans', system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        font-weight: 400;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }    
    
    #root {
        width: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        line-height: 1.5;
        list-style: none;
        text-decoration: none;
    }

    body {
        display: flex;
        min-width: 320px;
        min-height: 100vh;
        background-color: ${({theme}) => theme.colors.bg.c1};
    }

    h1 {
        font-size: 4rem;
        line-height: 5rem;
    }
`;