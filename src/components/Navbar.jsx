import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      
      {/* LOGO */}
      <Link className="navbar-brand" to="/">
        <img src="/image/logo-archive.png" alt="ArchivPro Dakar Logo" className="navbar-logo" />
        {/* <img src="image/logo-archive.png" className="imgCard" alt="" /> */}
      </Link>

      {/* MOBILE BUTTON */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* MENU */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/">Accueil</Link>
          </li>

          {/* DROPDOWN */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>

            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/archivage">Archivage</Link></li>
              <li><Link className="dropdown-item" to="/numerisation">Numérisation</Link></li>
              <li><Link className="dropdown-item" to="/ged">GED</Link></li>
              <li><Link className="dropdown-item" to="/destruction">Destruction</Link></li>
              <li><Link className="dropdown-item" to="/audit">Audit</Link></li>
              <li><Link className="dropdown-item" to="/externalisation">Externalisation</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/pourquoi">Pourquoi</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/secteurs">Secteurs</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/processus">Méthode</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/realisation">Réalisations</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/faq">FAQ</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link btn btn-devis" to="/contact">
              Devis
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;