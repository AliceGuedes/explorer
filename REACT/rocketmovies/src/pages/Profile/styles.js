import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    
    

`;

export const Header = styled.div`

    height: 140px;
       

    background-color: rgba(255, 133, 155, 0.05);


    padding: 64px 144px;
        


`;



export const Form = styled.form`

   max-width: 340px;

   margin: 30px auto 0;

`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;
    
    width: 180px;
    height: 180px;

    >img{
        width: 180px;
        height: 180px;
        border-radius: 50%;

    }

    >label{
        width: 48px;
        height: 48px;

        background-color: ${({theme}) => theme.COLORS.PINK};

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input{
            display: none;
        }

        svg{
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }

    }

`;

