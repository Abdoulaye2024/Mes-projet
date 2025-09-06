import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Panier.css';

const Panier = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Transformateur de Puissance 25 kVA",
      price: 1800000,
      quantity: 1,
      image: "src/assets/paysage.jpg",
      category: "Transformateurs"
    },
    {
      id: 2,
      name: "Moteur Asynchrone Triphasé 15 kW",
      price: 1250000,
      quantity: 2,
      image: "src/assets/paysage.jpg",
      category: "Moteurs Électriques"
    },
    {
      id: 3,
      name: "Variateur de Fréquence AC 22 kW",
      price: 850000,
      quantity: 1,
      image: "src/assets/paysage.jpg",
      category: "Variateurs"
    }
  ]);

  // Calcul du total
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Fonctions de gestion du panier
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="panier-page">
      {/* En-tête */}
      <div className="panier-header">
        <h1>🛒 Votre Panier</h1>
        <p>Gérez vos produits sélectionnés</p>
      </div>

      <div className="panier-container">
        {/* Liste des articles */}
        <div className="panier-items">
          <div className="panier-actions">
            <span className="items-count">{cartItems.length} article(s)</span>
            <button onClick={clearCart} className="btn-clear">
              Vider le panier
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <h3>Votre panier est vide</h3>
              <p>Ajoutez des produits pour commencer vos achats</p>
              <Link to="/produits" className="btn-shopping">
                Découvrir nos produits
              </Link>
            </div>
          ) : (
            <div className="items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                    <span className="item-category">{item.category}</span>
                  </div>
                  
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-price">{item.price.toLocaleString()} FCFA</p>
                  </div>

                  <div className="quantity-controls">
                    <button 
                      onClick={() => decreaseQuantity(item.id)}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(item.id)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>

                  <div className="item-total">
                    <span className="total-price">
                      {(item.price * item.quantity).toLocaleString()} FCFA
                    </span>
                  </div>

                  <button 
                    onClick={() => removeItem(item.id)}
                    className="btn-remove"
                    aria-label="Supprimer"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Résumé de commande */}
        {cartItems.length > 0 && (
          <div className="order-summary">
            <h3>Résumé de la commande</h3>
            
            <div className="summary-details">
              <div className="summary-row">
                <span>Sous-total</span>
                <span>{total.toLocaleString()} FCFA</span>
              </div>
              
              <div className="summary-row">
                <span>Livraison</span>
                <span className="free-shipping">Gratuite</span>
              </div>
              
              <div className="summary-row">
                <span>Taxes</span>
                <span>Incluses</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span className="final-price">{total.toLocaleString()} FCFA</span>
              </div>
            </div>

            <div className="promo-code">
              <input 
                type="text" 
                placeholder="Code promo" 
                className="promo-input"
              />
              <button className="btn-apply">Appliquer</button>
            </div>

            <button className="btn-checkout">
              Procéder au paiement
            </button>

            <div className="security-info">
              <div className="security-item">
                <span className="security-icon">🔒</span>
                <span>Paiement sécurisé</span>
              </div>
              <div className="security-item">
                <span className="security-icon">🚚</span>
                <span>Livraison 48h</span>
              </div>
              <div className="security-item">
                <span className="security-icon">↩️</span>
                <span>Retours gratuits</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Produits suggérés */}
      {cartItems.length > 0 && (
        <div className="suggested-products">
          <h3>Produits fréquemment achetés ensemble</h3>
          <div className="suggested-grid">
            {/* Ajoutez ici des produits suggérés */}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="big-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>2DK Électromécanique</h3>
            <p>Votre partenaire de confiance pour les solutions électromécaniques industrielles depuis 2005.</p>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>Vente de matériel</li>
              <li>Développement des affaires</li>
              <li>Marketing industriel</li>
              <li>Relations internationales</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p>123 Rue de l'Industrie, Zone Industrielle</p>
            <p>Dakar, Sénégal</p>
            <p>contact@2dk-electromecanique.com</p>
            <p>+221 33 123 45 67</p>
          </div>

          <div className="footer-section">
            <h3>Réseaux Sociaux</h3>
            <div className="social-icons">
              <span><a href="#"><i className="bi bi-facebook"></i></a></span>
              <span><a href="#"><i className="bi bi-twitter-x"></i></a></span>
              <span><a href="#"><i className="bi bi-instagram"></i></a></span>
              <span><a href="#"><i className="bi bi-linkedin"></i></a></span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 2DK Électromécanique. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Panier;