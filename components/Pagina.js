import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagina = (props) => {
  return (
    <>
    <Cabecalho />
      <div className="bg-success bg-opacity-75 py-2 text-white text-center ">
        <Container>
           <h1>{props.titulo}</h1>
        </Container >
      </div>
      {props.children}
    </>
  )
}

export default Pagina