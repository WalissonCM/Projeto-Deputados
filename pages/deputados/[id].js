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
  
let labels =  ['','Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho','Agosto','Setembro', 'Outubro', 'Novembro', 'Dezembro']

const grup = despesas.reduce((acc,item) => {
  if (acc[item.mes]) {
    acc[item.mes] += item.valorDocumento
  } else {
    acc[item.mes] = item.valorDocumento
  }
  return acc
}, {});

const dadosChar = [
  ['mes', 'valor'], 
  ...Object.entries(grup)
] 

  
let data = {
    labels,
    datasets: [
      {
        label: 'Valor de 2022',
        data: dadosChar,
        backgroundColor: 'rgb(53, 162, 235)',
        labels
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
                <span>Partido: {deputados.ultimoStatus.siglaPartido}</span>
                <span className='mt-2'>UF: {deputados.ultimoStatus.siglaUf}</span>
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
                <th>Mes</th>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {despesas.map(item => (
                <tr>
                  <td>{item.mes}</td>
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

  const resDespesas = await apiDeputados.get('/deputados/' + id + '/despesas?ano=2022&itens=100&ordem=ASC')
  const despesas = resDespesas.data.dados

  return {
    props: { deputados, despesas }
  }
}    