import MyNavbar from "./nav";


export default function Header(){
    return(
        <div className='text-center' id='Header'   style={{backgroundColor: '#253891'}}>
            <MyNavbar></MyNavbar>
            <div className='sm:block hidden'>
            <img
                className='mx-auto'
                src='./banner.svg'
                width={1280}
                height={720}
                >
            </img>
            </div>
            <div className='block sm:hidden'>
            <img
                src='./banner-mobile.svg'
                width={1080}
                height={1380}
                >
            </img>
            </div>
        </div>
    )
}