import styled, {keyframes} from "styled-components";

const randonHue = () => {
    return `${(Math.floor(Math.random() * (20 - 0)) + 0)}deg`;
};

const iconAnimation = keyframes`
    0%{
        transform:translateY(0px);
    }
    50%{
        transform:translateY(-3px);
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
        width: 55%;
        height: 280px;

        @media(min-width:900px){
            width:35%;
            height:160px;
        }
    }

    .swiper-slide {
        position: relative;

        display: flex;
        place-content:center center;
        flex-direction: column;
        gap: 12px;

        padding: 16px;
        border-radius: 4px;

        @media(min-width:900px){
            flex-direction:row;
        }

        a {
            position:relative;
            color: inherit;
            text-decoration: none;

            &:hover{
                cursor:pointer;
                &:after{
                    width:100%;
                }
            }
        
            &:after{
                content: "";
                position: absolute; 
                bottom: -5px;
                left: 0;
                right: 0;
                margin: auto;
            
                display: block;
                height: 2px;
                width: 0;
                
                background: ${(props) => props.theme.color || "#e89e43"};
                transition: width .3s ease;
            }
        }

        .slider__left {
            display:flex;
            flex-direction:column;
            place-content:center center;
            gap:4px;

            width:100%;

            @media(min-width:900px){
                width:80%;
            }

            .slider__left__title{
                display:flex;
                place-content:center flex-start;
                flex-direction:row;
                gap:4px;
            }

            .slider__left__language{
                display:flex;
                flex-direction:row;
                place-content:center flex-start;
                gap:4px;

                .miniCircle{
                    display:flex;
                    content:'';
                    width:6px;
                    height:6px;
                    border-radius:50%;
                    background-color:${(props) => props.theme.color};
                    align-self:center;
                }
            }

            .topics {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                place-content: flex-start center;
                gap: 2px;

                width: 100%;

                span {
                    display: flex;
                    place-content: center center;
                    gap:4px;
                    border-radius: 20px;
                    padding:2px;

                    &:before{
                        content:'•';
                    }
                }
            }
        }

        .slider__right{
            display:flex;
            flex-direction:row;
            place-content:center flex-start;
            gap:8px;

            width:100%;

            a{
                display:flex;
                flex-direction:row;
                place-content:center center;
                gap:4px;

                width:fit-content;
            }

            @media(min-width:900px){
                place-content:center center;
                flex-direction:column;
                width:20%;
            }
        }
    }

    .swiper-slide-active{
        a:hover{
            .animationIcon{
                animation: ${iconAnimation} .5s ease-in;
            }
        }
    }

    .swiper-slide{
        background-color: ${(props) => props.theme.highlight};
    }

    .swiper-slide:nth-child(1n) {
        filter:hue-rotate(${randonHue()});
    }

    .swiper-slide:nth-child(2n) {
        filter:hue-rotate(${randonHue()});
    }

    .swiper-slide:nth-child(3n) {
        filter:hue-rotate(${randonHue()});
    }

    .swiper-slide:nth-child(4n) {
        filter:hue-rotate(${randonHue()});
    }

    .swiper-slide:nth-child(5n) {
        filter:hue-rotate(${randonHue()});
    }
`;
