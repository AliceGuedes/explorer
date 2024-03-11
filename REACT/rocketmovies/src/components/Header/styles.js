import styled from "styled-components";

import { Link } from "react-router-dom";


export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.GRAY_300};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 80px;

    background-color: ${({theme}) => theme.COLORS. BACKGROUND_800};

`;

export const Brand = styled.div`

    margin-right: 80px;
    font-size: 24px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.PINK};
`;




export const Profile = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    margin-left: 80px;


    strong{   
        
        
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.WHITE};

    }

    span{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }


    >div{
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;
    }


    >img{
        width: 56px;
        height: 56px;

        border: 1px solid;
        border-color: ${({theme}) => theme.COLORS.GRAY_300};
        border-radius: 50%;
    }


`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6.4rem;
  flex-grow: 1;
`