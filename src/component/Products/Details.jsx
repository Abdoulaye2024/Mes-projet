import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './EntrepriseDetails.css';

export default function EntrepriseDetails() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="entreprise-page">
      {/* Hero Section */}
      <div className="entreprise-hero">
        <div className="hero-content">
          <img src="src/assets/images/logo2DI.jpg" alt="Logo 2DK" className="entreprise-logo" />
          <h1>2DI INDUSTRIE</h1>
          <p className="hero-subtitle">Innovation et Excellence en Mécanique et Mécatronique</p>
        </div>
      </div>

      {/* Section À Propos */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Notre Histoire</h2>
              <p className="about-text">
                Fondée en 2010, 2DK Technologies est devenue un leader dans la transformation 
                du secteur de la mécatronique et des engins lourds en Côte d'Ivoire et en Afrique de l'Ouest.
                Notre mission est de fournir des solutions innovantes qui combinent mécanique, 
                électronique et informatique pour révolutionner l'industrie lourde.
              </p>
              <p className="about-text">
                Avec une équipe de plus de 50 ingénieurs et techniciens spécialisés, nous avons 
                réalisé plus de 200 projets majeurs et formé plus de 500 professionnels du secteur.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">14+</div>
                  <div className="stat-label">Ans d'expérience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Projets réalisés</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Ingénieurs</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Pays desservis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipements */}
      <section className="equipment-section">
        <div className="container">
          <h2 className="section-title">Technologies et Équipements de Pointe</h2>
          <div className="row">
            <div className="col-md-4 equipment-item">
              <div className="equipment-card">
                <div className="equipment-icon">⚙️</div>
                <h3>Centres d'Usinage CNC</h3>
                <p>Machines 5 axes haute précision pour la fabrication de pièces complexes</p>
              </div>
            </div>
            <div className="col-md-4 equipment-item">
              <div className="equipment-card">
                <div className="equipment-icon">🤖</div>
                <h3>Robots Industriels</h3>
                <p>Cellules robotisées pour l'assemblage et la soudure automatisée</p>
              </div>
            </div>
            <div className="col-md-4 equipment-item">
              <div className="equipment-card">
                <div className="equipment-icon">🔬</div>
                <h3>Laboratoire de Test</h3>
                <p>Équipements de test et validation pour assurance qualité</p>
              </div>
            </div>
            <div className="col-md-4 equipment-item">
              <div className="equipment-card">
                <div className="equipment-icon">💻</div>
                <h3>Logiciels CAO/DAO</h3>
                <p>Solutions logicielles avancées pour la conception et simulation</p>
              </div>
            </div>
            <div className="col-md-4 equipment-item">
              <div className="equipment-card">
                <div className="equipment-icon">📊</div>
                <h3>Systèmes IoT</h3>
                <p>Plateformes de monitoring et maintenance prédictive</p>
              </div>
            </div>
            <div className="col-md-4 equipment-item">
              <div className="equipment-card">
                <div className="equipment-icon">⚡</div>
                <h3>Énergie Hybride</h3>
                <p>Systèmes d'alimentation hybrides pour engins lourds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Bootstrap */}
      <section className="carousel-section">
        <div className="container">
          <h2 className="section-title">Nos Réalisations</h2>
          <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="src/assets/images/industrie1.jpg"
                alt="Premier projet"
              />
              <Carousel.Caption>
                <h3>Automation d'Usine</h3>
                <p>Modernisation complète d'une usine de production</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="src/assets/images/industrie2.jpg"
                alt="Deuxième projet"
              />
              <Carousel.Caption>
                <h3>Engins Hybrides</h3>
                <p>Conversion de véhicules lourds en propulsion hybride</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="src/assets/images/industrie3.jpg"
                alt="Troisième projet"
              />
              <Carousel.Caption>
                <h3>Robotique Avancée</h3>
                <p>Intégration de bras robotiques pour l'assemblage</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* Section Direction */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="section-title">Notre Direction</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="director-card">
                <img src="src/assets/images/laye1.jpeg" alt="Directeur Général" className="director-img" />
                <div className="director-info">
                  <h3>Dr. Kwame N'Dri</h3>
                  <p className="director-title">Directeur Général & Fondateur</p>
                  <p className="director-bio">
                    Ingénieur en mécatronique avec 20 ans d'expérience, Dr. N'Dri a dirigé 
                    plus de 100 projets innovants dans le secteur des technologies industrielles.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="director-card">
                <img src="src/assets/images/laye1.jpeg" alt="Directrice Technique" className="director-img" />
                <div className="director-info">
                  <h3>Ing. Aminata Diarra</h3>
                  <p className="director-title">Directrice Technique</p>
                  <p className="director-bio">
                    Spécialiste en robotique industrielle, elle apporte 15 ans d'expertise 
                    dans l'automatisation des processus de production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Partenariats */}
      <section className="partners-section">
        <div className="container">
          <h2 className="section-title">Nos Partenaires Stratégiques</h2>
          <div className="partners-grid">
            <div className="partner-item">
              <img src="src/assets/images/part1.jpg" alt="Partenaire 1" />
              <h4>Siemens AG</h4>
              <p>Partenaire technologique pour l'automatisation industrielle</p>
            </div>
            <div className="partner-item">
              <img src="src/assets/images/part2.jpg" alt="Partenaire 2" />
              <h4>Caterpillar</h4>
              <p>Fournisseur officiel d'équipements lourds</p>
            </div>
            <div className="partner-item">
              <img src="src/assets/images/part3.jpg" alt="Partenaire 3" />
              <h4>Schneider Electric</h4>
              <p>Solutions énergétiques et d'automatisation</p>
            </div>
            <div className="partner-item">
              <img src="src/assets/images/part4.jpg" alt="Partenaire 4" />
              <h4>Ministère de l'Industrie</h4>
              <p>Partenaire institutionnel pour l'innovation industrielle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Vidéos */}
      <section className="videos-section">
        <div className="container">
          <h2 className="section-title">Découvrez 2DK en Action</h2>
          <div className="row">
            <div className="col-lg-6 video-container">
              <div className="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KV5mUjJ7Tms?si=Nmh86XkYbvFR7BkG" title="YouTube video player"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <h4>Présentation de l'Entreprise</h4>
            </div>
            <div className="col-lg-6 video-container">
              <div className="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/awvyEzfQUWs?si=t5surVwNHu9TZBJC" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <h4>Nos Projets Innovants</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Moderne */}
      <footer className="modern-footer">
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 footer-section">
                <img src="src/assets/images/logo2DI.jpg" alt="2DK Logo" className="footer-logo" />
                <p className="footer-description">
                  Leader en solutions mécatroniques et équipements lourds 
                  pour la transformation industrielle de l'Afrique.
                </p>
                <div className="social-links">
                 <span><a href=""><i class="bi bi-facebook"></i></a></span>
                <span><a href=""><i class="bi bi-twitter-x"></i></a></span>
                <span><a href=""><i class="bi bi-instagram"></i></a></span>
                <span><a href=""><i class="bi bi-linkedin"></i></a></span>
                </div>
              </div>
              
              <div className="col-lg-2 footer-section">
                <h4>Entreprise</h4>
                <ul>
                  <li><a href="#">À propos</a></li>
                  <li><a href="#">Équipe</a></li>
                  <li><a href="#">Carrières</a></li>
                  <li><a href="#">Actualités</a></li>
                </ul>
              </div>
              
              <div className="col-lg-2 footer-section">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">Ingénierie</a></li>
                  <li><a href="#">Formation</a></li>
                  <li><a href="#">Maintenance</a></li>
                  <li><a href="#">Consulting</a></li>
                </ul>
              </div>

              <div className="col-lg-2 footer-section">
                <h4>Partenaire</h4>
                <ul>
                  <li><a href="#">FDK Industrie</a></li>
                  <li><a href="#">Industrie Poid Lourds</a></li>
                  <li><a href="#">Meca-technique</a></li>
                  <li><a href="#">Agri-tech Industrie</a></li>
                </ul>
              </div>
              
              <div className="col-lg-4 footer-section">
                <h4>Contact</h4>
                <div className="contact-info">
                  <p>🏠 Zone Industrielle Yopougon, Abidjan, Côte d'Ivoire</p>
                  <p>📞 +225 27 22 44 55 66</p>
                  <p>✉️ contact@2dk-technologies.ci</p>
                  <p>🕒 Lun - Ven: 8h - 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <p>© 2024 2DK Technologies. Tous droits réservés.</p>
              <div className="footer-links">
                <a href="#">Confidentialité</a>
                <a href="#">Conditions d'utilisation</a>
                <a href="#">Politique des cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}