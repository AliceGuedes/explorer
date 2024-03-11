import { Container, Content,Form } from "./styles"

import { Link } from "react-router-dom"


import {Input} from "../../components/Input"
import {Header} from "../../components/Header"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"
import {MovieItem} from "../../components/MovieItem"
import {Section} from "../../components/Section"
import { TextArea } from "../../components/TextArea"



import { FiArrowLeft, FiX } from "react-icons/fi"


export function MovieCreate(){
    return(
    <Container>

        <Header />

        <main>
            <Content>
                <Link to = "/">
                    <ButtonText title="Voltar" icon={FiArrowLeft}/>
                </Link>

                <h1>Novo Filme</h1>

                <Form>
                    <div className="input">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>

                    </div>

                    <TextArea placeholder="Observações" />

                </Form>


                <Section title="Marcadores">
                    <div className="tags">
                        <MovieItem value="React" />
                        <MovieItem placeholder="Novo marcador" isNew />

                    </div>

                    
                </Section>
                <div className="button"> 
                    <button>Excluir filme</button>
                    
                    <Button title="Salvar alterações" />

                </div>


            </Content>
        </main>
        





      

    </Container>
    )
}