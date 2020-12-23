

export default function Sobre() {
    return (
        <div id='Somos' className="mx-10 sm:w-1/2 sm:mx-auto">
            <div className='text-center text-3xl font-black flex flex-col sm:flex-row ' style={{ color: '#004d7b' }}>
                <div className='pt-5'>
                    <img className='mx-auto w-20 mt-5 mb-3' id='foto-sobre' src='./sobre-capacidade.svg'></img>
                    <h1>Alta capacidade de produção</h1>
                </div>
                <div className='pt-5'>
                    <img className='mx-auto w-15  mt-5 mb-3' id='foto-sobre' src='./sobre-robo.svg'></img>
                    <h1>Fabricação 100% automatizada</h1>
                </div>
            </div>

            <div className='text-sm text-left sm:text-center pt-5 mx-2 sm:mt-10'>
                <p>Com atuação em quase todo o Nordeste, mais que produzir gelo, nosso maior objetivo é fornecer produtos com qualidade, através de um modelo de logística eficiente e um atendimento responsável.</p>
                <p className='pt-5'>A Gelo Cidade do Sol atua como distribuidora de gelo no Rio Grande do norte desde 1970 e, ao longo desses 30 anos fez parte de diversos momentos que marcaram a vida dos potiguares: Reuniões de fim de semana com a família, formaturas, réveillons, casamentos... Ocasiões especiais ao lado de quem se ama, tornando-se assim, mais que uma distribuidora, a líder do mercado no estado, a melhor da região. </p>
            </div>
        </div>
    )
}