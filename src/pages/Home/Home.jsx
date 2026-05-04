import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer'; 
import './Home.css';

const Home = () => {
    const products = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
            title: 'นาฬิกาอัจฉริยะ',
            price: '1,299', 
            description: 'นาฬิกาดิจิตอล multifunction กันน้ำ 100%'
        },
        {
        id: 2,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        title: 'หูฟังไร้สาย',
        price: '899',
        description: 'เสียงเบสหนัก แบตอึด ใช้งานได้ 20 ชั่วโมง'
        },
        {
        id: 3,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
        title: 'รองเท้ากีฬา',
        price: '2,490',
        description: 'ระบายอากาศดี น้ำหนักเบา วิ่งได้ทั้งวัน'
        },
        {
        id: 4,
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
        title: 'กล้องโพลารอยด์',
        price: '3,590',
        description: 'ถ่ายรูปสวยทันที ฟิลเตอร์ครบ ขนาดพกพา'
        }
    ];

    return (
        <div className="Home">
            <Navbar />
            <Banner />
        
            <section className="products-section">
                <h2>สินค้ายอดนิยม</h2>
                <div className="products-grid">
                    {products.map(product => (
                        <ProductCard 
                         key={product.id}
                         image={product.image}
                         title={product.title}
                         price={product.price}
                         description={product.description}
                        />
                    ))}                   
                </div>
            </section>
        
            <Footer />
        </div>
    );
};

export default Home;