import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`เข้าสู่ระบบด้วย: ${formData.email}`);
    };

    return (
        <div className='login-page'>
            <div className='login-container'>
                <h2>เข้าสู่ระบบ</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>อีเมล์</label>
                        <input 
                         type='email'
                         name='email'
                         value={formData.email}                        
                         onChange={handleChange}
                         placeholder='your@email.com'
                         required
                        />
                    </div>
                    <div className='form-group'>
                        <label>รหัสผ่าน</label>
                        <input 
                         type='password'
                         name='password'
                         value={formData.password}
                         onChange={handleChange}
                         placeholder='********'
                         required
                        />
                    </div>
                    <button type='submit' className='submit-btn'>
                        เข้าสู่ระบบ
                    </button>
                </form>
                <p className='back-link'>
                    <Link to="/"> ← กลับหน้าแรก</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
