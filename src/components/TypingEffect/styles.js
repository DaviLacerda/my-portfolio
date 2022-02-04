import styled from 'styled-components';
import { keyframes } from 'styled-components';

const TypingEffect = keyframes`
    0% { width: 0 }
    25% { width:100% }
    75% { width:100% }
    100% { width:0 }
`;

const blink_caret = keyframes`
    0% { border-color: transparent }
    50% { border-color:inherit }
    100% { border-color:transparent }
`;

export const TypingStyled = styled.div`
    border-color:${(props) => props.theme.highlight || '#8955d8'};

    h1{
        width:0;
        white-space: nowrap;
        overflow:hidden;

        font-family: 'Share Tech Mono', monospace;
        
        border-right: .15em solid ${(props) => props.theme.highlight || '#8955d8'};

        animation:
            ${TypingEffect} 16s steps(40, end) infinite,
            ${blink_caret} 1s step-end infinite;
    }
`; 