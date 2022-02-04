import styled, {keyframes} from "styled-components";

const randonHue = () => {
    return `${(Math.floor(Math.random() * (20 - 0)) + 0)}deg`;
};

const iconAnimation = keyframes`
    0% { transform:translateY(0px) }
    50% { transform:translateY(-3px) }
    100% { transform:translateY(0px) }
`;

export const SwiperContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .swiper {
        width: 90%;
        height: 280px;

        padding:8px;

        @media(min-width:900px){
            width:35%;
            height:160px;
        }
    }

    .swiper-cards{
        overflow: visible;
    }

    .swiper-slide{
        a{
            color:inherit;
        }

        img{
            width:100%;
            height:100%;

            min-width:128px;
            min-height:128px;
        }
    }

    .swiper-slide-shadow{
        display:none;
    }
`;
