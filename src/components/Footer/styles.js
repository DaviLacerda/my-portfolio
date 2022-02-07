import styled from 'styled-components';

export const CustomFooter = styled.footer`
    width:100%;
    min-height:fit-content;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-flow:column wrap;

    padding:16px;
    
    background-color: ${(props) => props.theme.highlight};
`;