import styled from 'styled-components';
import { keyframes } from 'styled-components';

const TypingEffect = keyframes`
    from { width: 0 }
    to { width: 100% }
`;

const blink_caret = keyframes`
    from, to { border-color: transparent }
    50% { border-color: #E89E43; }
`;

export const TypingStyled = styled.div`
    h1{
        width:fit-content;
        max-width:fit-content;

        font-family: 'Share Tech Mono', monospace;
        font-size:48px;
        
        border-right: .15em solid #E89E43;

        animation: ${blink_caret} .75s step-end infinite;
    }

    @media(min-width:900px){
        h1{
            width:0;
            white-space: nowrap;
            overflow:hidden;

            animation:
            ${TypingEffect} 3.5s steps(40, end) forwards,
            ${blink_caret} .75s step-end infinite;
        }
    }
`; 