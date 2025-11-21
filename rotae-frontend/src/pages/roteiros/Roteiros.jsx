import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Roteiros.css'; 
import {FaClock, FaTag, FaStar, FaRoute } from 'react-icons/fa';
import imgPraça from '../../images/praça.jpg';
import imgCachoeira from '../../images/cachoeira.jpg';
import imgArtesanato from '../../images/artesanato.jpg';

const mockRoteiros = [
  {
    id: 'R01',
    titulo: 'Natureza e Águas de Belo Jardim',
    tema: 'Aventura',
    duracao: 'Dia Inteiro (8h)',
    custoMedio: 'Baixo (R$ 30 - R$ 80)',
    descricao: 'Roteiro focado nos atrativos naturais: visita à Cachoeira do Bitury e piquenique.',
    pontosChave: ['Cachoeira do Bitury', 'Bica do Bitury', 'Barragem do Bitury'],
    mediaAvaliacao: 4.9,
    parceiroPremium: true,
    fotoUrl: imgCachoeira,
  },
  {
    id: 'R02',
    titulo: 'Centro de Artesanato Tareco e Mariola',
    tema: 'Cultural',
    duracao: 'Meio Período (4h)',
    custoMedio: 'Médio (R$ 50 - R$ 300)',
    descricao: 'Imersão na história de Belo Jardim e sua exposição de artesanatos locais.',
    pontosChave: ['Centro de Artesanato'],
    mediaAvaliacao: 4.6,
    parceiroPremium: false,
    fotoUrl: imgArtesanato,
  },
  {
    id: 'R03',
    titulo: 'Passeio Urbano e Histórico',
    tema: 'Urbano/Histórico',
    duracao: 'Meio Período (4h)',
    custoMedio: '(Grátis)',
    descricao: 'Caminhada pelas praças centrais (Motoristas e Conceição), finalizando no Parque do Bambu.',
    pontosChave: ['Praça dos Motoristas', 'Igreja Matriz', 'Parque do Bambu'],
    mediaAvaliacao: 4.4,
    parceiroPremium: true,
    fotoUrl: imgPraça,
  },
];

function Roteiros() {
  const [roteiros, setRoteiros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRoteiros(mockRoteiros);
      setLoading(false);
    }, 300);
  }, []);
  

  const renderEstrelas = (media) => {
    const estrelasCheias = Math.floor(media);
    const estrelas = [];
    for (let i = 0; i < 5; i++) {
      if (i < estrelasCheias) {
        estrelas.push(<FaStar key={`star-full-${i}`} style={{ color: 'var(--texto-rating-star)' }} />);
      } else {
        estrelas.push(<FaStar key={`star-empty-${i}`} style={{ color: 'var(--cor-detalhe)' }} />);
      }
    }
    return <span className="rtn-rating-stars">{estrelas}</span>;
  };

  if (loading) {
    return <div className="rtn-loading-message">Carregando roteiros prontos...</div>;
  }

  return (
    <div className="rtn-roteiros-container">
      <div>
        <h1 className="rt-section-title">Roteiros Prontos para Explorar</h1>
        <p className="rt-subtitle">Escolha seu caminho: Aventura, Cultura ou Gastronomia em Belo Jardim.</p>
      </div>
      
      <div className="rtn-custom-roteiro-cta">
        <FaRoute className="rtn-route-icon" />
        <p>Não encontrou o que procurava? </p>
        <Link to="#" className="rtn-cta-custom-button">Crie Seu Próprio Roteiro!</Link>
        {/* <Link to="/criar-roteiro" className="rtn-cta-custom-button">Crie Seu Próprio Roteiro!</Link> */}
      </div>

      <div className="rtn-roteiros-list">
        {roteiros.length > 0 ? (
          roteiros.map(roteiro => (
            <div key={roteiro.id} className="rtn-roteiro-card">
              <div className="rtn-card-image" style={{ backgroundImage: `url(${roteiro.fotoUrl})` }}>
                <span className="rtn-card-tag rtn-card-tag-theme">{roteiro.tema}</span>
                {roteiro.parceiroPremium && <span className="rtn-card-tag rtn-card-tag-premium">PREMIUM</span>}
              </div>
              
              <div className="rtn-card-details">
                <h3>{roteiro.titulo}</h3>
                
                <div className="rtn-card-meta">
                  <p><FaClock /> <strong>Duração:</strong> {roteiro.duracao}</p>
                  <p><FaTag /> <strong>Custo Médio:</strong> {roteiro.custoMedio}</p>
                </div>
                
                <p className="rtn-card-description">{roteiro.descricao}</p>
                
                <div className="rtn-card-rating-points">
                  <span className="rtn-rating-value">{roteiro.mediaAvaliacao.toFixed(1)}</span>
                  {renderEstrelas(roteiro.mediaAvaliacao)}
                </div>

                <Link to={`#`} className="rtn-cta-details-button">
                    Ver Roteiro Completo
                </Link>

                {/* <Link to={`/roteiros/${roteiro.id}`} className="rtn-cta-details-button">
                    Ver Roteiro Completo
                </Link> */}
              </div>
            </div>
          ))
        ) : (
          <p className="rtn-no-results">Nenhum roteiro cadastrado no momento.</p>
        )}
      </div>
    </div>
  );
}

export default Roteiros;