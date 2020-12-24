

export default function Contato() {
    return (
        <div className='flex sm:flex-row-reverse  flex-col'>  
            <div id='Contato'  className='sm:w-1/2 h-full'>
                <div className='py-10 flex flex-col pl-10'  style={{ backgroundColor: '#f9ad00', color: '#004d7b', height: '25rem' }}>
                    <div>
                        <p className='font-black'>Contato</p>
                        <div className='flex flex-row mt-5'>
                            <img width='20' className='mr-1' src='./tel-contato.svg'></img>
                            <p>84 3015-1669</p>
                        </div>
                        <div className='flex flex-row'>
                            <img width='20' className='mr-1' src='./zap-contato.svg'></img>
                            <p>84 98835-3003</p>
                        </div>


                    </div>
                    <div className='mt-3'>
                        <p className='font-black'>Onde estamos</p>
                        <p className='mt-5'>Rod BR 304 KM, 305 - Zona Rural de Macaíba/RN</p>
                        <p className='mt-5'>Fazenda Horizontes - 59280-000</p>
                    </div>
                </div>
            </div>
            <iframe id="Onde" className='sm:w-1/2' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31750.71941706241!2d-35.3499989!3d-5.8781093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b251160f060621%3A0xc054368d6ef98879!2sGELO%20CIDADE%20DO%20SOL!5e0!3m2!1spt-BR!2sbr!4v1608762025698!5m2!1spt-BR!2sbr" width="100%" height="400rem" ></iframe>

        </div>
    )
}