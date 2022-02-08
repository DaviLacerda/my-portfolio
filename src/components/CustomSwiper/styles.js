import styled from "styled-components";

export const SwiperContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .swiper {
        position:relative;

        width: 100%;
        height: 280px;

        @media(min-width:900px){
            width:50%;
            height:160px;
        }
    }

    .swiper-slide{
        width:100%;
        height:100%;

        display:flex;
        align-items:center;
        justify-content:center;

        transition: filter .4s;
        will-change:filter;

        a{
            color:inherit;
        }

        img{
            width:100%;
            max-width:400px;

            height:100%;
            max-height:150px;
        }
    }

    .swiper-slide:not(.swiper-slide-active){
        filter:brightness(0.8);
    }

    .swiper-slide-shadow{
        display:none;
    }

    .swiper-pagination{
        bottom:-16px;
    }

    .swiper-pagination-bullet{
        background-color: ${(props) => props.theme.color};
        opacity:0.6;
    }

    .swiper-pagination-bullet-active{
        background-color: ${(props) => props.theme.highlight};
    }
`;
