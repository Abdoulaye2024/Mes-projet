import React, { useState } from 'react';
import './sousNav.css';

const SousNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (searchVisible) {
      setSearchQuery('');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Recherche pour: ${searchQuery}`);
    setSearchQuery('');
    setSearchVisible(false);
  };

  // Données des menus
  const navItems = [
    { text: 'Accueil', dropdown: null },
    { 
      text: 'Produits', 
      dropdown: [
        { text: 'Nouveautés', link: '#' },
        { text: 'Populaires', link: '#' },
        { text: 'Promotions', link: '#' }
      ]
    },
    { 
      text: 'Catégories', 
      dropdown: [
        { text: 'Électronique', link: '#' },
        { text: 'Vêtements', link: '#' },
        { text: 'Maison', link: '#' },
        { text: 'Sport', link: '#' }
      ]
    },
    { 
      text: 'Marques', 
      dropdown: [
        { text: 'Apple', link: '#' },
        { text: 'Samsung', link: '#' },
        { text: 'Nike', link: '#' },
        { text: 'Adidas', link: '#' }
      ]
    },
    { text: 'À propos', dropdown: null },
    { 
      text: 'Services', 
      dropdown: [
        { text: 'Livraison', link: '#' },
        { text: 'Retours', link: '#' },
        { text: 'Garantie', link: '#' }
      ]
    },
    { 
      text: 'Support', 
      dropdown: [
        { text: 'FAQ', link: '#' },
        { text: 'Contact', link: '#' },
        { text: 'Assistance', link: '#' }
      ]
    },
    { text: 'Blog', dropdown: null }
  ];

  return (
    <nav className="sous-nav">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <a href="/">MonSite</a>
        </div>

        {/* Menu principal */}
        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className="nav-item"
              onMouseEnter={() => toggleDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#" className="nav-link">
                {item.text}
                {item.dropdown && <span className="dropdown-arrow">▼</span>}
              </a>
              
              {item.dropdown && activeDropdown === index && (
                <ul className="dropdown-menu">
                  {item.dropdown.map((dropdownItem, dIndex) => (
                    <li key={dIndex}>
                      <a href={dropdownItem.link}>{dropdownItem.text}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Actions (recherche et panier) */}
        <div className="nav-actions">
          {/* Barre de recherche */}
          <div className={`search-container ${searchVisible ? 'active' : ''}`}>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-submit">
                <span className="icon-search">🔍</span>
              </button>
            </form>
          </div>

          {/* Bouton recherche (mobile) */}
          <button 
            className="search-toggle"
            onClick={toggleSearch}
            aria-label="Rechercher"
          >
            <span className="icon-search">🔍</span>
          </button>

          {/* Panier */}
          <div className="cart-container">
            <a href="#" className="cart-link">
              <span className="icon-cart">🛒</span>
              <span className="cart-count">0</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SousNav;