import { Container, Form, Background, Main } from "./styles"

import { Link } from "react-router-dom"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"
import { FiLock, FiMail, FiArrowLeft, FiUser } from "react-icons/fi"


export function SingUp(){
    return(
    <Container>
        <Main>
            <Form>

                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>
                
                <p>Crie sua conta</p>

                <Input placeholder = "Nome" type = "text" icon={FiUser} />
                <Input placeholder = "E-mail" type = "text" icon={FiMail} />
                <Input placeholder = "Password" type = "password" icon={FiLock} />

                <Button title= "Cadastrar"/>
                

                </Form>

            <Link to='/'>
                <ButtonText title= "Voltar para o Login" icon={FiArrowLeft}/>
            
            </Link>

        </Main>

        <Background/>


    </Container>
    )
}