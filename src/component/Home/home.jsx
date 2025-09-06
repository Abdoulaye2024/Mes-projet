import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function Home() {
  {/*Grande carrousel image*/}
   {/* Nouveau Carrousel Électromécanique */}
  const electroMechanicalSlides = [
    {
      id: 1,
      title: "Centres d'Usinage CNC de Précision",
      description: "Machines 5 axes haute performance pour la fabrication de pièces complexes avec une précision micrométrique",
      image: "src/assets/images/materiel1.jpg",
      category: "ÉQUIPEMENT INDUSTRIEL"
    },
    {
      id: 2,
      title: "Systèmes Robotiques Industriels",
      description: "Solutions d'automatisation complètes pour l'assemblage, la soudure et la manutention",
      image: "src/assets/images/materiel2.jpg",
      category: "AUTOMATISATION"
    },
    {
      id: 3,
      title: "Groupes Électrogènes Industriels",
      description: "Solutions énergétiques fiables de 50kVA à 2000kVA pour sites industriels",
      image: "src/assets/images/materiel3.jpg",
      category: "ÉNERGIE"
    },
    {
      id: 4,
      title: "Transformateurs de Puissance",
      description: "Transformateurs moyenne et basse tension pour installations industrielles",
      image: "src/assets/images/materiel4.jpg",
      category: "ÉLECTRIQUE"
    },
    {
      id: 5,
      title: "Systèmes de Commande Automatique",
      description: "Automates programmables et variateurs de vitesse pour le contrôle des processus",
      image: "src/assets/images/materiel5.jpg",
      category: "AUTOMATISME"
    }
  ];


  {/*une autre section produit*/}
  // Données pour la nouvelle section de produits
  const newProducts = [
    { 
      id: 101, 
      name: "Écouteurs Sans Fil", 
      logo: "src/assets/images/materiel6.jpg",
      price: 79.99,
      rating: 4.6,
      discount: 15,
      category: "Audio",
      brand: "SoundMax",
      colors: ["Noir", "Blanc", "Bleu"],
      description: "Écouteurs sans fil avec annulation de bruit et autonomie de 24h"
    },
    { 
      id: 102, 
      name: "Sac à Dos Urbain", 
      logo: "src/assets/images/materiel7.jpg",
      price: 49.99,
      rating: 4.4,
      discount: 10,
      category: "Accessoires",
      brand: "UrbanStyle",
      colors: ["Noir", "Gris", "Bleu marine"],
      description: "Sac à dos résistant à l'eau avec compartiment pour ordinateur portable 15\""
    },
    { 
      id: 103, 
      name: "Montre Fitness", 
      logo: "src/assets/images/materiel8.jpg",
      price: 129.99,
      rating: 4.7,
      discount: 0,
      category: "Sport",
      brand: "FitTrack",
      colors: ["Noir", "Rose", "Argent"],
      description: "Suivi de l'activité physique, fréquence cardiaque et notifications smartphone"
    },
    { 
      id: 104, 
      name: "Enceinte Portable", 
      logo: "src/assets/images/materiel9.jpg",
      price: 89.99,
      rating: 4.3,
      discount: 20,
      category: "Audio",
      brand: "BassBeats",
      colors: ["Rouge", "Noir", "Bleu"],
      description: "Son stéréo puissant, Bluetooth 5.0 et autonomie de 12 heures"
    },
    { 
      id: 105, 
      name: "Lampe de Bureau LED", 
      logo: "src/assets/images/materiel10.jpg",
      price: 39.99,
      rating: 4.5,
      discount: 5,
      category: "Maison",
      brand: "LumiHome",
      colors: ["Blanc", "Noir", "Argent"],
      description: "Lampe à intensité variable avec port USB intégré"
    },
    { 
      id: 106, 
      name: "Souris Ergonomique", 
      logo: "src/assets/images/materiel11.jpg",
      price: 34.99,
      rating: 4.2,
      discount: 0,
      category: "Informatique",
      brand: "TechComfort",
      colors: ["Noir", "Blanc", "Gris"],
      description: "Conception ergonomique pour réduire la fatigue du poignet"
    },
    { 
      id: 107, 
      name: "Tapis de Yoga", 
      logo: "src/assets/images/materiel12.jpg",
      price: 24.99,
      rating: 4.8,
      discount: 30,
      category: "Sport",
      brand: "ZenYoga",
      colors: ["Violet", "Bleu", "Vert"],
      description: "Tapis antidérapant extra épais pour plus de confort"
    },
    { 
      id: 108, 
      name: "Power Bank 10000mAh", 
      logo: "src/assets/images/materiel13.jpg",
      price: 29.99,
      rating: 4.4,
      discount: 15,
      category: "Accessoires",
      brand: "PowerPlus",
      colors: ["Noir", "Argent", "Or"],
      description: "Batterie portable avec charge rapide et double port USB"
    },
     { 
      id: 108, 
      name: "Fourniture Industriell", 
      logo: "src/assets/images/materiel39.jpg",
      price: 29.99,
      rating: 4.4,
      discount: 15,
      category: "Accessoires",
      brand: "PowerPlus",
      colors: ["Noir", "Argent", "Or"],
      description: "Batterie portable avec charge rapide et double port USB"
    }
  ];

    {/*useState form*/}
    const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    address: '',
    email: '',
    isHuman: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous ajouterez la logique pour envoyer les données
    console.log('Données soumises:', formData);
    alert('Merci pour votre message! Nous vous contacterons bientôt.');
  };

    {/*useEffect*/}
      useEffect(() => {
    const animateNumbers = () => {
      const statNumbers = document.querySelectorAll('.stat-number');
      
      statNumbers.forEach(element => {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const counter = setInterval(() => {
          current += step;
          if (current >= target) {
            clearInterval(counter);
            current = target;
          }
          element.textContent = Math.floor(current).toLocaleString();
        }, 16);
      });
    };

    // Délai pour déclencher l'animation
    setTimeout(animateNumbers, 500);
  }, []);

    {/*carrousel*/}
     const products = [
    {
      id: 1,
      name: "Smartphone Premium",
      image: "src/assets/images/materiel14.jpg",
      description: "Dernier modèle avec écran 6.7\" et triple caméra",
      price: 899.99,
      rating: 4.8
    },
    {
      id: 2,
      name: "Casque Audio Pro",
      image: "src/assets/images/materiel15.jpg",
      description: "Réduction de bruit active, 30h d'autonomie",
      price: 249.99,
      rating: 4.6
    },
    {
      id: 3,
      name: "Montre Connectée",
      image: "src/assets/images/materiel16.jpg",
      description: "Suivi santé avancé et étanche 50m",
      price: 199.99,
      rating: 4.4
    },
    {
      id: 4,
      name: "Enceinte Bluetooth",
      image: "src/assets/images/materiel17.jpg",
      description: "Son 360°, 20h d'autonomie, résistante à l'eau",
      price: 129.99,
      rating: 4.3
    },
    {
      id: 5,
      name: "Ordinateur Portable",
      image: "src/assets/images/materiel18.jpg",
      description: "Processeur i7, 16GB RAM, SSD 512GB",
      price: 1099.99,
      rating: 4.7
    },
    {
      id: 6,
      name: "Appareil Photo",
      image: "src/assets/images/materiel19.jpg",
      description: "Capteur 24MP, 4K/60fps, objectif interchangeable",
      price: 749.99,
      rating: 4.9
    },
    {
      id: 7,
      name: "Tablette Graphique",
      image: "src/assets/images/materiel20.jpg",
      description: "Surface dessin 10x6 pouces, 8192 niveaux de pression",
      price: 299.99,
      rating: 4.5
    },
    {
      id: 8,
      name: "Drone Professionnel",
      image: "src/assets/images/materiel21.jpg",
      description: "4K HDR, 30min de vol, suivi intelligent",
      price: 499.99,
      rating: 4.6
    }
  ];

  // Diviser les produits en groupes de 4 pour le carousel
  const productGroups = [];
  for (let i = 0; i < products.length; i += 4) {
    productGroups.push(products.slice(i, i + 4));
  }

  return (
    <div className="home-page">
      {/* Section Hero */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Célébrez son succès avec style</h1>
          <p>Profitez de nos promos exceptionnelles pour marquer ce moment unique.</p>
          <button className="discover-btn">Découvrir</button>
        </div>
      </section>

    {/* Section Marques améliorée */}
        <section className="brands-section">
        <h2 className='text-center mb-5'>Univers des marques</h2>
        <div className="brands-grid">
            {[
            { 
                id: 1, 
                name: "Nike Air Max", 
                logo: "src/assets/images/materiel22.jpg",
                price: 129.99,
                rating: 4.5,
                discount: 20
            },
            { 
                id: 2, 
                name: "Adidas Superstar", 
                logo: "src/assets/images/materiel23.jpg",
                price: 89.99,
                rating: 4.2,
                discount: 15
            },
            { 
                id: 3, 
                name: "iPhone 13", 
                logo: "src/assets/images/materiel24.jpg",
                price: 799.99,
                rating: 4.8,
                discount: 10
            },
            { 
                id: 4, 
                name: "Samsung Galaxy", 
                logo: "src/assets/images/materiel25.jpg",
                price: 699.99,
                rating: 4.3,
                discount: 0
            },
             { 
                id: 4, 
                name: "Samsung Galaxy", 
                logo: "src/assets/images/materiel25.jpg",
                price: 699.99,
                rating: 4.3,
                discount: 0
            },
             { 
                id: 4, 
                name: "Samsung Galaxy", 
                logo: "src/assets/images/materiel26.jpg",
                price: 699.99,
                rating: 4.3,
                discount: 0
            },
             { 
                id: 4, 
                name: "Samsung Galaxy", 
                logo: "src/assets/images/materiel27.jpg",
                price: 699.99,
                rating: 4.3,
                discount: 0
            },
             { 
                id: 4, 
                name: "Samsung Galaxy", 
                logo: "src/assets/images/materiel28.jpg",
                price: 699.99,
                rating: 4.3,
                discount: 0
            }
            
            ].map((product) => (
            <div key={product.id} className="product-card">
                <div className="product-image-container">
                <img 
                    src={product.logo} 
                    alt={product.name} 
                    className="product-image"
                    onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "/images/default-product.png";
                    }}
                />
                {product.discount > 0 && (
                    <span className="discount-badge">-{product.discount}%</span>
                )}
                </div>
                <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                        {i < product.rating ? '★' : '☆'}
                    </span>
                    ))}
                    <span className="rating-value">({product.rating})</span>
                </div>
                <div className="product-price">
                    {product.discount > 0 ? (
                    <>
                        <span className="original-price">${product.price.toFixed(2)}</span>
                        <span className="discounted-price">
                        ${(product.price * (1 - product.discount/100)).toFixed(2)}
                        </span>
                    </>
                    ) : (
                    <span className="current-price">${product.price.toFixed(2)}</span>
                    )}
                </div>
                <button className="add-to-cart-btn">
                    <span className="cart-icon">🛒<a href="/info" className='text-decoration-none text-white'>Ajouter au panier</a></span> 
                </button>
                </div>
            </div>
            ))}
        </div>
        </section>

        {/*section autre produit*/}
        <div className="home-page">

          {/* Nouvelle Section de Produits */}
          <section className="products-section">
            <div className="container">
              <h2 className='text-center mb-5'>Nos Nouveautés</h2>
              <p className="section-intro text-center mb-4">
                Découvrez nos derniers produits ajoutés à notre catalogue. 
                Des articles tendance et innovants soigneusement sélectionnés pour vous.
              </p>
              
              <div className="products-grid">
                {newProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image-container">
                      <img 
                        src={product.logo} 
                        alt={product.name} 
                        className="product-image"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "/images/default-product.png";
                        }}
                      />
                      {product.discount > 0 && (
                        <span className="discount-badge">-{product.discount}%</span>
                      )}
                      <div className="product-overlay">
                        <button className="quick-view-btn">Voir détails</button>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-category">{product.category}</div>
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-brand">{product.brand}</div>
                      
                      <p className="product-description">{product.description}</p>
                      
                      <div className="product-rating">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                            {i < product.rating ? '★' : '☆'}
                          </span>
                        ))}
                        <span className="rating-value">({product.rating})</span>
                      </div>
                      
                      <div className="product-price">
                        {product.discount > 0 ? (
                          <>
                            <span className="original-price">${product.price.toFixed(2)}</span>
                            <span className="discounted-price">
                              ${(product.price * (1 - product.discount/100)).toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="current-price">${product.price.toFixed(2)}</span>
                        )}
                      </div>
                      
                      {product.colors && (
                        <div className="product-options">
                          <span className="option-label">Couleurs: </span>
                          <div className="color-options">
                            {product.colors.slice(0, 3).map((color, index) => (
                              <span key={index} className="color-dot" title={color}></span>
                            ))}
                            {product.colors.length > 3 && (
                              <span className="more-options">+{product.colors.length - 3}</span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <button className="add-to-cart-btn">
                        <span className="cart-icon">🛒<a href="/info" className='text-decoration-none text-white'>Ajouter au panier</a></span> 
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
            
            </div>
          </section>
      </div>
        

        {/*section baniere*/}
        <section className="stats-banner">
            <div className="stats-container">
                {/* Statistique 1 */}
                <div className="stat-item">
                <div className="stat-number" data-count="10000">0</div>
                <div className="stat-label">Clients satisfaits</div>
                <div className="stat-icon">😊</div>
                </div>

                {/* Statistique 2 */}
                <div className="stat-item">
                <div className="stat-number" data-count="95">0</div>
                <div className="stat-label">% Satisfaction</div>
                <div className="stat-icon">⭐</div>
                </div>

                {/* Statistique 3 */}
                <div className="stat-item">
                <div className="stat-number" data-count="5000">0</div>
                <div className="stat-label">Produits vendus</div>
                <div className="stat-icon">🚀</div>
                </div>

                {/* Message client */}
                <div className="client-message">
                <div className="quote-icon">❝</div>
                <p className="message-text">
                    "Une expérience d'achat exceptionnelle avec des produits de qualité supérieure et un service impeccable."
                </p>
                <div className="client-name">- Marie D., Paris</div>
                </div>
            </div>
        </section>

        {/*section carrousel*/}
        <section className="product-carousel-section py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5">Nos Produits Phares</h2>
                
                <Carousel indicators={false} interval={5000}>
                {productGroups.map((group, index) => (
                    <Carousel.Item key={index}>
                    <div className="row">
                        {group.map(product => (
                        <div key={product.id} className="col-md-3 mb-4">
                            <div className="card h-100">
                            <img 
                                src={product.image} 
                                className="card-img-top product-carousel-img"
                                alt={product.name}
                                onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src = "/images/default-product.jpg";
                                }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text text-muted small">{product.description}</p>
                                <div className="rating mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <i 
                                    key={i} 
                                    className={`bi bi-star${i < Math.floor(product.rating) ? '-fill' : ''}`}
                                    style={{ color: i < product.rating ? '#ffc107' : '#6c757d' }}
                                    ></i>
                                ))}
                                <span className="ms-1 small">({product.rating})</span>
                                </div>
                                <div className="price mb-3">
                                <span className="fw-bold text-primary">${product.price.toFixed(2)}</span>
                                </div>
                                <button 
                                className="btn btn-sm mt-auto align-self-start" style={{background: '#ff6b00'}}
                                onClick={() => console.log('Added to cart:', product.id)}
                                >
                                <span className="cart-icon">🛒<a href="/info" className='text-decoration-none text-white'>Ajouter au panier</a></span> 
                                </button>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </Carousel.Item>
                ))}
                </Carousel>
            </div>
        </section>

        {/*une Grande section carrousel*/}
        <div className="home-page">
      {/* Nouveau Carrousel Électromécanique Plein Écran */}
      <section className="electro-mechanical-carousel">
        <Carousel 
          indicators={true} 
          interval={5000}
          pause={false}
          className="fullscreen-carousel"
        >
          {electroMechanicalSlides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <div 
                className="carousel-slide"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="carousel-overlay"></div>
                <div className="carousel-content">
                  <div className="slide-category">{slide.category}</div>
                  <h2 className="slide-title">{slide.title}</h2>
                  <p className="slide-description">{slide.description}</p>
                  <div className="slide-actions">
                    <button className="btn-primary">Découvrir</button>
                    <button className="btn-secondary">Demander un devis</button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Le reste de votre code existant reste inchangé... */}
      <section className="brands-section">
        {/* ... */}
      </section>

      {/* ... (toutes les autres sections restent inchangées) ... */}
    </div>

        {/*section Video*/}
         <div className="services-page">
      {/* ... (le reste de votre code existant) ... */}

      {/* Section Vidéo Présentation */}
      <section className="company-video-section">
        <div className="container">
          <div className="video-content">
            <div className="video-wrapper">
              <h2 className="video-title">Découvrez 2DK en Vidéo</h2>
              <p className="video-subtitle">
                Plongez au cœur de notre expertise électromécanique et de notre engagement qualité
              </p>
              
              {/* Intégration YouTube */}
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1B1SoAg8m8E?si=wylINGQhhiSujPhl"
                 title="YouTube video player" frameborder="0" allow="accelerometer;
                  autoplay; clipboard-write; encrypted-media;
                  gyroscope; picture-in-picture; web-share"
                   referrerpolicy="strict-origin-when-cross-origin"
                   allowfullscreen></iframe>
              </div>
            </div>
            
            <div className="video-description">
              <div className="description-content">
                <h3>Notre Histoire, Notre Passion</h3>
                <p>
                  Depuis notre création en 2005, 2DK s'est imposé comme un acteur majeur 
                  dans le domaine des solutions électromécaniques. Cette vidéo vous invite 
                  à découvrir notre univers, nos valeurs et notre engagement envers l'excellence.
                </p>
                
                <div className="key-points">
                  <div className="key-point">
                    <div className="point-icon">🏭</div>
                    <div className="point-text">
                      <h4>Expertise Industrielle</h4>
                      <p>15 ans d'expérience au service de l'industrie</p>
                    </div>
                  </div>
                  
                  <div className="key-point">
                    <div className="point-icon">⚡</div>
                    <div className="point-text">
                      <h4>Innovation Technologique</h4>
                      <p>Solutions à la pointe de la technologie électromécanique</p>
                    </div>
                  </div>
                  
                  <div className="key-point">
                    <div className="point-icon">🌍</div>
                    <div className="point-text">
                      <h4>Impact Local</h4>
                      <p>Contribuer au développement industriel de l'Afrique</p>
                    </div>
                  </div>
                  
                  <div className="key-point">
                    <div className="point-icon">🤝</div>
                    <div className="point-text">
                      <h4>Partenariat Durable</h4>
                      <p>Relations client basées sur la confiance et la qualité</p>
                    </div>
                  </div>
                </div>
                
                <div className="video-stats">
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Clients Satisfaits</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">1000+</span>
                    <span className="stat-label">Projets Réalisés</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Pays Desservis</span>
                  </div>
                </div>
                
                <button className="cta-button-video">
                  Rejoignez l'Aventure 2DK
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... (le reste de votre code existant) ... */}
    </div>

        {/*section conatctForm*/}
         <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Partie Formulaire */}
        <div className="contact-form">
          <h2 className="section-title">Contactez-Nous</h2>
          <p className="section-subtitle">Remplissez le formulaire ci-dessous</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group dual-inputs">
              <div className="input-group">
                <label htmlFor="nom">Nom</label>
                <input 
                  type="text" 
                  id="nom" 
                  name="nom" 
                  value={formData.nom}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="prenom">Prénom</label>
                <input 
                  type="text" 
                  id="prenom" 
                  name="prenom" 
                  value={formData.prenom}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="address">Adresse</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <input 
                type="checkbox" 
                id="isHuman" 
                name="isHuman" 
                checked={formData.isHuman}
                onChange={handleChange}
                required
              />
              <label htmlFor="isHuman">Je ne suis pas un robot</label>
            </div>
            
            <button type="submit" className="submit-btn">
              Envoyer
            </button>
          </form>
        </div>
        
        {/* Partie Localisation */}
        <div className="location-info">
          <div className="location-card">
            <h3>Notre Localisation</h3>
            <div className="address">
              <span className="icon">📍</span>
              <p>Dakar, Zac Mbao<br />Sénégal</p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>contact@votresociete.com</span>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <span>+221 33 123 45 67</span>
              </div>
            </div>
            
            <div className="map-placeholder">
            <div className="map-container">
                <iframe 
                title="Localisation de notre entreprise à HLM Grand Yoff, Dakar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7716.981022796464!2d-17.459686915699823!3d14.741372968784734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d3815c75c01%3A0xd0ac2464e4d7df36!2sHlm%20grand%20yoff%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1755477839609!5m2!1sfr!2ssn" 
                width="100%" 
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* footer*/}
    <footer className="big-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Notre Entreprise</h3>
          <ul>
            <li>À propos de nous</li>
            <li>Notre équipe</li>
            <li>Carrières</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Produits</li>
            <li>Support technique</li>
            <li>FAQ</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Dakar, Zac Mbao</p>
          <p>contact@entreprise.com</p>
          <p>+221 33 123 45 67</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Notre Entreprise. Tous droits réservés.</p>
        <div className="social-icons">
          <span><a href=""><i class="bi bi-facebook"></i></a></span>
          <span><a href=""><i class="bi bi-twitter-x"></i></a></span>
          <span><a href=""><i class="bi bi-instagram"></i></a></span>
          <span><a href=""><i class="bi bi-linkedin"></i></a></span>
        </div>
      </div>
    </footer>


    </div>
  );
}