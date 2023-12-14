// src/Signup.js
import React, { useState } from 'react';
import './Signup.css';
import {auth} from "../../config"
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useNavigate } from 'react-router';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSignup = async () => {
    // Add your signup logic here
    console.log('Signing up with:', { email, password });
    const user = await createUserWithEmailAndPassword(auth, email, password)
    user &&  navigate("/login")
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <label className="form-label">
          Email:
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="form-label">
          Password:
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="signup-button" type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

