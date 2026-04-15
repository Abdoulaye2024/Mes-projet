import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            Archiv<span>Pro</span>
          </div>
          <p className="footer-tagline">
            Cabinet d'archivage professionnel à Dakar. La référence en gestion
            documentaire au Sénégal.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-col-links">
            <li>
              <Link to="/archivage">Archivage physique</Link>
            </li>
            <li>
              <Link to="/numerisation">Numérisation</Link>
            </li>
            <li>
              <Link to="/ged">GED</Link>
            </li>
            <li>
              <Link to="/destruction">Destruction sécurisée</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Informations</div>
          <ul className="footer-col-links">
            <li>
              <Link to="/pourquoi">À propos</Link>
            </li>
            <li>
              <Link to="/secteurs">Secteurs</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2024 ArchivPro Dakar — Tous droits réservés
        </div>
        <div className="footer-legal">
          <a href="#mentions">Mentions légales</a>
          <a href="#confidentialite">Confidentialité</a>
          <a href="#cgv">CGV</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
