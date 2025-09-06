import React from 'react';
import './ProductsPage.css';

export default function MoteursPage() {
  return (
    <div className="products-page">
      <div className="products-hero">
        <h1>Moteurs Électriques</h1>
        <p>Des moteurs haute performance pour toutes vos applications industrielles</p>
      </div>
      
      {/* Section de statistiques pour moteurs électriques */}
      <div className="product-stats-section">
        <h2>Caractéristiques Techniques des Moteurs</h2>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <h3>Plage de Puissance</h3>
            <div className="stat-value">0.75-500 kW</div>
            <p>Puissance nominale disponible</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔄</div>
            <h3>Vitesses</h3>
            <div className="stat-value">750-3000 tr/min</div>
            <p>Plage de vitesses disponibles</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔌</div>
            <h3>Tension</h3>
            <div className="stat-value">230/400V</div>
            <p>Tension d'alimentation standard</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <h3>Rendement</h3>
            <div className="stat-value">IE3-IE5</div>
            <p>Classes de rendement énergétique</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🛡️</div>
            <h3>Protection</h3>
            <div className="stat-value">IP55-IP68</div>
            <p>Degré de protection contre les intrusions</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🌡️</div>
            <h3>Isolation</h3>
            <div className="stat-value">Classe F-H</div>
            <p>Classes d'isolation thermique</p>
          </div>
        </div>
      </div>
      
      <div className="products-container">
        <div className="products-grid">
          {/* Produit 1 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel40.jpg" alt="Moteur asynchrone triphasé" />
            </div>
            <div className="product-content">
              <h3>Moteur Asynchrone Triphasé</h3>
              <p>Moteur robuste pour applications industrielles lourdes</p>
              <div className="product-specs">
                <span>15 kW</span>
                <span>1500 tr/min</span>
                <span>IP55</span>
              </div>
              <div className="product-price">1 250 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 2 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel41.jpg" alt="Moteur à haut rendement" />
            </div>
            <div className="product-content">
              <h3>Moteur IE3 Haut Rendement</h3>
              <p>Moteur premium pour économies d'énergie importantes</p>
              <div className="product-specs">
                <span>22 kW</span>
                <span>3000 tr/min</span>
                <span>IE3</span>
              </div>
              <div className="product-price">1 850 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 3 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel49.jpg" alt="Moteur frein" />
            </div>
            <div className="product-content">
              <h3>Moteur avec Frein</h3>
              <p>Moteur avec frein intégré pour applications de sécurité</p>
              <div className="product-specs">
                <span>7.5 kW</span>
                <span>1000 tr/min</span>
                <span>Frein DC</span>
              </div>
              <div className="product-price">980 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 4 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel43.jpg" alt="Moteur antidéflagrant" />
            </div>
            <div className="product-content">
              <h3>Moteur Antidéflagrant</h3>
              <p>Pour zones à risque d'explosion (ATEX)</p>
              <div className="product-specs">
                <span>11 kW</span>
                <span>1500 tr/min</span>
                <span>ATEX</span>
              </div>
              <div className="product-price">2 300 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 5 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel44.jpg" alt="Moteur à variation de vitesse" />
            </div>
            <div className="product-content">
              <h3>Moteur Variateur Intégré</h3>
              <p>Moteur avec variateur de vitesse intégré</p>
              <div className="product-specs">
                <span>5.5 kW</span>
                <span>VFD</span>
                <span>IP55</span>
              </div>
              <div className="product-price">1 650 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 6 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel45.jpg" alt="Moteur à anneau liquide" />
            </div>
            <div className="product-content">
              <h3>Moteur à Anneau Liquide</h3>
              <p>Pour applications à couple élevé au démarrage</p>
              <div className="product-specs">
                <span>18.5 kW</span>
                <span>750 tr/min</span>
                <span>Couple élevé</span>
              </div>
              <div className="product-price">1 420 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 7 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel46.jpg" alt="Moteur submersible" />
            </div>
            <div className="product-content">
              <h3>Moteur Submersible</h3>
              <p>Pour pompes et applications immergées</p>
              <div className="product-specs">
                <span>30 kW</span>
                <span>2900 tr/min</span>
                <span>IP68</span>
              </div>
              <div className="product-price">2 800 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 8 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel47.jpg" alt="Moteur à aimants permanents" />
            </div>
            <div className="product-content">
              <h3>Moteur à Aimants Permanents</h3>
              <p>Haute efficacité pour applications précises</p>
              <div className="product-specs">
                <span>3 kW</span>
                <span>2000 tr/min</span>
                <span>IE5</span>
              </div>
              <div className="product-price">1 950 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

           {/* Produit 9 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel50.jpg" alt="Moteur à aimants permanents" />
            </div>
            <div className="product-content">
              <h3>Moteur à Aimants Permanents</h3>
              <p>Haute efficacité pour applications précises</p>
              <div className="product-specs">
                <span>3 kW</span>
                <span>2000 tr/min</span>
                <span>IE5</span>
              </div>
              <div className="product-price">1 950 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-company">
            <h3>PowerTech Solutions</h3>
            <p>Votre partenaire de confiance pour tous vos moteurs électriques et systèmes d'entraînement depuis 2005.</p>
            <div className="footer-contact">
              <p>📞 +225 07 08 09 10 11</p>
              <p>✉️ contact@powertech.ci</p>
              <p>🏠 Abidjan, Plateau, Rue du Commerce</p>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Produits</h4>
              <ul>
                <li><a href="#">Moteurs Électriques</a></li>
                <li><a href="#">Transformateurs</a></li>
                <li><a href="#">Variateurs de Vitesse</a></li>
                <li><a href="#">Automates Industriels</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Entreprise</h4>
              <ul>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Notre équipe</a></li>
                <li><a href="#">Carrières</a></li>
                <li><a href="#">Actualités</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Maintenance</a></li>
                <li><a href="#">Garantie</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2023 PowerTech Solutions. Tous droits réservés.</p>
            <div className="footer-social">
              <span><a href=""><i class="bi bi-facebook"></i></a></span>
                <span><a href=""><i class="bi bi-twitter-x"></i></a></span>
                <span><a href=""><i class="bi bi-instagram"></i></a></span>
                <span><a href=""><i class="bi bi-linkedin"></i></a></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}