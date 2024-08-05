
import React, { useState } from 'react';


function LoginForm() {
    const [FormData, setFormData] = useState({ email: '', password: '', });

    const handleChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(FormData)
        alert('Login successful!');
    }

    return (
     
        <form onSubmit={handleSubmit}>
               <h1>Login Form</h1>
            <input type="email" name="email" placeholder="Enter your email" value={FormData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Enter your password" value={FormData.password} onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    )
};

export default LoginForm;



