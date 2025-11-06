import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaMap, FaCalendarAlt, FaStar, FaRoute, FaMountain, FaUtensils, FaUsers, FaArrowRight } from 'react-icons/fa';
import './Home.css'; 

const categorias = [
    { titulo: 'Atrativos Naturais', icone: <FaMountain />, link: '/lugares?cat=natureza', corDestaque: '#38C172' }, 
    { titulo: 'Gastronomia Local', icone: <FaUtensils />, link: '/lugares?cat=gastronomia', corDestaque: '#00A3CC' }, 
    { titulo: 'Cultura e História', icone: <FaCalendarAlt />, link: '/eventos', corDestaque: '#2C3E50' }, 
    { titulo: 'Roteiros Prontos', icone: <FaRoute />, link: '/roteiros', corDestaque: '#6B4F43' }, 
    { titulo: 'Serviços Turísticos', icone: <FaUsers />, link: '/lugares?cat=servicos', corDestaque: '#FF9800' }, 
];

const atracoesPopulares = [
    { id: 1, nome: "Memorial Frei Damião", preco: "R$ 0", avaliacao: 4.8, reviews: 320, fotoUrl: '/images/memorial-mock.jpg', selo: "Imperdível" },
    { id: 2, nome: "Restaurante Sabor da Terra", preco: "R$ 45/pessoa", avaliacao: 4.6, reviews: 150, fotoUrl: '/images/restaurante-mock.jpg', selo: "Preferido RotaÊ" },
    { id: 3, nome: "Parque Ecológico do Cristo", preco: "R$ 10", avaliacao: 4.9, reviews: 500, fotoUrl: '/images/parque-mock.jpg', selo: "Natureza" },
    { id: 4, nome: "Centro de Artesanato Local", preco: "R$ 0", avaliacao: 4.4, reviews: 80, fotoUrl: '/images/artesanato-mock.jpg', selo: "Artesanato" },
];


function Home() {
    return (
        <main className="rt-home-container">
          
            <h1 className="rt-main-search-title">Comece sua busca em Belo Jardim.</h1>
            
            <div className="rt-filter-bar">
                
                <div className="rt-search-input-group">
                    <FaSearch className="rt-search-icon" /> 
                    
                    <input 
                        type="text" 
                        placeholder="Buscar roteiros, lugares ou eventos..." 
                        className="rt-search-input"
                    />
                </div>
                
                <select className="rt-category-select">
                    <option value="">Filtrar por Tipo</option>
                    <option value="roteiros">Roteiros</option>
                    <option value="lugares">Lugares</option>
                    <option value="eventos">Eventos</option>
                </select>
                
            </div>

            <section className="rt-categories-section-airbnb">
                <h2 className="rt-section-title">Explore por Tema</h2>
                <div className="rt-category-scroll-wrapper">
                    {categorias.map((categoria, index) => (
                        <Link to={categoria.link} key={index} className="rt-category-item-airbnb" style={{ '--icon-color': categoria.corDestaque }}>
                            {categoria.icone}
                            <span>{categoria.titulo}</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="rt-main-content-section">
                <h2 className="rt-section-title">Atrações Imperdíveis em Belo Jardim</h2>
                <div className="rt-attraction-cards-grid">
                    {atracoesPopulares.map((atracao) => (
                        <Link to={`/lugares/${atracao.id}`} key={atracao.id} className="rt-atracao-card-link">
                            <div className="rt-atracao-card">
                                <div className="rt-card-image-atracao" style={{ backgroundImage: `url(${atracao.fotoUrl})` }}>
                                    <span className="rt-selo-destaque">{atracao.selo}</span>
                                    <FaStar className="rt-heart-icon" />
                                </div>
                                <div className="rt-card-info-atracao">
                                    <h4>{atracao.nome}</h4>
                                    <p className="rt-card-price-atracao">{atracao.preco}</p>
                                    <div className="rt-card-rating-atracao">
                                        <FaStar color="gold" /> {atracao.avaliacao} ({atracao.reviews})
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            
        </main>
    );
}

export default Home;