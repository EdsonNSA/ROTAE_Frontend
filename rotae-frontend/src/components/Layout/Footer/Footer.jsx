import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  const infoContato = {
    telefone: '(81) 9999-0000',
    email: 'contato@rotae.com.br',
    endereco: 'Belo Jardim, Pernambuco - Brasil'
  };

  const linksUteis = [
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Termos de Uso', path: '/termos' },
    { name: 'Política de Privacidade', path: '/privacidade' },
    { name: 'Trabalhe Conosco', path: '/trabalhe' },
    { name: 'Parceiros Premium', path: '/parceiros' },
  ];

  return (
    <footer className="ft-main-footer">
      <div className="ft-footer-content">
        <div className="ft-footer-section ft-footer-info">
          <Link to="/" className="ft-footer-logo-link">
            <img src="/ROTAE.png" alt="RotaÊ Logo" className="ft-footer-logo" />
            <span className="ft-footer-logo-text">RotaÊ</span>
          </Link>
          <p className="ft-tagline">Seu guia definitivo para o autêntico Belo Jardim.</p>
          <div className="ft-social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
        
        <div className="ft-footer-section ft-footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            {linksUteis.map((link, index) => (
              <li key={index}><Link to={link.path}>{link.name}</Link></li>
            ))}
          </ul>
        </div>
    
        <div className="ft-footer-section ft-footer-contact">
          <h4>Fale Conosco</h4>
          <p><FaPhone /> {infoContato.telefone}</p>
          <p><FaEnvelope /> {infoContato.email}</p>
          <p><FaMapMarkerAlt /> {infoContato.endereco}</p>
        </div>
      </div>
    
      <div className="ft-footer-bottom">
        <p>&copy; {new Date().getFullYear()} RotaÊ - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;