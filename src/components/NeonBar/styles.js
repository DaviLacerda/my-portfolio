import styled from 'styled-components';

export const Bar = styled.div`
    width:100%;
    height:5px;
    background-color:#fff;
    border-radius:8px;

    box-shadow: 0 0 20px ${(props) => props.theme.highlight}, 0 0 30px ${(props) => props.theme.highlight}, 0 0 40px ${(props) => props.theme.highlight}, 0 0 50px ${(props) => props.theme.highlight}, 0 0 60px ${(props) => props.theme.highlight}, 0 0 70px ${(props) => props.theme.highlight}, 0 0 80px ${(props) => props.theme.highlight}, 0 0 90px ${(props) => props.theme.highlight}, 0 0 100px ${(props) => props.theme.highlight};

    @media(min-width:900px){
        width:5px;
        height:100%;
    }
`;