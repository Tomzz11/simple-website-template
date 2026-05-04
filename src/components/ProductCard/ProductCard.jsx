import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, price, description }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={title}/>
            </div>
            <div className="product-info">
                <h3>{title}</h3>
                <p className="product-description">{description}</p>
                <div className="product-footer">
                    <span className="product-price">฿{price}</span>
                    <button className="add-to-cart">ใส่ตะกร้า</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

