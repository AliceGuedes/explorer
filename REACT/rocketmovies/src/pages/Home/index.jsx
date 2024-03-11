import { Container, Content } from "./styles"

import { Link } from "react-router-dom"

import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Movie } from "../../components/Movie"

export function Home(){
    return(
    <Container>
        
        <Header />

        <main>
            <Content>
                <div className="title">
                    <h1>Meus filmes</h1>

                    <Link to = "/moviecreate">
                        <button> <FiPlus/> Adicionar filme</button>                    
                    </Link>


                </div>

                <Movie data={{
                    title: 'Interestellar',
                    grade: '4',
                    descrition: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
                    tags: [
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'},
                    ]
                }}/>
                <Movie data={{
                    title: 'Interestellar',
                    grade: '4',
                    descrition: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
                    tags: [
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'},
                    ]
                }}/>
                <Movie data={{
                    title: 'Interestellar',
                    grade: '4',
                    descrition: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
                    tags: [
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'},
                    ]
                }}/>
                <Movie data={{
                    title: 'Interestellar',
                    grade: '4',
                    descrition: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
                    tags: [
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'},
                    ]
                }}/>
            </Content>

        </main>



    </Container>
    )
}