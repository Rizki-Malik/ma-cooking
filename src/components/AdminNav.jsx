import Chef from '../assets/img/chef-1.png'
import Brand from './Brand';

export default function AdminNav(){
    return(
        <>
            <div className="admin-navbar">
                <Brand 
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
                    <img src={Chef} alt="avatar-admin" />
                </div>
            </div>
        </>
    );
}