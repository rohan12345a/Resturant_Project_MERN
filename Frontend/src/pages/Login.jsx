import React, { useState } from 'react';
import axios from 'axios'; 
import './Login.css'; 

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignupForm, setShowSignupForm] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('http://localhost:4000/api/v1/users/login', {
        email,
        password
      });

      console.log(response.data); // Log response from backend
      window.alert(response.data);

      // Calling  onLoginSuccess function if login is successful
      onLoginSuccess();
    } catch (error) {
      console.error('Login Error:', error.response.data.message);
      window.alert(error.response.data.message);

    }
  };

  return (
    
    <div className="login-container">
      <h2>Login</h2>
      <p>Have an account? <button className="btn btn-link" onClick={() => setShowSignupForm(true)}>Click here to Login</button></p>
      {showSignupForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      )}
    </div>
    
  );
};

export default Login;


