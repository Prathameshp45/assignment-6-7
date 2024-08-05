import React, { useState } from 'react';

function RegistrationForm() {
    const [user, setUser] = useState({ username: '', email: '', password: '' });



    const handleChange = (e) => {
        setUser(
            {...user, [e.target.name]: e.target.value }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        alert('registration succefully submitted');


    }

return(
    <form onSubmit={handleSubmit}>
        <h1>REGISTRATION FORM</h1>
        <input type="text" name="username" placeholder="Enter your username" value={user.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Enter your email" value={user.email} onChange={handleChange} />
<input type='password' name="password" placeholder="Enter your password" value={user.password} onChange={handleChange}/>
<button type="submit">register</button>
    </form>
)



}





export default RegistrationForm;
