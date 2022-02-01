import styled from 'styled-components';

export const Presentation = styled.section`
    width:100%;
    height:100vh;
    min-height:fit-content;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:10vw;

    padding:16px;

    @media(min-width:900px){
        flex-direction:row;
        gap:20vw;
    }
`;

export const PresentationLeft = styled.div`
    width:fit-content;

    display:flex;
    flex-direction:column;
`

export const PresentationRight = styled.div`
    position:relative;

    width:30%;
    min-width:128px;
    max-width:384px;

    height:auto;
    max-height:384px;

    display:flex;
    flex-direction:row;
`

export const Circle = styled.div`
    position:absolute;
    top:0;
    right:-5vw;

    width:100%;
    height:100%;
    
    border-radius:50%;
    object-fit: contain;

    z-index:0;
    background-color:${(props) => props.theme.highlight};
`;

export const Technologies = styled.section`
    width:100%;
    height:100vh;
    min-height:fit-content;

    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex-direction:column;
    gap:2vh;

    padding:10vh 16px 16px;

    @media(min-width:900px){
        gap:25vh;
    }
`;

export const TechPart = styled.div`
    width:100%;

    display:flex;
    flex-direction:column;
    gap:3vh;

    text-align:left;

    .content{
        width:fit-content;

        display:flex;
        flex-direction:column;
        gap:3vh;

        text-align:left;
    }

    .border{
        width:fit-content;

        display:flex;
        flex-direction:column;
        gap:3vh;

        text-align:left;
    }

    @media(max-width:900px){
        .border{
            padding-bottom:5vw;
            border-bottom:1px solid ${(props) => props.theme.color || "#EFEFF4"};
        }
    }

    @media(min-width:900px){
        flex-direction:row;
        gap:3vw;
        
        .border{
            padding-right:5vw;
            border-right:1px solid ${(props) => props.theme.color || "#EFEFF4"};
        }
    }
`

export const TechLanguages = styled.div`
    width:100%;

    display:flex;
    flex-direction:column;

    align-items:center;
    justify-content:center;
    gap:4vh;

    .icons{
        width:100%;

        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;

        img{
            width:48px;
            height:auto;

            min-width:64px;
            max-width:128px;

            object-fit:contain;

            @media(min-width:900px){
                width:128px;
            }
        }

        @media(min-width:600px){
            width:50%;
            flex-direction:row;
        }
    }
`

export const SliderContainer = styled.section`
    width:100%;
    height:100vh;
    min-height:fit-content;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:2vh;

    margin-top:128px;

    @media(min-width:900px){
        gap:3vw;
    }
`