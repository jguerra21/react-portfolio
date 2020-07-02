import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand navbar-light bg-light border-bottom p-0">
      <div className="container">
        <div className="row m-0 w-100 align-items-center">
          <div className="col-md-5 col-12 p-0">
            <span className="navbar-brand mb-0 h1 m-0">Jolie Guerra</span>
          </div>
          <div className="col-md-4 col-12 ml-auto p-0">
            <div
              className="collapse navbar-collapse justify-content-center "
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={
                      location.pathname === "/about"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/portfolio"
                    className={
                      location.pathname === "/portfolio"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className={
                      location.pathname === "/contact"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="https://drive.google.com/file/d/1obzMyWZVDkjQV4kP0sJoouKg79JQnkjZ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
