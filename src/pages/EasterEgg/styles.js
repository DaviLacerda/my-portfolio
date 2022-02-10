import styled, {keyframes} from 'styled-components';

const starWarsEffectForSmallDevices = keyframes`
    0% {
        transform:rotateX(40deg) translateY(calc(100% + 600px));
    }
    100% { 
        transform:rotateX(40deg) translateY(calc(-100% - 600px));
    }
`

const starWarsEffectForBigDevices = keyframes`
    0% {
        transform:rotateX(40deg) translateY(900px);
    }
    100% { 
        transform:rotateX(40deg) translateY(-1200px);
    }
`

export const EasterEggContainer = styled.section`
    width:100%;
    height:100%;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    overflow:hidden;
    padding:0 !important;

    .easter{
        width:100%;
        height:60vh;
        position:relative;

        overflow:hidden;
        perspective:400px;

        color:#FFD650;
        text-align:justify;

        h1,p{
            width:60%;
        }

        h1{
            text-align:center;
        }

        p{
            font-size:1.5em;
            line-height:1.5em;

            @media(min-width:900px){
                font-size:2em;
            }
        }

        &:after{
            content:' ';
            width:100%;
            height:100%;
            position:fixed;
            top:0;
            background:linear-gradient(180deg, #0004, #0000);
        }
        
        .easter__content{
            width:100%;
            height:100%;

            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            gap:8px;

            padding:8px;
            perspective:400px;
            perspective-origin:bottom;
            transform:translateY(1200px);
        }

        .animation{
            animation:${starWarsEffectForSmallDevices} 75s forwards linear;

            @media(min-width:900px){
                animation:${starWarsEffectForBigDevices} 45s forwards linear;
            }
        }
    }
`

export const Player = styled.div`
    position:fixed;
    top:5vh;
    left:50vw;

    width:32px;
    height:32px;
    background:#fff;

    clip-path: polygon(0 0, 0% 100%, 100% 50%);
    z-index:99;
    transition:all .5s;

    &:hover{
        cursor:pointer;
        filter:brightness(0.9);
    }
`