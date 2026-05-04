import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1>ยินดีต้อนรับสู่ my shop</h1>
                <p>ค้นพบสินค้าคุณภาพดี</p>
                <button className="banner-btn">Shop เลย</button>
            </div>
        </section>
    );
};


export default Banner;
