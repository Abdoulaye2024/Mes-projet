import React from 'react';
import './ProductsPage.css';

export default function AutomatesPage() {
  return (
    <div className="products-page">
      <div className="products-hero">
        <h1>Automates Industriels</h1>
        <p>Systèmes d'automatisation et contrôle industriel</p>
      </div>
      
      {/* Section de statistiques pour automates industriels */}
      <div className="product-stats-section">
        <h2>Caractéristiques Techniques des Automates</h2>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <h3>Vitesse Processeur</h3>
            <div className="stat-value">0.1 ms</div>
            <p>Temps d'exécution des instructions</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔌</div>
            <h3>Entrées/Sorties</h3>
            <div className="stat-value">Jusqu'à 2048</div>
            <p>Nombre maximum d'E/S configurables</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">💾</div>
            <h3>Mémoire Programme</h3>
            <div className="stat-value">2-16 MB</div>
            <p>Capacité de stockage des programmes</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🌡️</div>
            <h3>Température</h3>
            <div className="stat-value">0°C à +60°C</div>
            <p>Plage de température d'opération</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🛡️</div>
            <h3>Protection</h3>
            <div className="stat-value">IP20-IP67</div>
            <p>Degré de protection contre les intrusions</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📡</div>
            <h3>Communication</h3>
            <div className="stat-value">Ethernet/Profinet</div>
            <p>Protocoles de communication industrielle</p>
          </div>
        </div>
      </div>
      
      <div className="products-container">
        <div className="products-grid">
          {/* Produit 1 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel49.jpg" alt="Automate programmable" />
            </div>
            <div className="product-content">
              <h3>Automate Programmable (PLC)</h3>
              <p>Contrôleur logique programmable compact</p>
              <div className="product-specs">
                <span>24 E/S</span>
                <span>Ethernet</span>
                <span>IP20</span>
              </div>
              <div className="product-price">1 100 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 2 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel47.jpg" alt="Automate modulaire" />
            </div>
            <div className="product-content">
              <h3>Automate Modulaire</h3>
              <p>Système PLC modulaire haute performance</p>
              <div className="product-specs">
                <span>512 E/S</span>
                <span>Profinet</span>
                <span>IP20</span>
              </div>
              <div className="product-price">2 850 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 3 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel46.jpg" alt="Interface Homme-Machine" />
            </div>
            <div className="product-content">
              <h3>Interface Homme-Machine (IHM)</h3>
              <p>Écran tactile 7" pour supervision industrielle</p>
              <div className="product-specs">
                <span>7" Tactile</span>
                <span>Résistif</span>
                <span>IP65</span>
              </div>
              <div className="product-price">750 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 4 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel45.jpg" alt="Module d'E/S déportées" />
            </div>
            <div className="product-content">
              <h3>Module E/S Déportées</h3>
              <p>Module d'entrées/sorties Ethernet IP 16 points</p>
              <div className="product-specs">
                <span>16 E/S</span>
                <span>Ethernet IP</span>
                <span>IP67</span>
              </div>
              <div className="product-price">420 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 5 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel44.jpg" alt="Contrôleur motion" />
            </div>
            <div className="product-content">
              <h3>Contrôleur Motion</h3>
              <p>Contrôleur pour axes servo et pas à pas</p>
              <div className="product-specs">
                <span>4 axes</span>
                <span>EtherCAT</span>
                <span>IP20</span>
              </div>
              <div className="product-price">1 950 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 6 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel43.jpg" alt="Automate sécuritaire" />
            </div>
            <div className="product-content">
              <h3>Automate Sécuritaire</h3>
              <p>PLC sécurité SIL3 pour applications critiques</p>
              <div className="product-specs">
                <span>SIL3</span>
                <span>24 E/S</span>
                <span>Safe</span>
              </div>
              <div className="product-price">1 800 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 7 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel42.jpg" alt="Module communication" />
            </div>
            <div className="product-content">
              <h3>Module Communication</h3>
              <p>Module Profibus/Profinet pour automation</p>
              <div className="product-specs">
                <span>Profinet</span>
                <span>Profibus</span>
                <span>Master</span>
              </div>
              <div className="product-price">680 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 8 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel50.jpg" alt="Automate robuste" />
            </div>
            <div className="product-content">
              <h3>Automate Environnement Sévère</h3>
              <p>PLC robuste pour environnements extrêmes</p>
              <div className="product-specs">
                <span>IP67</span>
                <span>-40°C/+85°C</span>
                <span>24 E/S</span>
              </div>
              <div className="product-price">2 300 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 9 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel40.jpg" alt="Automate robuste" />
            </div>
            <div className="product-content">
              <h3>Automate Environnement Sévère</h3>
              <p>PLC robuste pour environnements extrêmes</p>
              <div className="product-specs">
                <span>IP67</span>
                <span>-40°C/+85°C</span>
                <span>24 E/S</span>
              </div>
              <div className="product-price">2 300 000 FCFA</div>
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
            <p>Votre partenaire de confiance pour tous vos systèmes d'automatisation industrielle depuis 2005.</p>
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
                <li><a href="#">Automates Industriels</a></li>
                <li><a href="#">Composants Électriques</a></li>
                <li><a href="#">Équipements Lourds</a></li>
                <li><a href="#">Services Maintenance</a></li>
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