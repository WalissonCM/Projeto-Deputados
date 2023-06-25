import Pagina from '@/components/Pagina';

const index = () => {
    
    const myStyle={
        backgroundImage: "url('https://blog-static.infra.grancursosonline.com.br/wp-content/uploads/2014/02/03144224/C%C3%A2mara_dos_deputados_edital_retificado.jpg')",
        height:'120vh',
        marginTop:'-100px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };    
    return (
       <>
       <Pagina></Pagina>
       <div style={myStyle}></div>
       </>
    )
}

export default index