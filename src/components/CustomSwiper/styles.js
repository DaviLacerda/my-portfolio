import styled from "styled-components";

export const SwiperContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .swiper {
        position:relative;

        width: 90%;
        height: 280px;

        padding:8px;

        @media(min-width:900px){
            width:50%;
            height:160px;
        }
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
