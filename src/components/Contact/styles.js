import styled, {keyframes} from 'styled-components';

const floatBar = keyframes`
    from,to { transform:translateY(-12px) }
    50% { transform:translateY(0px) }
`

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    gap:5vh;
    z-index: 1;

    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.bg};

    @media(min-width:900px){
        gap: 10vw;
        flex-direction:row;
    }

    .contact__left{
        width:fit-content;
        height:fit-content;

        display:flex;
        align-items:left;
        justify-content:center;
        flex-direction:column;
        gap:8px;
    }

    .contact__neonBar{
        width:100%;

        @media(min-width:900px){
            width:fit-content;
            height:400px;
            animation: ${floatBar} 3s infinite ease-in-out;
        }
    }

    .contact__right{
        width:fit-content;
        height:fit-content;

        display:flex;
        align-items:center;
        justify-content:center;
        flex-flow: row wrap;
        gap:8px;

        a{
            width:48px;
            height:48px;
            color:inherit;

            padding:8px;

            border-radius:50%;
            transition: background-color .5s;

            svg{
                width:100%;
                height:100%;

                path{
                    fill:${(props) => props.theme.color};
                }
            }

            &:hover{
                background-color:${(props) => props.theme.highlight};
            }
        }
    }
`