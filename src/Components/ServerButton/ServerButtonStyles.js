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

    &::before{
        content:'';
        position: absolute;
        width: 9px;
        height: 9px;
        left: -17px;
        top: calc(50% - 4.5px);
        background-color: var(--white);
        border-radius: 50%;
        display: ${({hasNotifications})=> hasNotifications?'inline':'none'};
    }

    &::after{
        content: '${({mentions})=> mentions&&mentions }';
        display: ${({mentions}) => mentions>0?'inline':'none'};
        position: absolute;
        background-color: var(--notification);
        width:auto;
        height: 16px;
        padding: 0 4px;
        bottom:-4px;
        right:-4px;
        border: 4px solid var(--quaternary);
        border-radius: 12px;
        font-size: 13px;
        text-align: center;
        font-weight: bold;
        color:var(--white);
    }

    transition: border-radius .2s, background-color .2s;

    &.active ,
    &:hover{
        border-radius: 16px;
        background-color: ${({isHome})=> isHome ? 'var(--rocketseat)':'var(--discord)'};
    }
`;