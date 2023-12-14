// src/Login.js
import React, { useContext, useState } from 'react';
import './Login.css';
import {auth} from '../../config'
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useNavigate } from "react-router-dom"
import { ApplicationContext } from '../../App';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const { setLoggedIn } = useContext(ApplicationContext)
  const handleLogin = async () => {
    // Add your login logic here
    const user = await signInWithEmailAndPassword(auth, username, password)
    if (user) {
      setLoggedIn(true)
       navigate("/")  
       }
    
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

