import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { BsTelegram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { TfiTwitterAlt } from 'react-icons/tfi'
import { FaTiktok } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="success">     
        <Navbar.Brand className='mx-5 me-3' href="/"><img src="https://logodownload.org/wp-content/uploads/2017/11/camara-dos-deputados-logo.png"  width="250" height="30" alt='logo'></img></Navbar.Brand>
          <Nav className=" mt-2 me">
            <Nav.Link href="/deputados"><h5 className='text-white'>Deputados</h5></Nav.Link>
          </Nav>
          <Nav className="px-5 mx-auto me-5">
            <Nav.Link href="https://t.me/CamaradosDeputados"><BsTelegram color='white' size={30} ></BsTelegram></Nav.Link>
            <Nav.Link href="https://www.facebook.com/camaradeputados"><BsFacebook color='white' size={30}></BsFacebook></Nav.Link>
            <Nav.Link href="https://twitter.com/camaradeputados"><TfiTwitterAlt color='white' size={30}></TfiTwitterAlt></Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@camaradosdeputados"><FaTiktok color='white' size={30}></FaTiktok></Nav.Link>
            <Nav.Link href="https://www.instagram.com/camaradeputados"><BsInstagram color='white' size={30}></BsInstagram></Nav.Link>
          </Nav>
      </Navbar>


    </>
  )
}

export default Cabecalho