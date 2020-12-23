import MyNavbar from "./nav";


export default function Header(){
    return(
        <div className='text-center'   style={{backgroundColor: '#253891'}}>
            <MyNavbar></MyNavbar>
            <div className='sm:block hidden'>
            <img
                className='mx-auto'
                src='./banner.png'
                width={1280}
                height={720}
                >
            </img>
            </div>
            <div className='block sm:hidden'>
            <img
                src='./header-background-mobile.svg'
                width={1080}
                height={1380}
                >
            </img>
            </div>
        </div>
    )
}