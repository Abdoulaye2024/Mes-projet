import React from 'react';
import './ProductsPage.css';

export default function VariateursPage() {
  return (
    <div className="products-page">
      <div className="products-hero">
        <h1>Variateurs de Vitesse</h1>
        <p>Contrôle précis de la vitesse des moteurs électriques</p>
      </div>
      
      {/* Section de statistiques pour variateurs de vitesse */}
      <div className="product-stats-section">
        <h2>Caractéristiques Techniques des Variateurs</h2>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <h3>Plage de Puissance</h3>
            <div className="stat-value">0.75-630 kW</div>
            <p>Puissance moteur couverte</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔌</div>
            <h3>Tension d'Alimentation</h3>
            <div className="stat-value">380-480V</div>
            <p>Tension réseau triphasée</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📶</div>
            <h3>Plage Fréquence</h3>
            <div className="stat-value">0-600 Hz</div>
            <p>Fréquence de sortie variable</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <h3>Précision</h3>
            <div className="stat-value">±0.5%</div>
            <p>Précision de régulation vitesse</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔄</div>
            <h3>Rendement</h3>
            <div className="stat-value">97.5%</div>
            <p>Rendement énergétique moyen</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🛡️</div>
            <h3>Protection</h3>
            <div className="stat-value">IP20-IP55</div>
            <p>Degré de protection selon modèle</p>
          </div>
        </div>
      </div>
      
      <div className="products-container">
        <div className="products-grid">
          {/* Produit 1 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel41.jpg" alt="Variateur de fréquence" />
            </div>
            <div className="product-content">
              <h3>Variateur de Fréquence AC</h3>
              <p>Contrôle vectoriel pour moteurs asynchrones</p>
              <div className="product-specs">
                <span>22 kW</span>
                <span>Modbus</span>
                <span>IP20</span>
              </div>
              <div className="product-price">850 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 2 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel49.jpg" alt="Variateur compact" />
            </div>
            <div className="product-content">
              <h3>Variateur Compact</h3>
              <p>Variateur monophasé pour petites applications</p>
              <div className="product-specs">
                <span>1.5 kW</span>
                <span>230V</span>
                <span>IP20</span>
              </div>
              <div className="product-price">320 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 3 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel40.jpg" alt="Variateur hautes performances" />
            </div>
            <div className="product-content">
              <h3>Variateur Hautes Performances</h3>
              <p>Pour applications critiques et dynamiques</p>
              <div className="product-specs">
                <span>45 kW</span>
                <span>EtherCAT</span>
                <span>IP20</span>
              </div>
              <div className="product-price">1 250 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 4 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel43.jpg" alt="Variateur industriel" />
            </div>
            <div className="product-content">
              <h3>Variateur Industriel</h3>
              <p>Variateur robuste pour environnements sévères</p>
              <div className="product-specs">
                <span>75 kW</span>
                <span>Profibus</span>
                <span>IP55</span>
              </div>
              <div className="product-price">1 800 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 5 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel44.jpg" alt="Variateur pour ascenseurs" />
            </div>
            <div className="product-content">
              <h3>Variateur pour Ascenseurs</h3>
              <p>Solution spéciale pour applications verticales</p>
              <div className="product-specs">
                <span>18.5 kW</span>
                <span>Contrôle torque</span>
                <span>IP21</span>
              </div>
              <div className="product-price">1 100 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 6 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel45.jpg" alt="Variateur pour pompes" />
            </div>
            <div className="product-content">
              <h3>Variateur pour Pompes</h3>
              <p>Optimisation énergétique pour systèmes hydrauliques</p>
              <div className="product-specs">
                <span>37 kW</span>
                <span>PID intégré</span>
                <span>IP20</span>
              </div>
              <div className="product-price">950 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 7 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel50.jpg" alt="Variateur pour convoyeurs" />
            </div>
            <div className="product-content">
              <h3>Variateur pour Convoyeurs</h3>
              <p>Contrôle de tension pour bandes transporteuses</p>
              <div className="product-specs">
                <span>11 kW</span>
                <span>Démarrage progressif</span>
                <span>IP54</span>
              </div>
              <div className="product-price">680 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 8 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel46.jpg" alt="Variateur servo" />
            </div>
            <div className="product-content">
              <h3>Variateur Servo</h3>
              <p>Haute précision pour applications positionnement</p>
              <div className="product-specs">
                <span>7.5 kW</span>
                <span>Ethernet IP</span>
                <span>IP20</span>
              </div>
              <div className="product-price">1 450 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 9 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel47.jpg" alt="Variateur servo" />
            </div>
            <div className="product-content">
              <h3>Variateur Servo</h3>
              <p>Haute précision pour applications positionnement</p>
              <div className="product-specs">
                <span>7.5 kW</span>
                <span>Ethernet IP</span>
                <span>IP20</span>
              </div>
              <div className="product-price">1 450 000 FCFA</div>
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
            <p>Votre partenaire de confiance pour tous vos systèmes d'entraînement et variateurs de vitesse depuis 2005.</p>
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
                <li><a href="#">Variateurs de Vitesse</a></li>
                <li><a href="#">Automates Industriels</a></li>
                <li><a href="#">Composants Électriques</a></li>
                <li><a href="#">Équipements Lourds</a></li>
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
                <li><a href="#">Formation</a></li>
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