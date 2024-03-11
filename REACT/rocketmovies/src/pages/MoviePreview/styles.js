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



    >div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;

        h1{
            font-weight: 500;
            font-size: 36px;
            margin-bottom: 24px;
            margin-top: 24px;

        }
    }

    .user-post{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: justify;
        flex-wrap: nowrap;


        margin-bottom: 40px;

        img{
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }

        svg{
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 16px;
        }
    }

     .tags{
        margin-bottom: 40px;

        display: flex;
        flex-direction: row;
        gap: 2px;
     }
  

  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: justify;

    margin-bottom: 20px;
  }

    
    
`;