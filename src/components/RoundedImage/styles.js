import styled from 'styled-components';

export const RoundedImg = styled.img`
    width:100%;
    height:100%;

    min-width:128px;
    min-height:128px;
    
    border-radius:50%;
    object-fit: contain;

    z-index:1;
`;