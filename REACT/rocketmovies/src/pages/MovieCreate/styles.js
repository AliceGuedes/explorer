import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
        'header'
        'content';

    > main {

        
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    }
    
`;

export const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    >h1{
        margin-top: 24px;
        margin-bottom: 40px;
    }

    .tags{

        padding: 16px;

        border: none;
        border-radius: 10px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        display: flex;
        flex-direction: row;
        gap: 16px;
    }

    .button{
        display: flex;
        flex-direction: row;
        gap: 40px;

        button:first-child{
            width: 100%;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
             color: ${({theme}) => theme.COLORS.PINK};
    
            height: 56px;
            border: 0;
            padding: 0 16px;
            margin-top: 16px;
            border-radius: 10px;
            font-weight: 500;

            &:disabled{
                opacity: 0.5;
            }
    }

    }
    
    
`;

export const Form = styled.div`
    
    display: flex;
    flex-direction: column;
    
    .input{
        display: flex;
        gap: 40px
    }
`;