import { Container, Form, Background, Main } from "./styles"

import { Link } from "react-router-dom"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"
import { FiLock, FiMail, FiArrowLeft } from "react-icons/fi"


export function SingIn(){
    return(
    <Container>
        <Main>
            <Form>

                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>
                
                <p>Faça seu login</p>

                <Input placeholder = "E-mail" type = "text" icon={FiMail} />
                <Input placeholder = "Password" type = "password" icon={FiLock} />

                <Button title= "Entrar"/>
                

                </Form>
                <Link to= "/register">
                    <ButtonText title= "Criar conta" />

                </Link>

        </Main>

        <Background/>


    </Container>
    )
}