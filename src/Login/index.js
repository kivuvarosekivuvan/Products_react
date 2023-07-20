import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      email: email,
      password: password
    };

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      console.log(result);

      // Navigate to the desired page after successful login
      navigate('/products');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-container">
      <div className="right-side orange">
        <h2>Hello friend</h2> 

      </div>
      <div className="left-side">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Login Page</h1>
          <input
            placeholder="Enter email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;