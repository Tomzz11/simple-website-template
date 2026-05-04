import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-section'>
                    <h4>MyShop</h4>
                    <p>ร้านค้าออนไลน์ที่คุณวางใจ</p>
                </div>
                <div className='footer-section'>
                    <h4>ลิ้งค์</h4>
                    <ul>
                        <li>หน้าแรก</li>
                        <li>สินค้าทั้งหมด</li>
                        <li>โปรโมชั่น</li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <h4>ติดต่อเรา</h4>
                    <p>อีเมล์: </p>
                    <p>โทร: </p>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>© 2026 MyShop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
