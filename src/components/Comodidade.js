

export default function Comodidade() {
    return (
        <div id="Produtos" >
            <div className='flex flex-col w-50 text-center'>
                <div className='flex flex-col justify-center ml-3'>
                    <h2 style={{ color: "#ec6907" }} className='mt-10 mb-5 sm:mb-0 text-4xl  font-bold  sm:ml-0 sm:text-4xl  lg:text-6xl sm:w-full sm:text-center sm:ml-0 w-1/2 text-left ml-7'>Nossos Produtos</h2>
                    <p className='pl-8 pr-24 text-left sm:text-center sm:pr-0 sm:pl-0 sm:mb-5 sm:text-4xl' style={{ color: '#165a84' }}>De que tipo de gelo você precisa?</p>
                </div>

                <div className=' my-5 flex flex-row flex-wrap justify-center sm:mb-20' id='Peca'>
                    <div className='flex flex-col justify-center mx-2 ' id='produto-laranja'>
                        <div className='w-52 h-52 mb-16 '>
                            <h3 className='text-3xl mt-5 mx-2 font-bold text-white text-left'>Gelo em cubo</h3>
                            <div className='flex flex-col h-full  text-left mt-4 mx-3 text-white'>
                                <p className='text-base'>De água potável, filtrado e higienizado para consumo humano.
                                </p>
                                <p className='mt-4 text-xl font-bold'>Pacote 3kg</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2 sm:mt-0 flex flex-col justify-center mx-2 ' id='produto-amarelo' >
                        <div className='w-52 h-52  mb-10 mt-5 '>
                            <h3 className='text-3xl mx-2 font-bold text-white text-left'>Gelo em escama</h3>
                            <div className='flex flex-col h-full  text-left mt-4 mx-3 text-white'>
                                <p className='text-base'>
                                Indicado para gelar e
                                conservar externamente.

                                </p>
                                <p className='mt-10 text-xl font-bold'>Pacote 10kg</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 sm:mt-0 flex flex-col justify-center mx-2 ' id='produto-azul'>
                        <div className='w-52 h-52  mb-10 mt-5'>
                            <h3 className='text-3xl mx-2 font-bold text-white text-left'>Gelo p/ festas</h3>
                            <div className='flex flex-col h-full  text-left mt-4 mx-3 text-white'>
                                <p className='text-sm'>Indicado para
                                conservação de
                                produtos diversos, é
                                ideal para utilizar em
                                festas e eventos de
                                grande porte.
                                </p>
                                <p className='mt-4 text-xl font-bold'>Pacote 30kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}