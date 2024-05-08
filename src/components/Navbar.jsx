import Brand from './Brand';
import Logo from '../assets/img/logo.png'

export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <Brand 
                    textStyle={{ fontWeight: 'bold' }}
                    Logo={Logo}
                />
                <div className="navbar-menu">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/courses">Courses</a>
                    <a href="/shop">Shop</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </>
    );
}