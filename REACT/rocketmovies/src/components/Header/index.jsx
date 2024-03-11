import { Container, Profile, Brand, Search } from "./styles";

import { Link } from "react-router-dom";

import {Input} from "../Input"



export function Header(){
    return(
        <Container>
            <Brand>
                <div>RocketMovies</div>
            </Brand>

            <Search>
                <Input placeholder = "Pesquisar pelo título"/>
            </Search>                                          
                      
            <Link to = "/profile">
                <Profile>                              

                    <img src="https://github.com/aliceguedes.png" alt="imagem de usuário" />

                    <div>
                        <strong>Alice Guedes</strong>
                        <span> Sair </span>
                    </div>
                </Profile>
            
            </Link>

        </Container>
    );
}