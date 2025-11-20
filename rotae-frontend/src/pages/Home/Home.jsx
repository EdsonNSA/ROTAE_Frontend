import React, { useState, useEffect } from 'react';
import { FaSearch, FaMountain, FaUtensils, FaUsers, FaCalendarAlt, FaStar, FaRoute } from 'react-icons/fa';
import './Home.css';
import imgcarrossel1 from '../../images/carrossel1.jpeg';
import imgCristo from '../../images/Cristo.jpg';
import imgBambu from '../../images/Parque_do_Bambu.jpg';
import imgMuseu from '../../images/museu_memorias_vivas.jpg';
import imgPanela from '../../images/panela_de_barro.jpg';
import imgcarrossel2 from '../../images/carrossel2.jpeg';
import imgcarrossel3 from '../../images/carrossel3.jpg';

const heroImages = [
    imgcarrossel1,
    imgcarrossel2,
    imgcarrossel3 
];

const categorias = [
    { titulo: 'Atrativos Naturais', icone: <FaMountain />, link: '#', corDestaque: '#14B8A6' },
    { titulo: 'Gastronomia Local', icone: <FaUtensils />, link: '#', corDestaque: '#FFA726' },
    { titulo: 'Cultura e História', icone: <FaCalendarAlt />, link: '#', corDestaque: '#4FC3F7' },
    { titulo: 'Roteiros Prontos', icone: <FaRoute />, link: '#', corDestaque: '#AB47BC' },
    { titulo: 'Serviços Turísticos', icone: <FaUsers />, link: '#', corDestaque: '#EC407A' },
];

const atracoesPopulares = [
    { id: 1, nome: 'Museu Memórias Vivas', preco: "R$ 0", avaliacao: 4.8, reviews: 320, fotoUrl: imgMuseu, selo: "Preferido ROTAÊ" },
    { id: 2, nome: 'Restaurante Panela de Barro', preco: "R$ 45/pessoa", avaliacao: 4.6, reviews: 150, fotoUrl: imgPanela, selo: "Imperdível" },
    { id: 3, nome: 'Parque do Bambu', preco: "R$ 0", avaliacao: 4.9, reviews: 500, fotoUrl: imgBambu, selo: "Natureza" },
    { id: 4, nome: 'Cristo', preco: "R$ 0", avaliacao: 4.4, reviews: 80, fotoUrl: imgCristo, selo: "Religião" },
];


function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % heroImages.length
            );
        }, 5000); 

        return () => clearInterval(intervalId);
    }, []);


    const handleLinkClick = (e) => {
        e.preventDefault();
        console.log("Navegando para: " + e.currentTarget.href);
    };

    return (
        <main className="rt-home-container">
            

            <section className="rt-hero-section">
                
                <div className="rt-hero-carousel">
                    {heroImages.map((imageUrl, index) => (
                        <div
                            key={index}
                            className={`rt-hero-image ${index === currentImageIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${imageUrl})` }}
                        />
                    ))}
                </div>

                <div className="rt-hero-content">
                    <h1 className="rt-main-search-title">Venha conhecer Belo Jardim!</h1>
                    
                        <div className="rt-search-input-group">
                            <FaSearch className="rt-search-icon" /> 
                            <input 
                                type="text" 
                                placeholder="Buscar lugares, eventos..." 
                                className="rt-search-input"
                            />
                    </div>
                </div>

            </section>

            <div className="rt-main-content-wrapper">

                <section className="rt-categories-section-airbnb">
                    <h2 className="rt-section-title">Explore por Tema</h2>
                    <div className="rt-category-scroll-wrapper">
                        {categorias.map((categoria, index) => (
                            <a href={categoria.link} key={index} className="rt-category-item-airbnb" style={{ '--icon-color': categoria.corDestaque }} onClick={handleLinkClick}>
                                {categoria.icone}
                                <span>{categoria.titulo}</span>
                            </a>
                        ))}
                    </div>
                </section>

                <section className="rt-main-content-section">
                    
                    <h2 className="rt-section-title">Atrações Imperdíveis</h2>
                    <p className="rt-subtitle">
                        Confira os roteiros mais procurados
                    </p>

                    
                    <div className="rt-attraction-cards-grid">
                        {atracoesPopulares.map((atracao) => (
                            <a href={`/lugares/${atracao.id}`} key={atracao.id} className="rt-atracao-card-link" onClick={handleLinkClick}>
                                <div className="rt-atracao-card">
                                    <div className="rt-card-image-atracao" style={{ backgroundImage: `url(${atracao.fotoUrl})` }}>
                                        <span className="rt-selo-destaque">{atracao.selo}</span>
                                    </div>
                                    <div className="rt-card-info-atracao">
                                        <div>
                                            <span className="location">Belo Jardim</span>
                                            <h4>{atracao.nome}</h4>
                                        </div>
                                        <div>
                                            <div className="rt-card-details">
                                                <p className="rt-card-price-atracao">{atracao.preco}</p>
                                                <div className="rt-card-rating-atracao">
                                                    <FaStar /> {atracao.avaliacao} ({atracao.reviews})
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                </section>
            
            </div> 
            
        </main>
    );
}

export default Home;