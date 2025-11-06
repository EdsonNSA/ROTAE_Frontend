import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
// Importação do CSS renomeada
import './Footer.css'; 

const Footer = () => {
  // Mock de links e informações de contato
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
        
        {/* Coluna 1: Informações e Logo */}
        <div className="ft-footer-section ft-footer-info">
          <Link to="/" className="ft-footer-logo-link">
            <img src="/ROTAE.png" alt="RotaÊ Logo" className="ft-footer-logo" />
            <span className="ft-footer-logo-text">RotaÊ</span>
          </Link>
          <p className="ft-tagline">Seu guia definitivo para o autêntico Belo Jardim.</p>
          <div className="ft-social-links">
            <a href="#" target="_blank" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" target="_blank" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" target="_blank" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
        
        {/* Coluna 2: Links Rápidos */}
        <div className="ft-footer-section ft-footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            {linksUteis.map((link, index) => (
              <li key={index}><Link to={link.path}>{link.name}</Link></li>
            ))}
          </ul>
        </div>
        
        {/* Coluna 3: Contato */}
        <div className="ft-footer-section ft-footer-contact">
          <h4>Fale Conosco</h4>
          <p><FaPhone /> {infoContato.telefone}</p>
          <p><FaEnvelope /> {infoContato.email}</p>
          <p>{infoContato.endereco}</p>
        </div>
      </div>
      
      {/* Direitos Autorais e Créditos */}
      <div className="ft-footer-bottom">
        <p>&copy; {new Date().getFullYear()} RotaÊ - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;