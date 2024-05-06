import Logo from '../assets/img/logo.png'


export default function Brand(){
    return(
        <>
            <div className="brand">
                <img src={Logo} alt="Logo" />
                <p>MA COOKING</p>
            </div>
        </>
    )
}