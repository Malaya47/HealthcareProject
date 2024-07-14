import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-regular-svg-icons";
const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#003A70", color: "white" }}
    >
      <div className="container-fluid">
        <NavLink
          to={"/"}
          className="navbar-brand"
          href="#"
          style={{ color: "white" }}
        >
          <FontAwesomeIcon
            icon={faHospital}
            size="2xl"
            style={{ color: "#e3e3e3" }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "white" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/doctors"}
                className="nav-link"
                style={{ color: "white" }}
              >
                Doctors
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
