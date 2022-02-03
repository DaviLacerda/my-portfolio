import styled, { keyframes } from "styled-components";

function randomPosition(max,min) {
    return `${Math.floor(Math.random() * ((max - min) + min))}px`
}

const floatArrow = keyframes`
    0%{
        transform:translateY(-16px);
    }
    50%{
        transform:translateY(0px);
    }
    100%{
        transform:translateY(-16px);
    }
`;

const floatCircle = keyframes`
    0%{
        transform:translateY(-40px) translateX(0px);
    }
    12.5%{
        transform:translateY(-20px) translateX(20px);
    }
    25%{
        transform:translateY(0px) translateX(40px);
    }
    37.5%{
        transform:translateY(20px) translateX(20px);
    }
    50%{
        transform:translateY(40px) translateX(0px);
    }
    62.5%{
        transform:translateY(20px) translateX(20px);
    }
    75%{
        transform:translateY(0px) translateX(40px);
    }
    87.5%{
        transform:translateY(-20px) translateX(20px);
    }
    100%{
        transform:translateY(-40px) translateX(0px);
    }
`;

const CircleRebounding = keyframes`
    0%, 100%{
        top:${randomPosition(window.screen.height, 0)};
        right:${randomPosition(window.screen.width, 0)};
    }
    25%{
        top:${randomPosition(window.screen.height, 0)};
        right:${randomPosition(window.screen.width, 0)};
    }
    50%{
        top:${randomPosition(window.screen.height, 0)};
        right:${randomPosition(window.screen.width, 0)};
    }
    75%{
        top:${randomPosition(window.screen.height, 0)};
        right:${randomPosition(window.screen.width, 0)};
    }
`;

export const Presentation = styled.section`
    width: 100%;
    height: fit-content;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10vw;

    padding: 16px;

    @media (min-width: 900px) {
        flex-direction: row;
        gap: 20vw;
    }

    .handShake{
        display:flex;
        flex-direction:row;
        place-content:center flex-start;
        gap:12px;
    }

    .arrowDown {
        position: absolute;
        bottom: 10vh;
        animation: ${floatArrow} 2.5s infinite ease-in-out;

        width: fit-content;
        color: inherit;
    }

    .curveText {
        fill: #fff;
    }
`;

export const PresentationLeft = styled.div`
    width: fit-content;

    display: flex;
    flex-direction: column;
`;

export const PresentationRight = styled.div`
    position: relative;

    width: 30%;
    min-width: 128px;
    max-width: 384px;

    height: auto;
    max-height: 384px;

    display: flex;
    flex-direction: row;
`;

export const Circle = styled.div`
    position: absolute;
    top: 0;
    right: -5vw;

    width: 100%;
    height: 100%;

    border-radius: 50%;
    object-fit: contain;

    z-index: 0;
    background-color: ${(props) => props.theme.highlight};

    animation: ${floatCircle} 20s infinite linear;
`;

export const ReboundCircle = styled.div`
    position: absolute;

    width: 128px;
    height: 128px;

    border-radius: 50%;
    object-fit: contain;

    z-index: 0;

    background-color: ${(props) => props.theme.floatCircle};

    animation: ${CircleRebounding} 24s infinite linear;

    @media(min-width:900px){
        width: 256px;
        height: 256px;
    }
`;

export const Technologies = styled.section`
    position: relative;
    width: 100%;
    height: fit-content;
    min-height: 100vh;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 2vh;

    color:${(props) => props.theme.color};
    background-color:${(props) => props.theme.highlight};

    padding: 100px 32px 16px;

    @media (min-width: 900px) {
        gap: 25vh;
    }
`;

export const TechPart = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 3vh;

    text-align: left;
    z-index: 1;

    .content {
        width: fit-content;

        display: flex;
        flex-direction: column;
        gap: 3vh;

        text-align: left;
    }

    .border {
        width: fit-content;

        display: flex;
        flex-direction: column;
        gap: 3vh;

        text-align: left;
    }

    @media (max-width: 900px) {
        .border {
            padding-bottom: 5vw;
            border-bottom: 1px solid
                ${(props) => props.theme.bg || "#EFEFF4"};
        }
    }

    @media (min-width: 900px) {
        flex-direction: row;
        gap: 3vw;

        .border {
            padding-right: 5vw;
            border-right: 1px solid ${(props) => props.theme.color || "#EFEFF4"};
        }
    }
`;

export const TechLanguages = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    gap: 4vh;
    z-index: 1;

    .icons {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        img {
            width: 48px;
            height: auto;

            min-width: 64px;
            max-width: 128px;

            object-fit: contain;

            @media (min-width: 900px) {
                width: 128px;
            }
        }

        @media (min-width: 600px) {
            width: 50%;
            flex-direction: row;
        }
    }
`;

export const SliderContainer = styled.section`
    width: 100%;
    height: fit-content;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2vh;

    @media (min-width: 900px) {
        gap: 3vw;
    }
`;
