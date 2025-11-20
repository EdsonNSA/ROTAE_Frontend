import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {

    const renderNavLinks = () => (
        <nav className="main-nav">
            <ul className="nav-list">

                
                <li>
                    
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
                        Início
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/roteiros" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Roteiros
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/lugares" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Lugares
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/eventos" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Eventos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );

    return (
        <header className="site-header">
            

            <div className="logo">
                <Link to="/">

            <span className="ft-footer-logo-text">ROTAÊ</span>
                </Link>
            </div>
            
            {renderNavLinks()}

            <div className="header-actions">
                <Link to="/criar-roteiro" className="btn btn-primary create-button">
                    + Criar Roteiro
                </Link>
                
                <Link to="/login" className="user-icon">
                    👤
                </Link>
            </div>
        </header>
    );
};

export default Header;