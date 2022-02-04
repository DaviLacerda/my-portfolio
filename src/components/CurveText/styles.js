import styled, {keyframes} from 'styled-components';

const spinText = keyframes`
    from { transform:rotate(0deg) }
    to { transform:rotate(360deg) }
`

export const SvgContainer = styled.div`
    position:absolute;
    top:5vh;
    left:5vw;

    animation: ${spinText} 8s infinite linear;
    
    svg{
        width:16vh;
        max-width:128px;
        height:auto;
    }
    
    path{
        fill:${(props) => props.theme.color};
    }
`