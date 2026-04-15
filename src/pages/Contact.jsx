import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      id: 1,
      type: "Email",
      icon: "fas fa-envelope",
      value: "contact@ang-archivage.sn",
      link: "mailto:contact@ang-archivage.sn",
      label: "Contactez-nous par email"
    },
    {
      id: 2,
      type: "WhatsApp",
      icon: "fab fa-whatsapp",
      value: "+221 76 188 55 12",
      link: "https://wa.me/221761885512",
      label: "Contactez-nous sur WhatsApp"
    },
    {
      id: 3,
      type: "Téléphone",
      icon: "fas fa-phone",
      value: "+221 188 55 12",
      link: "tel:+2211885512",
      label: "Appelez-nous"
    },
    {
      id: 4,
      type: "Localisation",
      icon: "fas fa-map-marker-alt",
      value: "Dakar, Sénégal",
      link: "#",
      label: "Visitez-nous"
    }
  ];

  const workingHours = [
    { day: "Lundi - Vendredi", hours: "08:00 - 18:00" },
    { day: "Samedi", hours: "09:00 - 14:00" },
    { day: "Dimanche", hours: "Fermé" }
  ];

  return (
    <>
      {/* HEADER CONTACT */}
      <section className="contact-header" data-aos="fade-down">
        <div className="header-content">
          <img src="/image/logo-archive.png" alt="ArchivPro Dakar" className="header-logo" />
          <h1 className="header-title">Nous Contacter</h1>
          <p className="header-subtitle">Parlons de votre projet d'archivage</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="contact-intro">
        <div className="container">
          <div className="intro-content" data-aos="fade-up">
            <h2>Réponses rapides et personnalisées</h2>
            <p>
              Notre équipe est disponible pour répondre à vos questions et discuter de votre projet. 
              Contactez-nous par email, WhatsApp ou téléphone selon votre préférence.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* FORMULAIRE */}
            <div className="contact-form-section" data-aos="fade-right">
              <h3>Envoyez-nous un message</h3>
              
              {submitted && (
                <div className="alert-success">
                  <i className="fas fa-check-circle"></i>
                  <span>Votre message a été envoyé avec succès!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+221 77 XXX XXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionnez un sujet...</option>
                    <option value="archivage">Archivage physique</option>
                    <option value="numerisation">Numérisation</option>
                    <option value="ged">Gestion Électronique (GED)</option>
                    <option value="destruction">Destruction sécurisée</option>
                    <option value="audit">Audit et conseil</option>
                    <option value="externalisation">Externalisation</option>
                    <option value="autre">Autre sujet</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  <i className="fas fa-paper-plane"></i>
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* INFORMATIONS DE CONTACT */}
            <div className="contact-info-section" data-aos="fade-left">
              <h3>Informations de Contact</h3>
              
              <div className="contact-items">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.id}
                    href={info.link}
                    className="contact-item"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                    target={info.type === "WhatsApp" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    <div className="contact-icon">
                      <i className={info.icon}></i>
                    </div>
                    <div className="contact-details">
                      <h4>{info.type}</h4>
                      <p>{info.value}</p>
                      <span className="contact-label">{info.label}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* HORAIRES */}
              <div className="working-hours" data-aos="fade-up">
                <h4><i className="fas fa-clock"></i> Horaires d'ouverture</h4>
                <div className="hours-list">
                  {workingHours.map((item, index) => (
                    <div key={index} className="hours-item">
                      <span className="day">{item.day}</span>
                      <span className="hours">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LOCALISATION */}
              <div className="quick-response" data-aos="fade-up">
                <h4><i className="fas fa-bolt"></i> Réponse rapide</h4>
                <ul>
                  <li>Email: Réponse sous 2h</li>
                  <li>WhatsApp: Réponse instantanée</li>
                  <li>Téléphone: Lun-Ven 08h-18h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="contact-map">
        <div className="container">
          <h2 data-aos="fade-down">Localisation</h2>
          <p data-aos="fade-up">Notre bureau à Dakar</p>
          
          <div className="map-container" data-aos="fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.486892147263!2d-17.052412!3d14.699674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sArchiv%20Pro%20Dakar!5e0!3m2!1sfr!2ssn!4v1"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ArchivPro Dakar Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ RAPIDE */}
      <section className="contact-faq">
        <div className="container">
          <h2 data-aos="fade-down">Questions Courantes</h2>
          
          <div className="faq-grid">
            <div className="faq-card" data-aos="fade-up">
              <h4>Quel est le délai de réponse?</h4>
              <p>
                Nous répondons généralement dans les 2 heures ouvrables pour les emails. 
                Pour une réponse instantanée, utilisez WhatsApp.
              </p>
            </div>

            <div className="faq-card" data-aos="fade-up" data-aos-delay="100">
              <h4>Proposez-vous une audit gratuit?</h4>
              <p>
                Oui, l'audit diagnostique est complètement gratuit et sans engagement. 
                Contactez-nous pour programmer une visite.
              </p>
            </div>

            <div className="faq-card" data-aos="fade-up" data-aos-delay="200">
              <h4>Acceptez-vous les appels en consultation?</h4>
              <p>
                Oui, nous proposons des consultations téléphoniques gratuites pour 
                discuter de vos besoins spécifiques.
              </p>
            </div>

            <div className="faq-card" data-aos="fade-up" data-aos-delay="300">
              <h4>Intervient-vous en dehors de Dakar?</h4>
              <p>
                Oui, nous intervenons dans toutes les régions du Sénégal. 
                Contactez-nous pour connaître nos tarifs et délais régionaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="contact-cta">
        <div className="cta-content">
          <h2>Prêt à commencer?</h2>
          <p>Demandez votre audit diagnostique gratuit dès aujourd'hui</p>
          <a href="#contact-form" className="btn-cta">Envoyer un message</a>
        </div>
      </section>
    </>
  );
};

export default Contact;