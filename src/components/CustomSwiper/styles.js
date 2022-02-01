import styled, {keyframes} from "styled-components";

const randonRGB = () => {
    return Math.floor(Math.random() * (200 - 40) + 40);
};

const iconAnimation = keyframes`
    0%{
        transform:translateY(0px);
    }
    50%{
        transform:translateY(-6px);
    }
    100%{
        transform:translateY(0px);
    }
`;

export const SwiperContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .swiper {
        width: 75%;
        height: 600px;

        @media(min-width:900px){
            width:50%;
            height:400px;
        }
    }

    .swiper-slide {
        position: relative;

        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        flex-direction: column;
        gap: 5%;

        padding: 16px;
        border-radius: 18px;

        @media(min-width:900px){
            flex-direction:row;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        .slider__left {
            display:flex;
            flex-direction:column;
            place-content:center center;
            gap:4px;

            .topics {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                place-content: flex-start center;
                gap: 4px;

                width: 100%;

                span {
                    display: flex;
                    place-content: center center;
                    gap:4px;
                    border-radius: 20px;
                    padding: 8px;

                    &:before{
                        content:'•';
                    }
                }
            }
        }

        .slider__right{
            display:flex;
            flex-direction:column;
            place-content:flex-start center;
            gap:8px;

            a{
                display:flex;
                flex-direction:row;
                place-content:center center;
                gap:4px;

                width:fit-content;
            }
        }
    }

    .swiper-slide-active{
        .animationIcon{
            animation: ${iconAnimation} .5s ease-in;
        }
    }

    .swiper-slide:nth-child(1n) {
        background-color: ${`rgb(${randonRGB()}, ${randonRGB()}, ${randonRGB()})`};
    }

    .swiper-slide:nth-child(2n) {
        background-color: ${`rgb(${randonRGB()}, ${randonRGB()}, ${randonRGB()})`};
    }

    .swiper-slide:nth-child(3n) {
        background-color: ${`rgb(${randonRGB()}, ${randonRGB()}, ${randonRGB()})`};
    }

    .swiper-slide:nth-child(4n) {
        background-color: ${`rgb(${randonRGB()}, ${randonRGB()}, ${randonRGB()})`};
    }

    .swiper-slide:nth-child(5n) {
        background-color: ${`rgb(${randonRGB()}, ${randonRGB()}, ${randonRGB()})`};
    }
`;
