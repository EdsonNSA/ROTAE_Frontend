import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import imgPanela from '../../images/panela_de_barro.jpg';
import imgCristo from '../../images/Cristo.jpg';
import imgBambu from '../../images/Parque_do_Bambu.jpg';
import imgMuseu from '../../images/museu_memorias_vivas.jpg';
import './Lugares.css'; 
import {FaStar} from 'react-icons/fa';

const mockLugares = [
  {
    id: '1',
    nome: 'Cristo',
    categoria: 'Histórico/Religioso',
    mediaAvaliacao: 4.7,
    totalAvaliacoes: 154,
    descricao: 'Importante marco cultural e religioso da cidade.',
    fotoUrl: imgCristo, 
  },
  {
    id: '2',
    nome: 'Restaurante Panela de Barro',
    categoria: 'Gastronomia',
    mediaAvaliacao: 4.5,
    totalAvaliacoes: 89,
    descricao: 'Comida regional nordestina, servida em um ambiente familiar e acolhedor.',
    fotoUrl: imgPanela, 
  },
  {
    id: '3',
    nome: 'Parque do Bambu',
    categoria: 'Natureza/Lazer',
    mediaAvaliacao: 4.8,
    totalAvaliacoes: 210,
    descricao: 'Area de lazer com playground infantil, quadras e ótimo para caminhadas.',
    fotoUrl: imgBambu,
  },
  {
    id: '4',
    nome: 'Museu Memórias Vivas',
    categoria: 'Cultural',
    mediaAvaliacao: 4.2,
    totalAvaliacoes: 55,
    descricao: 'Coleção de peças que contam a história de Belo Jardim e sua evolução industrial.',
    fotoUrl: imgMuseu,
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

                        <Link to={`#`} key={lugar.id} className="lg-atracao-card-link">
              <div className="lg-atracao-card">
                <div className="lg-card-image-atracao" style={{ backgroundImage: `url(${lugar.fotoUrl})` }}>
                  <span className="lg-selo-destaque">{getSelo(lugar)}</span>
                </div>
                <div className="lg-card-info-atracao">
                  <h4>{lugar.nome}</h4>
                  <p className="lg-card-description">{lugar.descricao}</p>
                  <div className="lg-card-rating-atracao">
                    <FaStar /> {lugar.mediaAvaliacao.toFixed(1)} ({lugar.totalAvaliacoes} avaliações)
                  </div>
                </div>
              </div>
            </Link>

            // <Link to={`/lugares/${lugar.id}`} key={lugar.id} className="lg-atracao-card-link">
            //   <div className="lg-atracao-card">
            //     <div className="lg-card-image-atracao" style={{ backgroundImage: `url(${lugar.fotoUrl})` }}>
            //       <span className="lg-selo-destaque">{getSelo(lugar)}</span>
            //     </div>
            //     <div className="lg-card-info-atracao">
            //       <h4>{lugar.nome}</h4>
            //       <p className="lg-card-description">{lugar.descricao}</p>
            //       <div className="lg-card-rating-atracao">
            //         <FaStar /> {lugar.mediaAvaliacao.toFixed(1)} ({lugar.totalAvaliacoes} avaliações)
            //       </div>
            //     </div>
            //   </div>
            // </Link>
          ))
        ) : (
          <p className="lg-no-results">Nenhum local cadastrado no momento.</p>
        )}
      </div>
    </div>
  );
}

export default Lugares;