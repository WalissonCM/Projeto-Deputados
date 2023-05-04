import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import React from 'react'
import { Col, Row, Card, Button, Table } from 'react-bootstrap'

const Detalhes = ({ deputados, despesas, profissoes }) => {
  return (
    <Pagina titulo="Deputados">

      <Row>
        <Col md={3}>
          <Card style={{ width: '18rem' }}>
            <Card.Img src={deputados.ultimoStatus.urlFoto} width="100px" variant="top" />
            <Card.Body>
              <Card.Title>{deputados.nomeCivil}</Card.Title>
              <Card.Text>
                <p>Partido: {deputados.ultimoStatus.siglaPartido}</p>
                <p>UF: {deputados.ultimoStatus.siglaUf}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Button href="/deputados" variant="dark">voltar</Button>
        </Col>

        <Col md={6}>
          <h2>Despesas</h2>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {despesas.map(item => (
                <tr>
                  <td>{item.dataDocumento}</td>
                  <td>{item.tipoDespesa}</td>
                  <td>{item.valorDocumento}</td>
                </tr>
                  ))}
            </tbody>
          </Table>
        </Col>

        <Col md={3}>
          <h2>Profissões</h2>
          <ul>
            {profissoes.map(item => (
              <li>{item.titulo}</li>
            ))}
          </ul>
        </Col>

      </Row>

    </Pagina>
  )
}

export default Detalhes

export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiDeputados.get('/deputados/' + id)
  const deputados = resultado.data.dados

  const resDespesas = await apiDeputados.get('/deputados/' + id + '/despesas')
  const despesas = resDespesas.data.dados

  const resProfissoes = await apiDeputados.get('/deputados/' + id + '/profissoes')
  const profissoes = resProfissoes.data.dados

  return {
    props: { deputados, despesas, profissoes }
  }
}    