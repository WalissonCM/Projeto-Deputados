import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import React from 'react'
import { Col, Row, Card, Table } from 'react-bootstrap'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip,Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2'


const Detalhes = ({ deputados, despesas }) => {
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
        
      },
    },
  };
  
const labels =  ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho','Agosto','Setembro', 'Outubro', 'Novembro', 'Dezembro']
 
  const data = {
    labels,
    datasets: [
      {
        label: 'Valor',
        data: despesas.map(item => item.valorDocumento),
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  }
  

  return (


    <Pagina titulo="Deputados">

      <Row>
        <Col md={3} className='mx-5 py-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img src={deputados.ultimoStatus.urlFoto} width="100px" variant="top" />
            <Card.Body>
              <Card.Title>{deputados.nomeCivil}</Card.Title>
              <Card.Text>
                <div>Partido: {deputados.ultimoStatus.siglaPartido}</div>
                <div className='mt-2'>UF: {deputados.ultimoStatus.siglaUf}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <h2 className='text-center mt-5'>Despesas</h2>
          
          <Bar data={data} options={options} />
          
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
                  <td>{item.ano}</td>
                  <td>{item.valorDocumento}</td>
                </tr>
                  ))}
            </tbody>
          </Table>
           

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

  return {
    props: { deputados, despesas }
  }
}    