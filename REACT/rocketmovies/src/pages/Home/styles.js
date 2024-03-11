import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';
`;

export const Content = styled.div`
  padding: 20px 90px ;
  

  .title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 40px;

    button{
      background-color: ${({theme}) => theme.COLORS.PINK};
      color: ${({theme}) => theme.COLORS.BACKGROUND_800};

      height: 48px;
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

