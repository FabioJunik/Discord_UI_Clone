import styled from "styled-components";

export const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    margin-bottom: 8px;
    border-radius: 50%;
    background-color: ${props=>props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};
    cursor: pointer;
    > img{
        width: 24px;
        height: 24px;
    }

    transition: border-radius .2s, background-color .2s;

    &.active ,
    &:hover{
        border-radius: 16px;
        background-color: ${({isHome})=> isHome ? 'var(--rocketseat)':'var(--discord)'};
    }
`;