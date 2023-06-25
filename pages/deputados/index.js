import React from 'react'
import Pagina from '@/components/Pagina';
import Link from 'next/link';
import { Row, Col, Card, Container } from 'react-bootstrap';
import apiDeputados from '@/services/apiDeputados';
import { useState } from 'react';


const index = ({deputados}) => {
  
  const [search, setSearch] = useState('')
  console.log(search)
  const handleSearchInputChange = (event) => {setSearch(event.target.value)};
  

  
  return (
    <Pagina titulo="Deputados">
      <Container>
      <input class="form-control mr-sm-2 m-5" value={search} onChange={handleSearchInputChange} placeholder="Pesquisar" aria-label="Pesquisar"></input>
      <Row md={6} className='py-5'>
         {deputados.map(item => (
           <Col key={item.id}>
            <Card className='mb-5'>
            <Link href={'/deputados/' + item.id}>
             <Card.Img key={item.id} src={item.urlFoto} title={item.nome + ' - '  + item.siglaPartido} width="100px" variant="top"/>
             <Card.Header>
                  <h5>{item.nome}</h5>
              </Card.Header> 
            </Link> 
            </Card> 
           </Col>
           ))}
      </Row>
      </Container>
    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {
  
  const resultado = await apiDeputados.get('/deputados')
  const deputados = resultado.data.dados
  
  return {
    props: {deputados}, 
  }
}
