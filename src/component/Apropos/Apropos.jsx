import React from 'react';
import './apropos.css';

export default function APropos() {
  return (
    <div className="a-propos-page">
      {/* Hero Section */}
      <section className="a-propos-hero">
        <div className="hero-content">
          <h1>À Propos de 2DK</h1>
          <p>Découvrez notre histoire, notre mission et notre engagement pour l'excellence</p>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="histoire-section">
        <div className="container">
          <div className="histoire-content">
            <div className="histoire-text">
              <h2>Notre Histoire</h2>
              <p>
                Fondée en 2005, 2DK est née de la vision de deux ingénieurs passionnés par l'électromécanique.
                Ce qui a commencé comme un petit atelier spécialisé dans la réparation de moteurs électriques
                s'est rapidement transformé en une entreprise leader dans la distribution de matériel électromécanique.
              </p>
              <p>
                Au fil des années, nous avons élargi notre expertise et notre catalogue pour répondre aux besoins
                croissants de l'industrie ouest-africaine. Aujourd'hui, 2DK est reconnue comme un partenaire
                de confiance pour les professionnels du secteur électromécanique.
              </p>
              <div className="histoire-stats">
                <div className="histoire-stat">
                  <span className="stat-number">19</span>
                  <span className="stat-label">Ans d'expérience</span>
                </div>
                <div className="histoire-stat">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Pays desservis</span>
                </div>
                <div className="histoire-stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Clients satisfaits</span>
                </div>
              </div>
            </div>
            <div className="histoire-image">
              <img src="src/assets/images/entreprise.jpg" alt="Histoire de 2DK" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission et Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <h2 className="section-title">Notre Mission & Vision</h2>
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Notre Mission</h3>
              <p>
                Fournir des solutions électromécaniques innovantes et fiables qui répondent aux défis
                industriels contemporains tout en garantissant un service client d'exception et un
                accompagnement technique de qualité.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">🔭</div>
              <h3>Notre Vision</h3>
              <p>
                Devenir le leader incontournable de l'électromécanique en Afrique de l'Ouest en
                driving l'innovation technologique et en contribuant au développement industriel
                durable de la région.
              </p>
            </div>
            <div className="valeurs-card">
              <div className="card-icon">💎</div>
              <h3>Nos Valeurs</h3>
              <ul>
                <li><strong>Excellence</strong> dans chaque prestation</li>
                <li><strong>Innovation</strong> continue</li>
                <li><strong>Intégrité</strong> dans nos relations</li>
                <li><strong>Durabilité</strong> environnementale</li>
                <li><strong>Service client</strong> exceptionnel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe Section */}
      <section className="equipe-section">
        <div className="container">
          <h2 className="section-title">Notre Équipe de Direction</h2>
          <div className="equipe-grid">
            <div className="membre-card">
              <div className="membre-image">
                <img src="src/assets/images/laye1.jpeg" alt="Directeur Général" />
              </div>
              <h3>Abdoulaye Diop</h3>
              <p className="membre-role">Directeur Général & Co-fondateur</p>
              <p className="membre-desc">
                Ingénieur électromécanicien avec 25 ans d'expérience dans l'industrie.
                Expert en systèmes d'entraînement et automation industrielle.
              </p>
            </div>
            <div className="membre-card">
              <div className="membre-image">
                <img src="src/assets/images/laye1.jpeg" alt="Directrice Technique" />
              </div>
              <h3>Fatou Ndiaye</h3>
              <p className="membre-role">Directrice Technique & Co-fondatrice</p>
              <p className="membre-desc">
                Spécialiste en gestion de projets industriels et développement de solutions
                techniques sur mesure pour nos clients.
              </p>
            </div>
            <div className="membre-card">
              <div className="membre-image">
                <img src="src/assets/images/laye1.jpeg" alt="Directeur Commercial" />
              </div>
              <h3>Moussa Diallo</h3>
              <p className="membre-role">Directeur Commercial</p>
              <p className="membre-desc">
                15 ans d'expérience dans le développement commercial B2B et l'expansion
                marché dans le secteur industriel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres Section */}
      <section className="chiffres-section">
        <div className="container">
          <h2 className="section-title">2DK en Chiffres</h2>
          <div className="chiffres-grid">
            <div className="chiffre-item">
              <div className="chiffre-icon">🏭</div>
              <span className="chiffre-number">1000+</span>
              <span className="chiffre-label">Équipements installés</span>
            </div>
            <div className="chiffre-item">
              <div className="chiffre-icon">🌍</div>
              <span className="chiffre-number">12</span>
              <span className="chiffre-label">Pays desservis</span>
            </div>
            <div className="chiffre-item">
              <div className="chiffre-icon">👥</div>
              <span className="chiffre-number">45</span>
              <span className="chiffre-label">Collaborateurs</span>
            </div>
            <div className="chiffre-item">
              <div className="chiffre-icon">📈</div>
              <span className="chiffre-number">98%</span>
              <span className="chiffre-label">Taux de satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="engagement-section">
        <div className="container">
          <h2 className="section-title">Notre Engagement</h2>
          <div className="engagement-content">
            <div className="engagement-text">
              <h3>Développement Durable</h3>
              <p>
                Chez 2DK, nous nous engageons à promouvoir des solutions énergétiquement efficaces
                et respectueuses de l'environnement. Nous favorisons les équipements à haute performance
                énergétique et accompagnons nos clients dans leur transition vers une industrie plus verte.
              </p>
              
              <h3>Innovation Continue</h3>
              <p>
                Notre équipe R&D travaille constamment à identifier les nouvelles technologies et
                tendances du marché pour vous offrir des solutions à la pointe de l'innovation
                électromécanique.
              </p>
              
              <h3>Formation & Partenariat</h3>
              <p>
                Nous investissons dans la formation de nos clients et partenaires pour garantir
                une utilisation optimale de nos équipements et maximiser leur durée de vie.
              </p>
            </div>
            <div className="engagement-image">
              <img src="src/assets/images/engage.jpg" alt="Engagement 2DK" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Prêt à collaborer avec nous?</h2>
          <p>Rejoignez les centaines d'entreprises qui nous font confiance pour leurs solutions électromécaniques</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Nous Contacter</button>
            <button className="cta-button secondary">Découvrir nos Services</button>
          </div>
        </div>
      </section>

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
              <span><a href=""><i class="bi bi-facebook"></i></a></span>
              <span><a href=""><i class="bi bi-twitter-x"></i></a></span>
              <span><a href=""><i class="bi bi-instagram"></i></a></span>
              <span><a href=""><i class="bi bi-linkedin"></i></a></span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 2DK Électromécanique. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}