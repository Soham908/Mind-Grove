import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApplicationContext } from '../App';

const AuthButtons = () => {
  const { loggedIn } = useContext(ApplicationContext);

  if (loggedIn) {
    // User is logged in, render logout button
    return (
      <button type="button" className="logout-button">
        Logout
      </button>
    );
  } else {
    // User is not logged in, render login and signup buttons
    return (
      <div>
        <button type="button" className="but">
          <Link to="/login">Login</Link>
        </button>
        <button type="button" className="but2">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    );
  }
};

export default AuthButtons;
