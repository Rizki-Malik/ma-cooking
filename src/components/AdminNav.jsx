import Chef from '../assets/img/chef-1.png'
import Brand from './Brand';
import Logo from '../assets/img/admin-logo.png'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function AdminNav(){
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        navigate('/logout')
    };

    return(
        <>
            <div className="admin-navbar">
                <Brand 
                    Logo={Logo}
                    imgStyle={{ marginLeft: '50px' }}  
                    textStyle={{ fontWeight: 'bold' }} 
                />
                <div className="admin-navbar-menu">
                    <a href="/">DASHBOARD</a>
                    <a href="/about">TEAM</a>
                    <a href="/courses">PROJECTS</a>
                    <a href="/shop">CALENDER</a>
                    <a href="/contact">REPORTS</a>
                </div>
                <div className="admin-navbar-avatar">
                    <label onClick={toggleDropdown} className="avatar-label">
                    <img src={Chef} alt="avatar-admin" />
                    </label>
                    {dropdownOpen && (
                        <div className="dropdown-menu-admin">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}