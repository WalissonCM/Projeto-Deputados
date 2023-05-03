import React from 'react'
import Pagina from '@/components/Pagina';
import Link from 'next/link';
import { Row, Col, Card } from 'react-bootstrap';
import apiDeputados from '@/services/apiDeputados';


const index = ({deputados}) => {
  
  
  return (
    <Pagina titulo="Deputados">
      
      <Row md={6}>
         {deputados.map(item => (
           <Col key={item.id}>
            <Card className='mb-5'>
            <Link href={'/deputados/' + item.id}>
             <Card.Img  key={item.id} src={item.urlFoto} width="100px" variant="top"/> 
            </Link> 
            </Card> 
           </Col>
           ))}
      </Row>
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
