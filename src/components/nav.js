import { useState } from "react";
import { Link } from "react-scroll";



export default function MyNavbar({ fixed }) {
  const [teste, setTeste] = useState(<div></div>)

  function openNav(event) {
    event.preventDefault()
    setTeste(
      <div id='floatSide' style={{backgroundColor: '#ec6907'}} className='h-screen w-3/4 '>
        <div className='flex flex-row justify-end'>
          <button  onClick={closeNav} className='text-white pr-5 pt-5'>x</button>
        </div>
        <div className='flex text-left flex-col ml-5'>
          <Link to={'Somos'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>QUEM SOMOS</p></Link>
          <Link to={'Produtos'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>PRODUTOS</p></Link>
          <Link to={'Contato'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>CONTATO</p></Link>
          <Link to={'Onde'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>ONDE ESTAMOS</p></Link>

        </div>
      </div>
    )
  }

  function closeNav() {
    setTeste(
      <div></div>
    )
  }
  return (
    <div style={{backgroundColor: 'transparent'}}>
      {teste}
      <div className='md:pt-10 pt-10 mx-10 flex flex-row md:justify-center justify-between'>

        <div className='hidden md:flex flex-row my-auto'>
         <img className=' w-20 lg:mr-20' style={{minWidth: '200px'}} src='./logo-banner.svg'></img>
           <Link href='/' to={'Somos'} style={{color: 'white'}} smooth={true} className='text-white font-bold text-sm mx-5 my-auto'><p>QUEM SOMOS</p></Link>
           <Link href='/' to={'Produtos'} style={{color: 'white'}} smooth={true} className='text-white text-sm font-bold mx-5 my-auto'><p>PRODUTOS</p></Link>
           <Link href='/' to={'Contato'} style={{color: 'white'}} smooth={true} className='text-white text-sm font-bold mx-5 my-auto'><p>CONTATO</p></Link>
           <Link href='/' to={'Onde'} style={{color: 'white'}} smooth={true} className='text-white text-sm font-bold mx-5 my-auto'><p>ONDE ESTAMOS</p></Link>

        </div>
        <img className='md:hidden w-2/4 lg:mr-20' style={{minWidth: '10px'}} src='./logo-banner.svg'></img>

        <a className='flex md:hidden' style={{width: '30px'}} onClick={openNav}><img src='./hamburguer.svg'></img></a>
      </div>
    </div>
  );
}