import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTag, FaSearch } from 'react-icons/fa';
import './Eventos.css'; 

const mockEventos = [
  {
    id: 1,
    nome: 'Feira de Artesanato e Cultura Local',
    data: '15/Nov',
    local: 'Praça da Matriz',
    categoria: 'Feira',
    descricao: 'Exposição e venda de produtos artesanais e comidas típicas de Belo Jardim. Entrada gratuita.',
    preco: 'Grátis',
    link: '#',
  },
  {
    id: 2,
    nome: 'Festival de Gastronomia do Sertão',
    data: '22/Nov',
    local: 'Clube Municipal',
    categoria: 'Gastronomia',
    descricao: 'Degustação e concurso de pratos regionais. Ingressos limitados.',
    preco: 'R$ 25,00',
    link: '#',
  },
  {
    id: 3,
    nome: 'Show da Banda de Forró X',
    data: '05/Dez',
    local: 'Casa de Shows Y',
    categoria: 'Música',
    descricao: 'Grande show de forró pé de serra para encerrar o ano.',
    preco: 'R$ 50,00',
    link: '#',
  },
  {
    id: 4,
    nome: 'Exposição de Arte Sacra',
    data: 'Até 30/Nov',
    local: 'Museu Municipal',
    categoria: 'Cultural',
    descricao: 'Coleção temporária de peças religiosas raras da região.',
    preco: 'Grátis',
    link: '#',
  },
];

function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState('Todos');
  const [termoBusca, setTermoBusca] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEventos(mockEventos);
      setLoading(false);
    }, 300);
  }, []);

  const eventosFiltrados = eventos.filter(evento => {
    const categoriaMatch = filtroCategoria === 'Todos' || evento.categoria === filtroCategoria;
    const buscaMatch = evento.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
                       evento.descricao.toLowerCase().includes(termoBusca.toLowerCase());
    return categoriaMatch && buscaMatch;
  });

  const categoriasUnicas = ['Todos', ...new Set(mockEventos.map(e => e.categoria))];

  if (loading) {
    return <div className="ge-loading-message">Carregando Agenda de Eventos...</div>;
  }

  return (
    <div className="ge-eventos-container">
      <h1>Agenda de Eventos de Belo Jardim</h1>
      <p className="ge-subtitle">Descubra a cultura, gastronomia e festividades da região.</p>

      <div className="ge-filter-bar">
        <div className="ge-search-input-group">
          <FaSearch className="ge-search-icon" />
          <input
            type="text"
            placeholder="Buscar por nome ou descrição..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            className="ge-search-input"
          />
        </div>
        
        <select 
          value={filtroCategoria} 
          onChange={(e) => setFiltroCategoria(e.target.value)}
          className="ge-category-select"
        >
          {categoriasUnicas.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="ge-eventos-list">
        {eventosFiltrados.length > 0 ? (
          eventosFiltrados.map(evento => (
            <div key={evento.id} className="ge-evento-card">
              <div className="ge-event-date">
                <FaCalendarAlt />
                <span className="ge-date-day">{evento.data.split('/')[0]}</span>
                <span className="ge-date-month">{evento.data.split('/')[1]}</span>
              </div>
              
              <div className="ge-event-details">
                <h3>{evento.nome}</h3>
                <p><FaMapMarkerAlt /> Local: **{evento.local}**</p>
                <p className="ge-event-description">{evento.descricao}</p>
                <p className="ge-event-price"><FaTag /> {evento.preco}</p>
              </div>
              
              <a href={evento.link} target="_blank" rel="noopener noreferrer" className="ge-cta-button">
                 Ver Detalhes/Ingressos
              </a>
            </div>
          ))
        ) : (
          <p className="ge-no-results">Nenhum evento encontrado para os filtros selecionados.</p>
        )}
      </div>
    </div>
  );
}

export default Eventos;