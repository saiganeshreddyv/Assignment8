import React, { useState } from 'react';
import './Signup.css';  // Your CSS file for signup page

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here (make API call)
  };

  return (
    <div className="signupContainer">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="formGroup">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="formGroup">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="formGroup">
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="signupButton">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
