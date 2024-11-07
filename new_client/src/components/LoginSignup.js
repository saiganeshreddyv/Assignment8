import React, { useState } from 'react';
import './LoginSignup.css';  // Your CSS for the form

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);  // To toggle between Login and Signup forms

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic here (e.g., API call to login)
      console.log("Logging in...");
    } else {
      // Handle signup logic here (e.g., API call to sign up)
      console.log("Signing up...");
    }
  };

  return (
    <div className="formContainer">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="formGroup">
          <label>Email:</label>
          <input 
            type="email" 
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="formGroup">
          <label>Password:</label>
          <input 
            type="password" 
            placeholder="Enter your password"
            required
          />
        </div>

        {/* If signup, show confirm password */}
        {!isLogin && (
          <div className="formGroup">
            <label>Confirm Password:</label>
            <input 
              type="password" 
              placeholder="Confirm your password"
              required
            />
          </div>
        )}

        <button type="submit" className="submitButton">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <button 
        className="toggleButton" 
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default LoginSignup;
