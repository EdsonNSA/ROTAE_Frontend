import React, { useState, useEffect } from 'react';
import './Eventos.css'; 


const FaCalendarAlt = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" height="1em" width="1em" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64h48V32c0-17.7 14.3-32 32-32zM0 192h448v272c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm192 80v-0c0-6.6-5.4-12-12-12s-12 5.4-12 12v0c0 6.6 5.4 12 12 12s12-5.4 12-12zm64 0v-0c0-6.6-5.4-12-12-12s-12 5.4-12 12v0c0 6.6 5.4 12 12 12s12-5.4 12-12zm-96 64v-0c0-6.6-5.4-12-12-12s-12 5.4-12 12v0c0 6.6 5.4 12 12 12s12-5.4 12-12zm64 0v-0c0-6.6-5.4-12-12-12s-12 5.4-12 12v0c0 6.6 5.4 12 12 12s12-5.4 12-12zm64-64v-0c0-6.6-5.4-12-12-12s-12 5.4-12 12v0c0 6.6 5.4 12 12 12s12-5.4 12-12zm-96 64v-0c0-6.6-5.4-12-12-12s-12 5.4-12 12v0c0 6.6 5.4 12 12 12s12-5.4 12-12zm64 0v-0c0-6.6-5.4-12-12-12s-12 5.4-12 12v0c0 6.6 5.4 12 12 12s12-5.4 12-12z" />
  </svg>
);

const FaMapMarkerAlt = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" height="1em" width="1em" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
  </svg>
);

const FaTag = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" height="1em" width="1em" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M0 80V224c0 17.7 14.3 32 32 32H176c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32H32C14.3 48 0 62.3 0 80zM256 48c-17.7 0-32 14.3-32 32v144c0 17.7 14.3 32 32 32H392c13.2 0 25-8.1 30.2-20.3s1.7-26.2-8.5-35L296.8 119.7l-49.8-49.8c-8.8-8.8-21.6-13.9-34.6-13.9H256zM447.1 211.3c-1.6 1.6-3.2 3.1-4.8 4.5L296.8 361.2l-49.8 49.8c-8.8 8.8-21.6 13.9-34.6 13.9H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h200.4c21 0 40.8-8.4 55.4-23l145.4-145.4c1.4-1.4 2.8-2.8 4.2-4.2c11.2-11.2 17.6-26.3 17.6-42.1V224c0-17.7-14.3-32-32-32h-1.1z" />
  </svg>
);


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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEventos(mockEventos);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <div className="ge-loading-message">Carregando Agenda de Eventos...</div>
    );
  }

  return (
    <div className="ge-eventos-container">
      <div>
        <h1 className="rt-section-title">Agenda de Eventos de Belo Jardim</h1>
        <p className="rt-subtitle">Descubra a cultura, gastronomia e festividades da região.</p>
      </div>

      <div className="ge-eventos-list">
        {eventos.map(evento => (
            <div key={evento.id} className="ge-evento-card">
              <div className="ge-event-date">
                <FaCalendarAlt />
                <div>
                  <span className="ge-date-day">{evento.data.split('/')[0]}</span>
                  <span className="ge-date-month">{evento.data.split('/')[1]}</span>
                </div>
              </div>
              
              <div className="ge-event-details">
                <h3>{evento.nome}</h3>
                <p><FaMapMarkerAlt /> Local: <strong>{evento.local}</strong></p>
                <p className="ge-event-description">{evento.descricao}</p>
                <p className="ge-event-price"><FaTag /> {evento.preco}</p>
              </div>
              
              <a href={evento.link} target="_blank" rel="noopener noreferrer" className="ge-cta-button">
                  Ver Detalhes/Ingressos
              </a>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Eventos;