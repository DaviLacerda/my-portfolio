import styled from 'styled-components';

export const CustomIconLink = styled.a`
    width:48px;
    height:48px;
    color:inherit;

    padding:8px;

    border-radius:50%;
    transition: all .5s;

    svg{
        width:100%;
        height:100%;
    }

    path{
        fill:${(props) => props.theme.color};
    }

    &:hover, &:focus{
        background-color:${(props) => props.theme.highlight};
    }

    &:active{
        transform:scale(0.9);
    }
`;