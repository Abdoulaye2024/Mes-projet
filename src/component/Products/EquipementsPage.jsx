import React from 'react';
import './ProductsPage.css';

export default function EquipementsPage() {
  return (
    <div className="products-page">
      <div className="products-hero">
        <h1>Équipements Lourds</h1>
        <p>Matériel lourd et équipements industriels robustes</p>
      </div>
      
      {/* Section de statistiques */}
      <div className="product-stats-section">
        <h2>Statistiques Techniques du Groupe Électrogène</h2>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <h3>Puissance</h3>
            <div className="stat-value">50 kVA</div>
            <p>Puissance nominale continue</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔌</div>
            <h3>Tension</h3>
            <div className="stat-value">400 V</div>
            <p>Tension de sortie triphasée</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔊</div>
            <h3>Niveau Sonore</h3>
            <div className="stat-value">68 dB</div>
            <p>À 7 mètres en charge complète</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⛽</div>
            <h3>Consommation</h3>
            <div className="stat-value">12 L/h</div>
            <p>À 75% de charge</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <h3>Autonomie</h3>
            <div className="stat-value">8 h</div>
            <p>Avec réservoir plein à 75% de charge</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <h3>Dimensions</h3>
            <div className="stat-value">2200×900×1300 mm</div>
            <p>(L×l×H)</p>
          </div>
        </div>
      </div>
      
      {/*Les Produit */}
      <div className="products-container">
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel40.jpg" alt="Groupe électrogène" />
            </div>
            <div className="product-content">
              <h3>Groupe Électrogène</h3>
              <p>Groupe électrogène diesel silencieux 50 kVA</p>
              <div className="product-specs">
                <span>50 kVA</span>
                <span>400V</span>
                <span>Silencieux</span>
              </div>
              <div className="product-price">8 500 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel49.jpg" alt="Groupe électrogène" />
            </div>
            <div className="product-content">
              <h3>Groupe Électrogène</h3>
              <p>Groupe électrogène diesel silencieux 50 kVA</p>
              <div className="product-specs">
                <span>50 kVA</span>
                <span>400V</span>
                <span>Silencieux</span>
              </div>
              <div className="product-price">8 500 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel42.jpg" alt="Groupe électrogène" />
            </div>
            <div className="product-content">
              <h3>Groupe Électrogène</h3>
              <p>Groupe électrogène diesel silencieux 50 kVA</p>
              <div className="product-specs">
                <span>50 kVA</span>
                <span>400V</span>
                <span>Silencieux</span>
              </div>
              <div className="product-price">8 500 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel43.jpg" alt="Groupe électrogène" />
            </div>
            <div className="product-content">
              <h3>Groupe Électrogène</h3>
              <p>Groupe électrogène diesel silencieux 50 kVA</p>
              <div className="product-specs">
                <span>50 kVA</span>
                <span>400V</span>
                <span>Silencieux</span>
              </div>
              <div className="product-price">8 500 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel44.jpg" alt="Groupe électrogène" />
            </div>
            <div className="product-content">
              <h3>Groupe Électrogène</h3>
              <p>Groupe électrogène diesel silencieux 50 kVA</p>
              <div className="product-specs">
                <span>50 kVA</span>
                <span>400V</span>
                <span>Silencieux</span>
              </div>
              <div className="product-price">8 500 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel45.jpg" alt="Groupe électrogène" />
            </div>
            <div className="product-content">
              <h3>Groupe Électrogène</h3>
              <p>Groupe électrogène diesel silencieux 50 kVA</p>
              <div className="product-specs">
                <span>50 kVA</span>
                <span>400V</span>
                <span>Silencieux</span>
              </div>
              <div className="product-price">8 500 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel46.jpg" alt="Groupe électrogène" />
            </div>
            <div className="product-content">
              <h3>Groupe Électrogène</h3>
              <p>Groupe électrogène diesel silencieux 50 kVA</p>
              <div className="product-specs">
                <span>50 kVA</span>
                <span>400V</span>
                <span>Silencieux</span>
              </div>
              <div className="product-price">8 500 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel47.jpg" alt="Groupe électrogène" />
            </div>
            <div className="product-content">
              <h3>Groupe Électrogène</h3>
              <p>Groupe électrogène diesel silencieux 50 kVA</p>
              <div className="product-specs">
                <span>50 kVA</span>
                <span>400V</span>
                <span>Silencieux</span>
              </div>
              <div className="product-price">8 500 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="src/assets/images/materiel50.jpg" alt="Groupe électrogène" />
            </div>
            <div className="product-content">
              <h3>Groupe Électrogène</h3>
              <p>Groupe électrogène diesel silencieux 50 kVA</p>
              <div className="product-specs">
                <span>50 kVA</span>
                <span>400V</span>
                <span>Silencieux</span>
              </div>
              <div className="product-price">8 500 000 FCFA</div>
              <button className="product-btn">Voir détails</button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Nouveau Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-company">
            <h3>PowerTech Solutions</h3>
            <p>Votre partenaire de confiance pour tous vos équipements industriels et groupes électrogènes depuis 2005.</p>
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
                <li><a href="#">Groupes Électrogènes</a></li>
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