import React from 'react';
import './Actualite.css';

export default function Actualites() {
  // Données des actualités
  const actualites = [
    {
      id: 1,
      titre: "Lancement de notre nouvelle gamme de moteurs électriques",
      date: "15 Novembre 2024",
      image: "src/assets/images/partenaire1.jpg",
      resume: "2DK annonce le lancement de sa nouvelle gamme de moteurs électriques haute efficacité, conçus pour réduire la consommation énergétique de 30%.",
      categorie: "Innovation"
    },
    {
      id: 2,
      titre: "Partenariat stratégique avec un leader allemand",
      date: "2 Novembre 2024",
      image: "src/assets/images/partenaire2.jpg",
      resume: "Signature d'un partenariat exclusif avec Siemens pour la distribution de leurs automates programmables en Afrique de l'Ouest.",
      categorie: "Partenariat"
    },
    {
      id: 3,
      titre: "2DK obtient la certification ISO 9001",
      date: "25 Octobre 2024",
      image: "src/assets/images/partenaire3.jpg",
      resume: "Notre entreprise a obtenu la certification ISO 9001 pour la qualité de ses processus et la satisfaction client.",
      categorie: "Récompense"
    },
    {
      id: 4,
      titre: "Ouverture d'une nouvelle succursale à Abidjan",
      date: "10 Octobre 2024",
      image: "src/assets/images/partenaire4.jpg",
      resume: "2DK continue son expansion en Afrique avec l'ouverture d'une nouvelle succursale en Côte d'Ivoire.",
      categorie: "Expansion"
    },
    {
      id: 5,
      titre: "Salon international de l'électromécanique",
      date: "28 Septembre 2024",
      image: "src/assets/images/partenaire5.jpg",
      resume: "Retour sur notre participation au salon international de l'électromécanique où nous avons présenté nos innovations.",
      categorie: "Événement"
    },
    {
      id: 6,
      titre: "Formation technique pour nos partenaires",
      date: "15 Septembre 2024",
      image: "src/assets/images/partenaire6.jpg",
      resume: "Organisation d'une session de formation technique avancée pour nos partenaires revendeurs sur les nouveaux équipements.",
      categorie: "Formation"
    }
  ];

  return (
    <div className="actualites-page">
      {/* Hero Section */}
      <section className="actualites-hero">
        <div className="hero-content">
          <h1>Actualités 2DI</h1>
          <p>Restez informé des dernières nouvelles et développements de notre entreprise</p>
        </div>
      </section>

      {/* Filtres par catégorie */}
      <section className="filtres-section">
        <div className="container">
          <h2>Filtrer par catégorie</h2>
          <div className="filtres-categories">
            <button className="filtre-btn active">Toutes</button>
            <button className="filtre-btn">Innovation</button>
            <button className="filtre-btn">Partenariat</button>
            <button className="filtre-btn">Événement</button>
            <button className="filtre-btn">Expansion</button>
          </div>
        </div>
      </section>

      {/* Section des actualités */}
      <section className="actualites-section">
        <div className="container">
          <div className="actualites-grid">
            {actualites.map(actualite => (
              <article key={actualite.id} className="actualite-card">
                <div className="actualite-image">
                  <img src={actualite.image} alt={actualite.titre} />
                  <span className="categorie-badge">{actualite.categorie}</span>
                </div>
                <div className="actualite-content">
                  <span className="actualite-date">{actualite.date}</span>
                  <h3>{actualite.titre}</h3>
                  <p>{actualite.resume}</p>
                  <button className="lire-plus-btn">Lire la suite</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Restez informé</h2>
            <p>Inscrivez-vous à notre newsletter pour recevoir nos actualités directement dans votre boîte mail</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                required 
              />
              <button type="submit">S'inscrire</button>
            </form>
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