import React from 'react';
import './Service.css';
// import { Outlet } from 'react-router-dom';

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <div className="company-logo">
            <img src="src/assets/images/entreprise.jpg" alt="Logo 2DK" />
            <h1>2D Industriel</h1>
          </div>
          <h2>Expert en Solutions Électromécaniques</h2>
          <p>Fournisseur de confiance pour l'industrie depuis 2005</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>À propos de 2DK</h2>
              <p>
                Fondée en 2005, 2DK est devenue un leader dans la distribution de matériel électromécanique 
                de haute qualité. Notre mission est de fournir des solutions innovantes et fiables pour répondre 
                aux besoins croissants de l'industrie en matière d'équipements électromécaniques.
              </p>
              <p>
                Avec plus de 15 ans d'expérience, nous avons développé un réseau de partenaires internationaux 
                et construit une réputation d'excellence dans le secteur. Notre équipe d'experts techniques 
                vous accompagne dans le choix des équipements les plus adaptés à vos besoins spécifiques.
              </p>
              <div className="stats-container">
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Ans d'expérience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Clients satisfaits</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Produits disponibles</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="src/assets/images/entreprise.jpg" alt="Équipe 2DK" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Nos Services</h2>
          
          <div className="services-grid">
            {/* Vente de matériel */}
            <div className="service-card">
              <div className="service-image">
                <img src="src/assets/images/service1.jpg" alt="Vente de matériel électromécanique" />
              </div>
              <div className="service-content">
                <h3>Vente de Matériel Électromécanique</h3>
                <p>
                  Distribution d'équipements électromécaniques de haute qualité : moteurs, 
                  transformateurs, systèmes d'entraînement, automates programmables et 
                  composants électriques industriels.
                </p>
                <ul>
                  <li>Moteurs électriques et variateurs de fréquence</li>
                  <li>Composants d'automatisation industrielle</li>
                  <li>Équipements de contrôle et mesure</li>
                  <li>Systèmes de transmission mécanique</li>
                </ul>
              </div>
            </div>

            {/* Business Development */}
            <div className="service-card">
              <div className="service-image">
                <img src="src/assets/images/service2.jpg" alt="Développement des affaires" />
              </div>
              <div className="service-content">
                <h3>Développement des Affaires</h3>
                <p>
                  Stratégies de croissance sur mesure pour les entreprises du secteur 
                  électromécanique, avec une expertise en développement de marchés 
                  et optimisation des opérations commerciales.
                </p>
                <ul>
                  <li>Études de marché sectorielles</li>
                  <li>Stratégies de pénétration marché</li>
                  <li>Optimisation des canaux de distribution</li>
                  <li>Plans de développement commercial</li>
                </ul>
              </div>
            </div>

            {/* Marketing */}
            <div className="service-card">
              <div className="service-image">
                <img src="src/assets/images/service3.jpg" alt="Services marketing" />
              </div>
              <div className="service-content">
                <h3>Marketing Industriel</h3>
                <p>
                  Solutions marketing spécialisées pour l'industrie électromécanique, 
                  incluant positionnement de marque, stratégie digitale et campagnes 
                  ciblées pour atteindre votre audience B2B.
                </p>
                <ul>
                  <li>Stratégie de marque sectorielle</li>
                  <li>Marketing digital B2B</li>
                  <li>Content marketing technique</li>
                  <li>Campagnes trade marketing</li>
                </ul>
                {/* Lien vers la page marketing détaillée */}
                <a href="" className="service-link">
                  En savoir plus →
                </a>
              </div>
            </div>

            {/* Communication */}
            <div className="service-card">
              <div className="service-image">
                <img src="src/assets/images/service4.jpg" alt="Services de communication" />
              </div>
              <div className="service-content">
                <h3>Communication Corporative</h3>
                <p>
                  Services complets de communication pour l'industrie, incluant relations 
                  presse, gestion d'événements sectoriels et développement de supports 
                  de communication techniques.
                </p>
                <ul>
                  <li>Relations presse sectorielle</li>
                  <li>Organisation d'événements techniques</li>
                  <li>Rédaction de contenu technique</li>
                  <li>Gestion de crise communicationnelle</li>
                </ul>
              </div>
            </div>

            {/* Relations Internationales */}
            <div className="service-card">
              <div className="service-image">
                <img src="src/assets/images/service5.jpg" alt="Relations internationales" />
              </div>
              <div className="service-content">
                <h3>Relations Internationales</h3>
                <p>
                  Expertise en commerce international pour le secteur électromécanique, 
                  avec gestion des exportations, développement de réseaux distributeurs 
                  et navigation réglementaire internationale.
                </p>
                <ul>
                  <li>Développement de marchés à l'export</li>
                  <li>Recherche de partenaires internationaux</li>
                  <li>Gestion logistique internationale</li>
                  <li>Conformité réglementaire internationale</li>
                </ul>
              </div>
            </div>

            {/* Support Technique */}
            <div className="service-card">
              <div className="service-image">
                <img src="src/assets/images/service6.jpg" alt="Support technique" />
              </div>
              <div className="service-content">
                <h3>Support Technique & Formation</h3>
                <p>
                  Services techniques avancés incluant installation, maintenance, 
                  dépannage et formation sur les équipements électromécaniques 
                  pour assurer leur bon fonctionnement et longévité.
                </p>
                <ul>
                  <li>Installation et mise en service</li>
                  <li>Maintenance préventive et corrective</li>
                  <li>Formation technique opérateurs</li>
                  <li>Support technique 24/7</li>
                </ul>
                {/* Lien vers la page développement détaillée */}
                <a href="" className="service-link">
                  En savoir plus →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outlet pour les routes enfants */}
      {/* <div className="services-outlet">
        <Outlet />
      </div> */}

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Nos Valeurs</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Qualité</h3>
              <p>Nous garantissons des produits et services de la plus haute qualité</p>
            </div>
            <div className="value-item">
              <div className="value-icon">⚡</div>
              <h3>Innovation</h3>
              <p>Nous restons à la pointe des technologies électromécaniques</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>Nous construisons des relations durables avec nos clients</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌍</div>
              <h3>Durabilité</h3>
              <p>Nous promouvons des solutions énergétiquement efficaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Prêt à transformer votre entreprise?</h2>
          <p>Contactez-nous pour une consultation gratuite et découvrez comment nos solutions peuvent répondre à vos besoins</p>
          <button className="cta-button">Nous Contacter</button>
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
              <span><a href=""><i className="bi bi-facebook"></i></a></span>
              <span><a href=""><i className="bi bi-twitter-x"></i></a></span>
              <span><a href=""><i className="bi bi-instagram"></i></a></span>
              <span><a href=""><i className="bi bi-linkedin"></i></a></span>
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