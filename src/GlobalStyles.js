import { createGlobalStyle } from "styled-components";

export const nightMode = {
    bg: "#0E0E10",
    color: "#efeff4",
    highlight: "#8257E5",
    floatCircle: "#6d39e6",
};

export const lightMode = {
    bg: "#edf1f7",
    color: "#0E0E10",
    highlight: "#e5b657",
    floatCircle: "#edc36d",
};

export const GlobalStyles = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;

        user-select:none;
        word-break: break-word;

        scrollbar-width: 0px;
        scrollbar-color: transparent;
    }

    html,body{
        width:100%;
        background-color:${(props) => props.theme.bg || "#0E0E10"};
        color:${(props) => props.theme.color || "#EFEFF4"};
        scroll-behavior: smooth;
    }

    #root{
        width:100%;
        min-height:100vh;
    }

    section{
        width: 100%;
        height: fit-content;
        min-height: 100vh;
    }

        /* ===== Scrollbar CSS ===== */

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 0px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    /* Project font sizes */

    h1,h2,h3,p,span{
        width:fit-content;
        font-family: 'Open Sans', sans-serif;
    }

    h1{
        font-size:28px;

        @media(min-width:900px){
            font-size:64px;
        }
    }

    h2{
        font-size:20px;

        @media(min-width:900px){
            font-size:36px;
        }
    }

    .customSwitch{
        position:absolute;
        top:1vh;
        right:1vw;
        z-index:10;

        .MuiSwitch-thumb{
            background-color:${(props) => props.theme.highlight};
        }

        .MuiSwitch-track{
            background-color:${(props) => props.theme.highlight} !important;
        }
    }
`;
