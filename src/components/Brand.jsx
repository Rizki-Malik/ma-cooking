import Logo from '../assets/img/logo.png'


export default function Brand(props){
    return(
        <>
            <div className="brand">
                <img src={Logo} alt="Logo" />
                <p style={props.style}>MA COOKING</p>
            </div>
        </>
    )
}