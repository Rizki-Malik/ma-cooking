import { useState } from 'react';
import Brand from './Brand';
import Logo from '../assets/img/logo.png';
import Chef from '../assets/img/chef-1.png';
import { logout } from "../utility/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        navigate('/logout')
    };

    return (
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
            <div className="admin-navbar-avatar">
                <label onClick={toggleDropdown} className="avatar-label">
                <img src={Chef} alt="avatar-admin" />
                </label>
                {dropdownOpen && (
                <div className="dropdown-menu">
                    <button onClick={handleLogout}>Logout</button>
                </div>
                )}
            </div>
        </div>
    );
}
