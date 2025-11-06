import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { FaStar, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

import './Lugares.css'; 

const mockLugares = [
  {
    id: '1',
    nome: 'Cristo',
    categoria: 'Histórico/Religioso',
    mediaAvaliacao: 4.7,
    totalAvaliacoes: 154,
    descricao: 'Importante marco cultural e religioso da cidade, com uma estátua imponente e local de oração.',
    fotoUrl: '/cristo.jpg', 
  },
  {
    id: '2',
    nome: 'Restaurante Panela de Barro',
    categoria: 'Gastronomia',
    mediaAvaliacao: 4.5,
    totalAvaliacoes: 89,
    descricao: 'Comida regional nordestina autêntica, servida em um ambiente familiar e acolhedor.',
    fotoUrl: '/panela_de_barro.jpg', 
  },
  {
    id: '3',
    nome: 'Parque do Bambu',
    categoria: 'Natureza/Lazer',
    mediaAvaliacao: 4.8,
    totalAvaliacoes: 210,
    descricao: 'Área verde com trilhas, vista panorâmica e o famoso Cristo Redentor local. Ótimo para piqueniques.',
    fotoUrl: '/parque_do_bambu.jpg',
  },
  {
    id: '4',
    nome: 'Museu Memórias Vivas',
    categoria: 'Cultural',
    mediaAvaliacao: 4.2,
    totalAvaliacoes: 55,
    descricao: 'Coleção de peças que contam a história de Belo Jardim e sua evolução industrial.',
    fotoUrl: '/museu_memorias_vivas.jpg',
  },
];

function Lugares() {
  const [lugares, setLugares] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState('Todos');
  const [termoBusca, setTermoBusca] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLugares(mockLugares);
      setLoading(false);
    }, 300);
  }, []);

  const renderEstrelas = (media) => {
    const estrelasCheias = Math.floor(media);
    const estrelasParciais = Array(estrelasCheias).fill('★');
    const estrelasVazias = Array(5 - estrelasCheias).fill('☆');
    return (
      <span className="lg-rating-stars">
        {estrelasParciais.join('')}
        {estrelasVazias.join('')}
      </span>
    );
  };

  const lugaresFiltrados = lugares.filter(lugar => {
    const categoriaMatch = filtroCategoria === 'Todos' || lugar.categoria.includes(filtroCategoria);
    
    const buscaMatch = lugar.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
                       lugar.descricao.toLowerCase().includes(termoBusca.toLowerCase());

    return categoriaMatch && buscaMatch;
  });

  const categoriasUnicas = ['Todos', ...new Set(mockLugares.map(l => l.categoria.split('/')[0].trim()))];

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
    <div className="lg-lugares-container lg-airbnb-style">
      <h1>Pontos de Interesse em Belo Jardim</h1>
      
      <div className="lg-filter-bar">
        <div className="lg-search-input-group">
          <FaSearch className="lg-search-icon" />
          <input
            type="text"
            placeholder="Buscar por nome ou categoria..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            className="lg-search-input"
          />
        </div>
        
        <select 
          value={filtroCategoria} 
          onChange={(e) => setFiltroCategoria(e.target.value)}
          className="lg-category-select"
        >
          {categoriasUnicas.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="lg-lugares-list-airbnb">
        {lugaresFiltrados.length > 0 ? (
          lugaresFiltrados.map(lugar => (
            <Link to={`/lugares/${lugar.id}`} key={lugar.id} className="lg-atracao-card-link">
              <div className="lg-atracao-card">
                <div className="lg-card-image-atracao" style={{ backgroundImage: `url(${lugar.fotoUrl || '/placeholder.jpg'})` }}>
                  <span className="lg-selo-destaque">{getSelo(lugar)}</span>
                  <FaStar className="lg-heart-icon" /> 
                </div>
                <div className="lg-card-info-atracao">
                  <h4>{lugar.nome}</h4>
                  <p className="lg-card-price-atracao">{lugar.preco === 'R$ 0' ? 'Gratuito' : `A partir de R$ ${lugar.preco}`}</p>
                  <div className="lg-card-rating-atracao">
                    <FaStar color="gold" /> {lugar.mediaAvaliacao.toFixed(1)} ({lugar.totalAvaliacoes})
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="lg-no-results">Nenhum local encontrado para os filtros selecionados.</p>
        )}
      </div>
    </div>
  );
}

export default Lugares;