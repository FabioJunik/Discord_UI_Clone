import styled from 'styled-components';
import {PersonAdd, Settings} from 'styled-icons/material';
import {Hashtag} from 'styled-icons/heroicons-outline';


export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 3px;
    border-radius: 5px;
    background-color: transparent;
    transition: background-color .2s;
    cursor: pointer;

    >div{
        display:flex;
        align-items: center;
    }

    >div span{
        font-size:15px;
        margin-left: 5px;
        color: var(--senary);
    }
    & .iconsRight{
        display:none;
    }
    &.active, &:hover{
        background-color: var(--quinary);

        > div span{
            color: var(--white);
        }

        & .iconsRight{
            display: inline;
        }
    }
`;

    

export const HashtagIcon = styled(Hashtag)`
    width:20px;
    height:20px;
    color: var(--senary);

`;
export const InviteIcon = styled(PersonAdd)`
    width:16px;
    height:16px;
    color: var(--senary);
    transition: color .2s;
    cursor:pointer;

    &:hover{
        color: var(--white);
    }
`;
export const SettingsIcon = styled(Settings)`
    width:16px;
    height:16px;
    margin-left: 4px;
    color: var(--senary);
    transition: color .2s;
    cursor:pointer;

    &:hover{
        color: var(--white);
    }
`;