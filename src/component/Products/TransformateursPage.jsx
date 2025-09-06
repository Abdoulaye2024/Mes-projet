import React from 'react';
import './ProductsPage.css';

export default function TransformateursPage() {
  return (
    <div className="products-page">
      <div className="products-hero">
        <h1>Transformateurs</h1>
        <p>Transformateurs de puissance et de distribution de qualité supérieure</p>
      </div>
      
      {/* Section de statistiques pour transformateurs */}
      <div className="product-stats-section">
        <h2>Caractéristiques Techniques des Transformateurs</h2>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <h3>Plage de Puissance</h3>
            <div className="stat-value">5-2500 kVA</div>
            <p>Puissance nominale disponible</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔌</div>
            <h3>Tension Primaire</h3>
            <div className="stat-value">5-36 kV</div>
            <p>Tension d'entrée haute tension</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">💡</div>
            <h3>Tension Secondaire</h3>
            <div className="stat-value">230-690V</div>
            <p>Tension de sortie basse tension</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <h3>Rendement</h3>
            <div className="stat-value">98.5%</div>
            <p>Rendement énergétique moyen</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🌡️</div>
            <h3>Isolation</h3>
            <div className="stat-value">Classe H</div>
            <p>Classe d'isolation thermique</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🛡️</div>
            <h3>Protection</h3>
            <div className="stat-value">IP23-IP55</div>
            <p>Degré de protection selon modèle</p>
          </div>
        </div>
      </div>
      
      <div className="products-container">
        <div className="products-grid">
          {/* Produit 1 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel40.jpg" alt="Transformateur de puissance" />
            </div>
            <div className="product-content">
              <h3>Transformateur de Puissance</h3>
              <p>Pour installations industrielles et réseaux électriques</p>
              <div className="product-specs">
                <span>25 kVA</span>
                <span>400V/230V</span>
                <span>Cuivre</span>
              </div>
              <div className="product-price">1 800 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 2 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel41.jpg" alt="Transformateur de distribution" />
            </div>
            <div className="product-content">
              <h3>Transformateur de Distribution</h3>
              <p>Pour postes de transformation publique et privée</p>
              <div className="product-specs">
                <span>100 kVA</span>
                <span>20kV/400V</span>
                <span>Cuivre</span>
              </div>
              <div className="product-price">3 500 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 3 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel50.jpg" alt="Transformateur sec" />
            </div>
            <div className="product-content">
              <h3>Transformateur Sec</h3>
              <p>Isolation résine pour environnements sensibles</p>
              <div className="product-specs">
                <span>50 kVA</span>
                <span>400V/230V</span>
                <span>Résine</span>
              </div>
              <div className="product-price">2 800 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 4 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel43.jpg" alt="Transformateur immergé" />
            </div>
            <div className="product-content">
              <h3>Transformateur Immergé</h3>
              <p>Rempli d'huile pour refroidissement optimal</p>
              <div className="product-specs">
                <span>160 kVA</span>
                <span>15kV/400V</span>
                <span>Huile</span>
              </div>
              <div className="product-price">4 200 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 5 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel44.jpg" alt="Transformateur de mesure" />
            </div>
            <div className="product-content">
              <h3>Transformateur de Mesure</h3>
              <p>Pour protection et mesure des circuits HT</p>
              <div className="product-specs">
                <span>Classe 0.5</span>
                <span>10kV/100V</span>
                <span>Précision</span>
              </div>
              <div className="product-price">450 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 6 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel45.jpg" alt="Transformateur de protection" />
            </div>
            <div className="product-content">
              <h3>Transformateur de Protection</h3>
              <p>Pour systèmes de protection différentielle</p>
              <div className="product-specs">
                <span>Classe 5P</span>
                <span>15kV/1A</span>
                <span>Protection</span>
              </div>
              <div className="product-price">520 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 7 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel46.jpg" alt="Transformateur triphasé" />
            </div>
            <div className="product-content">
              <h3>Transformateur Triphasé</h3>
              <p>Pour applications industrielles triphasées</p>
              <div className="product-specs">
                <span>300 kVA</span>
                <span>400V/230V</span>
                <span>Triphasé</span>
              </div>
              <div className="product-price">6 800 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 8 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel47.jpg" alt="Transformateur autoprotégé" />
            </div>
            <div className="product-content">
              <h3>Transformateur Autoprotégé</h3>
              <p>Avec disjoncteur intégré et parafoudre</p>
              <div className="product-specs">
                <span>63 kVA</span>
                <span>20kV/400V</span>
                <span>Complet</span>
              </div>
              <div className="product-price">5 200 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          
          {/* Produit 9 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel49.jpg" alt="Transformateur autoprotégé" />
            </div>
            <div className="product-content">
              <h3>Transformateur Autoprotégé</h3>
              <p>Avec disjoncteur intégré et parafoudre</p>
              <div className="product-specs">
                <span>63 kVA</span>
                <span>20kV/400V</span>
                <span>Complet</span>
              </div>
              <div className="product-price">5 200 000 FCFA</div>
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
            <p>Votre partenaire de confiance pour tous vos transformateurs de puissance et de distribution depuis 2005.</p>
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
                <li><a href="#">Transformateurs</a></li>
                <li><a href="#">Variateurs de Vitesse</a></li>
                <li><a href="#">Automates Industriels</a></li>
                <li><a href="#">Composants Électriques</a></li>
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
                <li><a href="#">Installation</a></li>
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