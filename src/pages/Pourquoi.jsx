import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Pourquoi.css';

const Pourquoi = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const team = [
    {
      id: 1,
      name: "Faidior Seyni",
      position: "Directeur Général",
      description: "Visionnaire et leader du secteur de l'archivage au Sénégal, avec plus de 15 années d'expertise.",
      image: "https://ui-avatars.com/api/?name=Faidior+Seyni&size=300&background=c9873a&color=fff&bold=true&rounded=true",
      badge: "Fondateur"
    },
    {
      id: 2,
      name: "Abdoulaye Gueye",
      position: "Responsable Technique",
      description: "Expert en numérisation et GED, spécialisé dans l'implémentation de solutions Alfresco.",
      image: "https://ui-avatars.com/api/?name=Abdoulaye+Gueye&size=300&background=e09848&color=fff&bold=true&rounded=true",
      badge: "Tech"
    },
    {
      id: 3,
      name: "Ibrahima Diediou",
      position: "Responsable Archivage",
      description: "Spécialiste en gestion documentaire et normes ISO, garantissant la conformité de tous les projets.",
      image: "https://ui-avatars.com/api/?name=Ibrahima+Diediou&size=300&background=1a2438&color=fff&bold=true&rounded=true",
      badge: "Archives"
    },
    {
      id: 4,
      name: "Mbayangue Sene",
      position: "Responsable Commercial",
      description: "Chef de projet et relation client, assurant la satisfaction et le succès de chaque mission.",
      image: "https://ui-avatars.com/api/?name=Mbayangue+Sene&size=300&background=c9873a&color=fff&bold=true&rounded=true",
      badge: "Projets"
    },
  ];

  return (
    <div className="propos-page">
      {/* HEADER */}
      <section className="propos-header" data-aos="fade-down">
        <div className="header-content">
          <img src="/image/logo-archive.png" alt="ArchivPro Dakar" className="header-logo" />
          <h1 className="header-title">À Propos de ArchivPro</h1>
          <p className="header-subtitle">La référence de l'archivage professionnel au Sénégal</p>
        </div>
      </section>

      {/* LOGO & VISION */}
      <section className="logo-vision" data-aos="fade-up">
        <div className="container">
          <div className="logo-section" data-aos="zoom-in">
            <div className="logo-box">
              <div className="logo-text">Archiv<span>Pro</span></div>
              <div className="logo-badge">Dakar</div>
            </div>
          </div>

          <div className="vision-content">
            <h2 data-aos="fade-right">Notre Vision</h2>
            <p data-aos="fade-right" data-aos-delay="100">
              Devenir le leader incontournable de la gestion documentaire et de l'archivage au Sénégal et en Afrique de l'Ouest, 
              en offrant des solutions innovantes et durables pour sécuriser le patrimoine informationnel des organisations.
            </p>

            <h2 data-aos="fade-right" data-aos-delay="200">Notre Mission</h2>
            <p data-aos="fade-right" data-aos-delay="300">
              Accompagner nos clients dans la transformation digitale de leurs processus documentaires en proposant 
              des services d'archivage, de numérisation et de gestion électronique des documents (GED) de qualité 
              professionnelle, conformes aux normes internationales.
            </p>
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="histoire" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">L'Histoire de ArchivPro</h2>

          <div className="timeline">
            <div className="timeline-item" data-aos="fade-right">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2012 - Fondation</h3>
                <p>
                  Faidior Seyni fonde ArchivPro avec une vision claire : moderniser la gestion documentaire au Sénégal. 
                  Fort de son expérience en administration publique et en gestion de documents, il identifie les enjeux 
                  critiques des organisations sénégalaises et crée une solution adaptée.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-right" data-aos-delay="100">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2015 - Expansion regionale</h3>
                <p>
                  Après 3 ans de succès à Dakar, ArchivPro s'étend aux régions avec l'ouverture de nos services à Thiès et Kaolack. 
                  Nous recrutons nos premiers techniciens spécialisés et investissons dans des équipements de numérisation haut-de-gamme.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-right" data-aos-delay="200">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2018 - Projet IDEP (534k pages)</h3>
                <p>
                  Réussite majeure : numérisation de 534 000 pages pour l'IDEP. Ce projet emblématique propulse ArchivPro 
                  comme référence nationale en numérisation massive. Nous établissons notre expertise en GED avec Alfresco.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-right" data-aos-delay="300">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2021 - Certification et reconnaissance</h3>
                <p>
                  Obtention de certifications ISO 9001 et ISO 15489 pour la gestion documentaire. Reconnaissance du secteur 
                  privé et public. ArchivPro devient partenaire privilégié des grandes organisations au Sénégal.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-right" data-aos-delay="400">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2024 - Leadership consolidé</h3>
                <p>
                  Aujourd'hui, avec plus de 15 clients majeurs (KPMG, Total Énergies, FONGIP, Assurances Providence...), 
                  ArchivPro est leader du marché. Nous continuons l'innovation avec des solutions cloud et IA pour 
                  l'indexation automatique de documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="valeurs" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Nos Valeurs</h2>

          <div className="valeurs-grid">
            <div className="valeur-card" data-aos="zoom-in" data-aos-delay="0">
              <div className="valeur-icon"><i className="fas fa-bullseye"></i></div>
              <h3>Excellence</h3>
              <p>Qualité irréprochable dans tous nos services et livérables</p>
            </div>

            <div className="valeur-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="valeur-icon"><i className="fas fa-lock"></i></div>
              <h3>Sécurité</h3>
              <p>Protection maximale des données et des documents confidentiels</p>
            </div>

            <div className="valeur-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="valeur-icon"><i className="fas fa-handshake"></i></div>
              <h3>Partenariat</h3>
              <p>Relations long terme basées sur la confiance et le professionnalisme</p>
            </div>

            <div className="valeur-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="valeur-icon"><i className="fas fa-rocket"></i></div>
              <h3>Innovation</h3>
              <p>Technologies modernes et solutions adaptées à chaque client</p>
            </div>
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="equipe" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Notre Équipe</h2>
          <p className="equipe-subtitle" data-aos="fade-up">
            Des experts passionnés par la gestion documentaire et l'archivage professionnel
          </p>

          <div className="team-grid">
            {team.map((member, index) => (
              <div
                key={member.id}
                className="team-card"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="team-image-container">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="team-badge">{member.badge}</div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="description">{member.description}</p>
                  <div className="team-contact">
                    <span>📧 Contact</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Nos Accomplissements</h2>

          <div className="stats-grid">
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="0">
              <div className="stat-number">500k+</div>
              <p>Documents numérisés</p>
            </div>

            <div className="stat-box" data-aos="zoom-in" data-aos-delay="100">
              <div className="stat-number">50+</div>
              <p>Clients satisfaits</p>
            </div>

            <div className="stat-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="stat-number">12+</div>
              <p>Années d'expérience</p>
            </div>

            <div className="stat-box" data-aos="zoom-in" data-aos-delay="300">
              <div className="stat-number">100%</div>
              <p>Conformité ISO 9001</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="propos-cta" data-aos="fade-up">
        <div className="container">
          <h2>Prêt à moderniser vos archives ?</h2>
          <p>Contactez-nous pour une consultation gratuite</p>
          <a href="/contact" className="cta-button">
            Demander un devis
          </a>
        </div>
      </section>
    </div>
  );
};

export default Pourquoi;