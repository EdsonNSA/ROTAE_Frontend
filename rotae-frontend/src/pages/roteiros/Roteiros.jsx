import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMap, FaClock, FaTag, FaSearch, FaStar, FaRoute } from 'react-icons/fa';
import './Roteiros.css'; 

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
    fotoUrl: '/images/cachoeira.jpg',
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
    fotoUrl: '/images/artesanato.jpg',
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
    fotoUrl: '/images/praca.jpg',
  },
];

function Roteiros() {
  const [roteiros, setRoteiros] = useState([]);
  const [filtroTema, setFiltroTema] = useState('Todos');
  const [termoBusca, setTermoBusca] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRoteiros(mockRoteiros);
      setLoading(false);
    }, 300);
  }, []);
  const roteirosFiltrados = roteiros.filter(roteiro => {
    const temaMatch = filtroTema === 'Todos' || roteiro.tema.includes(filtroTema);
    const buscaMatch = roteiro.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
                       roteiro.descricao.toLowerCase().includes(termoBusca.toLowerCase());
    return temaMatch && buscaMatch;
  });

  const temasUnicos = ['Todos', ...new Set(mockRoteiros.map(r => r.tema.split('/')[0].trim()))];
  
  const renderEstrelas = (media) => {
    const estrelasCheias = Math.floor(media);
    const estrelasParciais = Array(estrelasCheias).fill('★');
    const estrelasVazias = Array(5 - estrelasCheias).fill('☆');
    return (
      <span className="rtn-rating-stars">
        {estrelasParciais.join('')}
        {estrelasVazias.join('')}
      </span>
    );
  };

  if (loading) {
    return <div className="rtn-loading-message">Carregando roteiros prontos...</div>;
  }

  return (
    <div className="rtn-roteiros-container">
      <h1>Roteiros Prontos para Explorar</h1>
      <p className="rtn-subtitle">Escolha seu caminho: Aventura, Cultura ou Gastronomia em Belo Jardim.</p>
      <div className="rtn-filter-bar">
        <div className="rtn-search-input-group">
          <FaSearch className="rtn-search-icon" />
          <input
            type="text"
            placeholder="Buscar por tema ou pontos de interesse..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            className="rtn-search-input"
          />
        </div>
        
        <select 
          value={filtroTema} 
          onChange={(e) => setFiltroTema(e.target.value)}
          className="rtn-category-select"
        >
          {temasUnicos.map(tema => (
            <option key={tema} value={tema}>{tema}</option>
          ))}
        </select>
      </div>
      <div className="rtn-custom-roteiro-cta">
        <FaRoute className="rtn-route-icon" />
        <p>Não encontrou o que procurava? </p>
        <Link to="/criar-roteiro" className="rtn-cta-custom-button">Crie Seu Próprio Roteiro!</Link>
      </div>

      <div className="rtn-roteiros-list">
        {roteirosFiltrados.length > 0 ? (
          roteirosFiltrados.map(roteiro => (
            <div key={roteiro.id} className="rtn-roteiro-card">
              <div className="rtn-card-image" style={{ backgroundImage: `url(${roteiro.fotoUrl || '/placeholder.jpg'})` }}>
                <span className="rtn-card-tag rtn-card-tag-theme">{roteiro.tema}</span>
                {roteiro.parceiroPremium && <span className="rtn-card-tag rtn-card-tag-premium">PREMIUM</span>}
              </div>
              
              <div className="rtn-card-details">
                <h3>{roteiro.titulo}</h3>
                
                <div className="rtn-card-meta">
                    <p><FaClock /> **Duração:** {roteiro.duracao}</p>
                    <p><FaTag /> **Custo Médio:** {roteiro.custoMedio}</p>
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
          <p className="rtn-no-results">Nenhum roteiro encontrado para os filtros selecionados.</p>
        )}
      </div>
    </div>
  );
}

export default Roteiros;