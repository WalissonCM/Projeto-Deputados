import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagina = (props) => {
  return (
    <>
    <Cabecalho />
      <div className="bg-secondary py-5 text-white text-center mb-3">
        <Container>
           <h1>{props.titulo}</h1>
        </Container >
      </div>
      <Container className='pb-5 mb-5'>
      {props.children}
      </Container>
      <div style={{width: '100%'}} className=' bg-secondary bottom-0 position-fixed py-3 text-white text-center'>
        <p>Todos os direitos reservados</p>
      </div>
    </>
  )
}

export default Pagina