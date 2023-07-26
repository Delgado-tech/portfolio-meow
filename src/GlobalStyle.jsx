import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

const overflowBg = theme.colors.bg.c3;

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
        min-width: 320px;
        max-width: 2000px;
    }

    ::-webkit-scrollbar {
        background: ${overflowBg};
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.bg.c5};
        border-radius: 50px;    
        border: 2px solid ${overflowBg};
        border-top: 3px solid ${overflowBg};
        border-bottom: 3px solid ${overflowBg};
    }

    * {
        margin: 0;
        padding: 0;
        line-height: 1.5;
        list-style: none;
        text-decoration: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        display: flex;
        justify-content: center;
        min-height: 100vh;
        background-color: ${({theme}) => theme.colors.bg.c1};
    }

    a {
        color: inherit;
    }

    h1, h2, h3, .highlightText {
        font-family: 'Fira Sans', sans-serif;
        letter-spacing: 1px;
    }
`;