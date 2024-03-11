import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 5px 14px;
    border-radius: 5px;
    margin-right: 6px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    flex-direction: row;
    align-items: center;

    >svg{
        background: none;
        color: ${({theme}) => theme.COLORS.PINK}; 

        margin-right: 8px;
        padding: 2px 0;

    }
`;