import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Information.css';

export default function Information() {
    const { productType, productId } = useParams();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        entreprise: '',
        adresse: '',
        ville: '',
        pays: '',
        quantite: 1,
        message: ''
    });

    // Données simulées pour le produit
    const productData = {
        id: 1,
        name: "Moteur Asynchrone Triphasé",
        price: "1 250 000 FCFA",
        description: "Moteur robuste pour applications industrielles lourdes avec protection IP55. Conçu pour une performance optimale dans les environnements exigeants.",
        specifications: [
            "Puissance: 15 kW",
            "Vitesse: 1500 tr/min",
            "Protection: IP55",
            "Tension: 400V",
            "Fréquence: 50Hz",
            "Classe d'isolation: F",
            "Poids: 120 kg",
            "Dimensions: 400x300x250 mm"
        ],
        features: [
            "Haute efficacité énergétique",
            "Faible niveau sonore",
            "Construction robuste",
            "Maintenance facile",
            "Garantie 2 ans",
            "Certification CE"
        ],
        images: [
            "src/assets/images/materiel1.jpg",
            "src/assets/images/materiel11.jpg",
            "src/assets/images/materiel7.jpg"
        ],
        rating: 4.5
    };

    // Données pour les produits similaires
    const similarProducts = [
        {
            id: 2,
            name: "Moteur Monophasé Compact",
            price: "850 000 FCFA",
            image: "src/assets/images/materiel38.jpg",
            rating: 4.2,
            description: "src/assets/images/materiel28.jpg"
        },
        {
            id: 3,
            name: "Moteur à Vitesse Variable",
            price: "1 750 000 FCFA",
            image: "src/assets/images/materiel37.jpg",
            rating: 4.7,
            description: "Moteur haute performance avec contrôle de vitesse intégré"
        },
        {
            id: 4,
            name: "Moteur à Courant Continu",
            price: "1 100 000 FCFA",
            image: "src/assets/images/materiel36.jpg",
            rating: 4.0,
            description: "Moteur CC pour applications nécessitant un contrôle précis"
        },
        {
            id: 5,
            name: "Moteur Haute Tension",
            price: "2 350 000 FCFA",
            image: "src/assets/images/materiel35.jpg",
            rating: 4.8,
            description: "Moteur conçu pour fonctionner sous des tensions élevées"
        },
        {
            id: 5,
            name: "Moteur Haute Tension",
            price: "2 350 000 FCFA",
            image: "src/assets/images/materiel34.jpg",
            rating: 4.8,
            description: "Moteur conçu pour fonctionner sous des tensions élevées"
        },
        {
            id: 5,
            name: "Moteur Haute Tension",
            price: "2 350 000 FCFA",
            image: "src/assets/images/materiel33.jpg",
            rating: 4.8,
            description: "Moteur conçu pour fonctionner sous des tensions élevées"
        },
        {
            id: 5,
            name: "Moteur Haute Tension",
            price: "2 350 000 FCFA",
            image: "src/assets/images/materiel32.jpg",
            rating: 4.8,
            description: "Moteur conçu pour fonctionner sous des tensions élevées"
        },
        {
            id: 5,
            name: "Moteur Haute Tension",
            price: "2 350 000 FCFA",
            image: "src/assets/images/materiel31.jpg",
            rating: 4.8,
            description: "Moteur conçu pour fonctionner sous des tensions élevées"
        }
    ];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données du formulaire:', formData);
        alert('Votre demande d\'achat a été envoyée avec succès !');
        setShowForm(false);
    };

    // Fonction pour afficher les étoiles de notation
    const renderRatingStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<span key={i} className="star full">★</span>);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<span key={i} className="star half">★</span>);
            } else {
                stars.push(<span key={i} className="star">★</span>);
            }
        }
        
        return stars;
    };

    return (
        <div className="information-page">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <div className="container">
                    <Link to="/">Accueil</Link>
                    <span> / </span>
                    <Link to="/moteurs">Moteurs</Link>
                    <span> / </span>
                    <span>{productData.name}</span>
                </div>
            </nav>

            {/* Product Details */}
            <section className="product-details">
                <div className="container">
                    <div className="product-content">
                        {/* Product Images */}
                        <div className="product-images">
                            <div className="main-image">
                                <img src={productData.images[0]} alt={productData.name} />
                            </div>
                            <div className="thumbnail-images">
                                {productData.images.map((image, index) => (
                                    <img key={index} src={image} alt={`Vue ${index + 1}`} />
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="product-info">
                            <h1>{productData.name}</h1>
                            
                            {/* Rating */}
                            <div className="product-rating">
                                <div className="stars">
                                    {renderRatingStars(productData.rating)}
                                </div>
                                <span className="rating-value">({productData.rating})</span>
                            </div>
                            
                            <div className="product-price">{productData.price}</div>
                            <p className="product-description">{productData.description}</p>

                            {/* Specifications et caractéristiques côte à côte */}
                            <div className="specs-features-container">
                                {/* Specifications */}
                                <div className="specifications">
                                    <h3>Spécifications Techniques</h3>
                                    <ul>
                                        {productData.specifications.map((spec, index) => (
                                            <li key={index}>{spec}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Features */}
                                <div className="features">
                                    <h3>Caractéristiques</h3>
                                    <ul>
                                        {productData.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Buy Button */}
                            <button 
                                className="buy-btn"
                                onClick={() => setShowForm(true)}
                            >
                                🛒 Acheter Maintenant
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Produits Similaires */}
            <section className="similar-products">
                <div className="container">
                    <h2>Produits Similaires</h2>
                    <div className="similar-products-grid">
                        {similarProducts.map(product => (
                            <div key={product.id} className="similar-product-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                    <button className="quick-view-btn">👁️ Voir</button>
                                </div>
                                <div className="product-details">
                                    <h3>{product.name}</h3>
                                    <div className="rating">
                                        {renderRatingStars(product.rating)}
                                        <span>({product.rating})</span>
                                    </div>
                                    <p className="product-desc">{product.description}</p>
                                    <div className="price">{product.price}</div>
                                    <button className="add-to-cart-btn">
                                        🛒 Ajouter au Panier
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Purchase Form Modal */}
            {showForm && (
                <div className="modal-overlay">
                    <div className="purchase-form">
                        <div className="form-header">
                            <h2>Formulaire d'Achat</h2>
                            <button 
                                className="close-btn"
                                onClick={() => setShowForm(false)}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Nom *</label>
                                    <input
                                        type="text"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Prénom *</label>
                                    <input
                                        type="text"
                                        name="prenom"
                                        value={formData.prenom}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Téléphone *</label>
                                    <input
                                        type="tel"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Entreprise</label>
                                    <input
                                        type="text"
                                        name="entreprise"
                                        value={formData.entreprise}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Quantité *</label>
                                    <input
                                        type="number"
                                        name="quantite"
                                        value={formData.quantite}
                                        onChange={handleInputChange}
                                        min="1"
                                        required
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Adresse *</label>
                                    <input
                                        type="text"
                                        name="adresse"
                                        value={formData.adresse}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Ville *</label>
                                    <input
                                        type="text"
                                        name="ville"
                                        value={formData.ville}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Pays *</label>
                                    <input
                                        type="text"
                                        name="pays"
                                        value={formData.pays}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Message (Optionnel)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="3"
                                        placeholder="Informations supplémentaires..."
                                    />
                                </div>
                            </div>

                            <button type="submit" className="submit-btn">
                                Confirmer l'Achat
                            </button>
                        </form>
                    </div>
                </div>
            )}

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
                            <span><a href="#"><i className="bi bi-facebook"></i></a></span>
                            <span><a href="#"><i className="bi bi-twitter-x"></i></a></span>
                            <span><a href="#"><i className="bi bi-instagram"></i></a></span>
                            <span><a href="#"><i className="bi bi-linkedin"></i></a></span>
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