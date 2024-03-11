import styled from "styled-components";

import backgroundImg from "../../assets/Img.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    

`;

export const Main = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 0 160px;
        

`;

export const Form = styled.form`

    margin-bottom: 42px;
    

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > span {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    }

    > p {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin: 48px 0;
    
    
    }

    > a {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 1.6rem;
        margin-top: 12.4rem;
    }

   

`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.9;
    filter: brightness(90%);
`;