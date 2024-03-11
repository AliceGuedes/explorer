import { Container, Form, Header, Avatar} from "./styles"

import { Link } from "react-router-dom"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import { FiLock, FiMail, FiArrowLeft, FiUser, FiCamera } from "react-icons/fi"


export function Profile(){
    return(
    <Container>
        <Header>
            <Link to = "/">
                <ButtonText title= "Voltar" icon={FiArrowLeft}/> 
            
            </Link>
            
        </Header>


        <Form>
            <Avatar>
                <img src="https://github.com/aliceguedes.png" alt="Imagem do Usuário" />
                
                <label htmlFor="avatar">
                    <FiCamera/>

                    <input id="avatar" type="file" />

                </label>
                

            </Avatar>

            <Input placeholder = "Nome" type = "text" icon={FiUser} />
            <Input placeholder = "E-mail" type = "text" icon={FiMail} />
            <Input placeholder = "Senha atual" type = "password" icon={FiLock} />
            <Input placeholder = "Nova senha " type = "password" icon={FiLock} />


            <Button title= "Salvar"/>
                

        </Form>





    </Container>
    )
}