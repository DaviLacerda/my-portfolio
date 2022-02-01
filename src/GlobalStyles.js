import { createGlobalStyle } from "styled-components";

export const nightMode = {
    bg: "#0E0E10",
    color: "#efeff4",
    highlight: "#E89E43",
};

export const lightMode = {
    bg: "#efeff4",
    color: "#0E0E10",
    highlight: "#E89E43",
};

export const GlobalStyles = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;

        user-select:none;
        word-break: break-word;

        scrollbar-width: auto;
        scrollbar-color: #e89e43 ${(props) => props.theme.bg || "#0E0E10"};
    }

    html,body{
        width:100%;
        background-color:${(props) => props.theme.bg || "#0E0E10"};
        color:${(props) => props.theme.color || "#EFEFF4"};
    }

    #root{
        width:100%;
        min-height:100vh;
    }

        /* ===== Scrollbar CSS ===== */

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 6px;
    }

    *::-webkit-scrollbar-track {
        background: ${(props) => props.theme.bg || "#0E0E10"};
    }

    *::-webkit-scrollbar-thumb {
        background-color: #e89e43;
        border-radius: 10px;
        border: 2px none ${(props) => props.theme.bg || "#0E0E10"};
    }

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

        position:relative;
        align-self:center;

        &:hover{
            &:after{
                width:100%;
            }
        }

        &:after{
            content: "";
            position: absolute; 
            bottom: -4px;
            left: 0;
        
            display: block;
            height: 2px;
            width: 0;
            
            background: ${(props) => props.theme.highlight || "#e89e43"};
            transition: width .6s ease;
        }

        @media(min-width:900px){
            font-size:36px;
        }
    }

    .customSwitch{
        position:fixed;
        top:1vh;
        right:1vw;
    }
`;
