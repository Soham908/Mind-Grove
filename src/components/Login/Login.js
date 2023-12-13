// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import {auth} from '../../config'
import { signInWithEmailAndPassword } from '@firebase/auth';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Add your login logic here
    console.log('Logging in with:', { username, password });
    const user = await signInWithEmailAndPassword(auth, username, password)
    console.log(user)
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

