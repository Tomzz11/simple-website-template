import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    MyShop
                </Link>
                <ul className="navbar-menu">
                    <li><Link to="/">หน้าแรก</Link></li>
                    <li><Link to="/">สินค้า</Link></li>
                    <li><Link to="/">เกี่ยวกับเรา</Link></li>
                    <li><Link to="/">ติดต่อ</Link></li>
                </ul>
                <button 
                    className="login-btn"
                    onClick={() => navigate('/login')}
                >
                    เข้าสู่ระบบ
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
