import React from 'react';
import './ProductsPage.css';

export default function ComposantsPage() {
  return (
    <div className="products-page">
      <div className="products-hero">
        <h1>Composants Électriques</h1>
        <p>Composants de qualité pour vos installations électriques</p>
      </div>
      
      {/* Section de statistiques pour composants électriques */}
      <div className="product-stats-section">
        <h2>Caractéristiques Techniques des Composants</h2>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <h3>Tension Max</h3>
            <div className="stat-value">690V</div>
            <p>Tension d'isolation maximale</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔌</div>
            <h3>Courant</h3>
            <div className="stat-value">10-400A</div>
            <p>Plage de courant disponible</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔄</div>
            <h3>Fréquence</h3>
            <div className="stat-value">50/60Hz</div>
            <p>Fréquence d'opération</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🌡️</div>
            <h3>Température</h3>
            <div className="stat-value">-25°C à +55°C</div>
            <p>Plage de température d'opération</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <h3>Durée de Vie</h3>
            <div className="stat-value">100 000 cycles</div>
            <p>Nombre de cycles mécaniques</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <h3>Certification</h3>
            <div className="stat-value">IEC 60947</div>
            <p>Normes internationales</p>
          </div>
        </div>
      </div>
      
      <div className="products-container">
        <div className="products-grid">
          {/* Produit 1 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel49.jpg" alt="Contacteur puissance" />
            </div>
            <div className="product-content">
              <h3>Contacteur de Puissance</h3>
              <p>Contacteur tétrapolaire 25A pour circuits puissance</p>
              <div className="product-specs">
                <span>25A</span>
                <span>4 poles</span>
                <span>AC3</span>
              </div>
              <div className="product-price">75 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 2 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel47.jpg" alt="Disjoncteur différentiel" />
            </div>
            <div className="product-content">
              <h3>Disjoncteur Différentiel</h3>
              <p>Disjoncteur 25A 30mA type AC pour protection personnes</p>
              <div className="product-specs">
                <span>25A</span>
                <span>30mA</span>
                <span>Type AC</span>
              </div>
              <div className="product-price">45 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 3 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel46.jpg" alt="Relais thermique" />
            </div>
            <div className="product-content">
              <h3>Relais Thermique</h3>
              <p>Relais de protection thermique pour moteurs électriques</p>
              <div className="product-specs">
                <span>0.1-25A</span>
                <span>3 phases</span>
                <span>Protection</span>
              </div>
              <div className="product-price">38 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 4 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel45.jpg" alt="Démarreur progressif" />
            </div>
            <div className="product-content">
              <h3>Démarreur Progressif</h3>
              <p>Démarreur progressif 15kW pour démarrage moteur en douceur</p>
              <div className="product-specs">
                <span>15kW</span>
                <span>400V</span>
                <span>Soft Start</span>
              </div>
              <div className="product-price">320 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 5 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel44.jpg" alt="Variateur de fréquence" />
            </div>
            <div className="product-content">
              <h3>Variateur de Fréquence</h3>
              <p>Variateur 7.5kW pour contrôle de vitesse moteur</p>
              <div className="product-specs">
                <span>7.5kW</span>
                <span>400V</span>
                <span>VFD</span>
              </div>
              <div className="product-price">450 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 6 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel43.jpg" alt="Sectionneur fusible" />
            </div>
            <div className="product-content">
              <h3>Sectionneur Fusible</h3>
              <p>Sectionneur 63A avec porte-fusibles pour isolation circuit</p>
              <div className="product-specs">
                <span>63A</span>
                <span>Isolé</span>
                <span>Porte-fusibles</span>
              </div>
              <div className="product-price">55 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 7 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel50.jpg" alt="Transformateur de commande" />
            </div>
            <div className="product-content">
              <h3>Transformateur de Commande</h3>
              <p>Transformateur 400V/24V 100VA pour circuits de commande</p>
              <div className="product-specs">
                <span>100VA</span>
                <span>400V/24V</span>
                <span>Classe II</span>
              </div>
              <div className="product-price">42 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          {/* Produit 8 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel41.jpg" alt="Boîtier étanche" />
            </div>
            <div className="product-content">
              <h3>Boîtier Étanche IP65</h3>
              <p>Boîtier de protection IP65 pour installation extérieure</p>
              <div className="product-specs">
                <span>IP65</span>
                <span>Polycarbonate</span>
                <span>Étanche</span>
              </div>
              <div className="product-price">28 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

           {/* Produit 9 */}
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel40.jpg" alt="Boîtier étanche" />
            </div>
            <div className="product-content">
              <h3>Boîtier Étanche IP65</h3>
              <p>Boîtier de protection IP65 pour installation extérieure</p>
              <div className="product-specs">
                <span>IP65</span>
                <span>Polycarbonate</span>
                <span>Étanche</span>
              </div>
              <div className="product-price">28 000 FCFA</div>
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
            <p>Votre partenaire de confiance pour tous vos équipements industriels et composants électriques depuis 2005.</p>
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
                <li><a href="#">Composants Électriques</a></li>
                <li><a href="#">Équipements Lourds</a></li>
                <li><a href="#">Pièces Détachées</a></li>
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
                <li><a href="#">Livraison</a></li>
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