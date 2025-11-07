import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Lugares.css'; 

const FaStar = () => (
  <svg viewBox="0 0 576 512" fill="currentColor" height="1em" width="1em" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
  </svg>
);

const mockLugares = [
  {
    id: '1',
    nome: 'Cristo',
    categoria: 'Histórico/Religioso',
    mediaAvaliacao: 4.7,
    totalAvaliacoes: 154,
    descricao: 'Importante marco cultural e religioso da cidade, com uma estátua imponente e local de oração.',
    fotoUrl: 'https://placehold.co/600x400/1A2B44/F0F4F8?text=Cristo', 
  },
  {
    id: '2',
    nome: 'Restaurante Panela de Barro',
    categoria: 'Gastronomia',
    mediaAvaliacao: 4.5,
    totalAvaliacoes: 89,
    descricao: 'Comida regional nordestina autêntica, servida em um ambiente familiar e acolhedor.',
    fotoUrl: 'https://placehold.co/600x400/1A2B44/F0F4F8?text=Panela+de+Barro', 
  },
  {
    id: '3',
    nome: 'Parque do Bambu',
    categoria: 'Natureza/Lazer',
    mediaAvaliacao: 4.8,
    totalAvaliacoes: 210,
    descricao: 'Área verde com trilhas, vista panorâmica e o famoso Cristo Redentor local. Ótimo para piqueniques.',
    fotoUrl: 'https://placehold.co/600x400/1A2B44/F0F4F8?text=Parque+do+Bambu',
  },
  {
    id: '4',
    nome: 'Museu Memórias Vivas',
    categoria: 'Cultural',
    mediaAvaliacao: 4.2,
    totalAvaliacoes: 55,
    descricao: 'Coleção de peças que contam a história de Belo Jardim e sua evolução industrial.',
    fotoUrl: 'https://placehold.co/600x400/1A2B44/F0F4F8?text=Museu',
  },
];

function Lugares() {
  const [lugares, setLugares] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLugares(mockLugares);
      setLoading(false);
    }, 300);
  }, []);

  const getSelo = (lugar) => {
    if (lugar.mediaAvaliacao >= 4.8) return 'Superstar';
    if (lugar.categoria.includes('Gastronomia')) return 'Comida Local';
    if (lugar.categoria.includes('Histórico')) return 'Cultura';
    return lugar.categoria.split('/')[0].trim();
  };

  if (loading) {
    return <div className="lg-loading-message">Buscando lugares incríveis...</div>;
  }

  return (
    <div className="lg-lugares-container">
      
      <div>
        <h1 className="rt-section-title">Pontos de Interesse em Belo Jardim</h1>
        <p className="rt-subtitle">Explore o melhor que a cidade tem a oferecer.</p>
      </div>
      
      <div className="lg-lugares-list-airbnb">
        {lugares.length > 0 ? (
          lugares.map(lugar => (
            <Link to={`/lugares/${lugar.id}`} key={lugar.id} className="lg-atracao-card-link">
              <div className="lg-atracao-card">
                <div className="lg-card-image-atracao" style={{ backgroundImage: `url(${lugar.fotoUrl})` }}>
                  <span className="lg-selo-destaque">{getSelo(lugar)}</span>
                </div>
                <div className="lg-card-info-atracao">
                  <h4>{lugar.nome}</h4>
                  <div className="lg-card-rating-atracao">
                    <FaStar /> {lugar.mediaAvaliacao.toFixed(1)} ({lugar.totalAvaliacoes} avaliações)
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="lg-no-results">Nenhum local cadastrado no momento.</p>
        )}
      </div>
    </div>
  );
}

export default Lugares;