import { Container } from "./styles"

import { Tag } from "../Tag"

import { Rating } from "../Rating"

export function Movie({data, ...rest}){

  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      <Rating grade={data.grade}/>

      <p>{data.descrition}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => 
            <Tag key={tag.id} title={tag.name}/>
            )
          }
        </footer>
      }
    </Container>
  )
}