import "./Navbar.css";
import logo from "../../images/mind_grove_logo.jpg";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img className="logo" src={logo} alt="logo" />
        <a class="navbar-brand" href="/">
          Mind Grove
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/counsellor">
                Counsellor
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/journal">
                Journal
              </a>
            </li>
              <button type="button" class="but">
              <Link to="/login">
                Login 
                </Link>
              </button>
              <button type="button" class="but2">
              <Link to="/signup">
                Signup 
                </Link>
              </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};