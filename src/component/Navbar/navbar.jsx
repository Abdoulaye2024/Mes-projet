import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [itemCount, setItemCount] = useState(3); // Nombre d'articles initial
    const [isAnimating, setIsAnimating] = useState(false);

    // Fonction pour simuler l'ajout d'un article au panier
    const addToCart = () => {
        setItemCount(prev => prev + 1);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div className="navbar-container">
            {/* Navbar Principale */}
            <nav className="custom-navbar">
                <div className="nav-container">
                    <Link className="navbar-brand" to="/">
                        <img 
                            src="src/assets/images/logo2DI.jpg" 
                            alt="Logo 2DK" 
                            className="navbar-logo" 
                        />
                    </Link>
                    
                    <div className="navbar-links">
                        <Link className="nav-link" to="/">Accueil</Link>
                        <Link className="nav-link" to="/services">Services</Link>
                        <Link className="nav-link" to="/actualite">Actualité</Link>
                        <Link className="nav-link" to="/apropos">À propos</Link>
                    </div>
                    
                    <div className="navbar-actions">
                        <Link to="/details" className="btn-login">
                            En Savoir plus
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Sous-navbar */}
            <nav className="sub-navbar">
                <div className="sub-nav-container">
                    <div className="sub-nav-links">
                        <Link to="/moteurs" className="sub-nav-link">Moteurs </Link>
                        <Link to="/transformateurs" className="sub-nav-link">Transformateurs</Link>
                        <Link to="/variateurs" className="sub-nav-link">Variateurs de Vitesse</Link>
                        <Link to="/automates" className="sub-nav-link">Automates Industriels</Link>
                        <Link to="/composants" className="sub-nav-link">Composants Électriques</Link>
                        <Link to="/equipements" className="sub-nav-link">Équipements </Link>
                    </div>

                    <div className="cart-container position-relative">
                        <Link to="/panier" className="cart-link text-decoration-none">
                            <button className="btn btn-outline-orange position-relative p-2">
                                {/* Icône Bootstrap */}
                                <i className={`bi bi-cart3 fs-4 ${isAnimating ? 'cart-icon-animate' : ''}`}></i>
                                
                                {/* Badge avec compteur */}
                                {itemCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {itemCount}
                                        <span className="visually-hidden">articles dans le panier</span>
                                    </span>
                                )}
                                
                                {/* Texte (optionnel - peut être caché sur mobile) */}
                                <span className="cart-text ms-2 d-none d-md-inline">Panier</span>
                            </button>
                        </Link>
                        
                        {/* Bouton de test pour l'animation (à retirer en production) */}
                        <button 
                            onClick={addToCart}
                            className="btn btn-sm btn-outline-secondary ms-2"
                            aria-label="Ajouter un article au panier"
                        >
                            <i className="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}