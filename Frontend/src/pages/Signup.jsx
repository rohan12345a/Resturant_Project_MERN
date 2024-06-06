import React, { useState } from 'react';
import axios from 'axios'; 
import './Signup.css'; 

const Signup = ({ onSignupSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false); // State to toggle login form visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('http://localhost:4000/api/v1/users/signup', {
        username,
        email,
        password
      });

      console.log(response.data); // Log response from backend
      window.alert(response.data);

      onSignupSuccess();
    } catch (error) {
      console.error('Signup Error:', error.response.data.message);
      window.alert(error.response.data.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <p>Don't have an account? <button className="btn btn-link" onClick={() => setShowLoginForm(true)}>Click here to Sign in</button></p>
      {showLoginForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-control"
            />
          </div>
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
          <button type="submit" className="btn btn-primary">Signup</button>
        </form>
      )}
    </div>
  );
};

export default Signup;

