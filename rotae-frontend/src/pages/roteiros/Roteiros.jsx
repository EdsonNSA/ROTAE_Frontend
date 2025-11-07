import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Roteiros.css'; 

const FaMap = () => (
  <svg viewBox="0 0 576 512" fill="currentColor" height="1em" width="1em" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M565.6 112.2C554.2 97.1 536.9 88 518.3 88H424V40c0-22.1-17.9-40-40-40H120c-22.1 0-40 17.9-40 40v48H57.7C39.1 88 21.8 97.1 10.4 112.2S-2.6 142.9 2.4 159.8L50 320h18V128h20v200c0 13.3 10.7 24 24 24H274c13.3 0 24-10.7 24-24V128h20v200c0 13.3 10.7 24 24 24h62c13.3 0 24-10.7 24-24V128h20v192h18l47.6-160.2c5-16.9 1.9-34.9-9.6-49.9zM128 416h320v64H128v-64z" />
  </svg>
);
const FaClock = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208S370.7 464 256 464zM312 280h-56V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v160c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
  </svg>
);
const FaTag = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" height="1em" width="1em" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M0 80V224c0 17.7 14.3 32 32 32H176c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32H32C14.3 48 0 62.3 0 80zM256 48c-17.7 0-32 14.3-32 32v144c0 17.7 14.3 32 32 32H392c13.2 0 25-8.1 30.2-20.3s1.7-26.2-8.5-35L296.8 119.7l-49.8-49.8c-8.8-8.8-21.6-13.9-34.6-13.9H256zM447.1 211.3c-1.6 1.6-3.2 3.1-4.8 4.5L296.8 361.2l-49.8 49.8c-8.8 8.8-21.6 13.9-34.6 13.9H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h200.4c21 0 40.8-8.4 55.4-23l145.4-145.4c1.4-1.4 2.8-2.8 4.2-4.2c11.2-11.2 17.6-26.3 17.6-42.1V224c0-17.7-14.3-32-32-32h-1.1z" />
  </svg>
);
const FaStar = (props) => (
  <svg {...props} viewBox="0 0 576 512" fill="currentColor" height="1em" width="1em" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
  </svg>
);
const FaRoute = () => (
  <svg viewBox="0 0 640 512" fill="currentColor" height="1em" width="1em" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M416 0c-53 0-102.2 21.5-138.2 56.9C240.4 93.7 183.6 120 120 120c-13.3 0-24 10.7-24 24s10.7 24 24 24c44.2 0 86.3-17.3 118.2-45.1C275.8 106.8 336 64 416 64s140.2 42.8 177.8 77.9c31.9 27.8 74 45.1 118.2 45.1c13.3 0 24-10.7 24-24s-10.7-24-24-24c-63.6 0-120.4-26.3-158.2-71.1C422.2 21.5 373 0 320 0H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c53 0 102.2 21.5 138.2 56.9C495.6 158.7 552.4 184 616 184c13.3 0 24-10.7 24-24s-10.7-24-24-24c-44.2 0-86.3-17.3-118.2-45.1C470.2 74.8 410 32 320 32s-140.2 42.8-177.8 77.9c-31.9 27.8-74 45.1-118.2 45.1c-13.3 0-24 10.7-24 24s10.7 24 24 24c63.6 0 120.4-26.3 158.2-71.1C246.2 118.5 295 96 320 96h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zM144 480c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM512 480c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z" />
  </svg>
);


const mockRoteiros = [
  {
    id: 'R01',
    titulo: 'Natureza e Águas de Belo Jardim (1 Dia)',
    tema: 'Aventura',
    duracao: 'Dia Inteiro (8h)',
    custoMedio: 'Baixo (R$ 30 - R$ 80)',
    descricao: 'Roteiro focado nos atrativos naturais: visita à Cachoeira do Bitury e piquenique na Bica do Bitury.',
    pontosChave: ['Cachoeira do Bitury', 'Bica do Bitury', 'Barragem do Bitury'],
    mediaAvaliacao: 4.9,
    parceiroPremium: true,
    fotoUrl: 'https://placehold.co/600x400/1A2B44/F0F4F8?text=Cachoeira',
  },
  {
    id: 'R02',
    titulo: 'Cultura, Fé e Sabores Locais (2 Dias)',
    tema: 'Cultural/Gastronômico',
    duracao: '2 Dias',
    custoMedio: 'Médio (R$ 150 - R$ 300)',
    descricao: 'Imersão na história e fé. Inclui visita ao Memorial Frei Damião e jantar em restaurante regional.',
    pontosChave: ['Memorial Frei Damião', 'Centro de Artesanato', 'Praça da Conceição'],
    mediaAvaliacao: 4.6,
    parceiroPremium: false,
    fotoUrl: 'https://placehold.co/600x400/1A2B44/F0F4F8?text=Artesanato',
  },
  {
    id: 'R03',
    titulo: 'Passeio Urbano e Histórico (1/2 Dia)',
    tema: 'Urbano/Histórico',
    duracao: 'Meio Período (4h)',
    custoMedio: 'Baixo (Grátis)',
    descricao: 'Caminhada pelas praças centrais (Motoristas e Conceição), finalizando no Parque do Bambu.',
    pontosChave: ['Praça dos Motoristas', 'Igreja Matriz', 'Parque do Bambu'],
    mediaAvaliacao: 4.4,
    parceiroPremium: true,
    fotoUrl: 'https://placehold.co/600x400/1A2B44/F0F4F8?text=Praça',
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
        <Link to="/criar-roteiro" className="rtn-cta-custom-button">Crie Seu Próprio Roteiro!</Link>
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

                <Link to={`/roteiros/${roteiro.id}`} className="rtn-cta-details-button">
                    Ver Roteiro Completo
                </Link>
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