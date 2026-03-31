import { Link } from "react-router-dom";
import { FaArchive } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      
      {/* LOGO */}
      <Link className="navbar-brand" to="/">
        <FaArchive /> ArchivPro Dakar
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
            <Link className="nav-link" to="/faq">FAQ</Link>
          </li>

          <li className="nav-item">
            <Link className="btn btn-warning ms-2" to="/contact">
              Devis
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;