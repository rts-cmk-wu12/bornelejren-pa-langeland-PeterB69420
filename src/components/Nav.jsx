import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar-header">
            <div className="navbar-header__logo">
                <img src="/logo.jfif" alt="Logo" />
                <h1 className="navbar-header__title">Børnelejren</h1>
            </div>

            <nav className={`navbar-header__nav ${menuOpen ? "open" : ""}`}>
                <ul className="navbar-header__list">
                    <Link to={`/`}><li className="navbar-header__item">Forside</li></Link>
                    <Link to={`/omos`}><li className="navbar-header__item">Om os</li></Link>
                    <Link to={`/registration`}><li className="navbar-header__item">Tilmeld som sponsor</li></Link>
                    <Link to={`/overview`}><li className="navbar-header__item">Børnelejren takker</li></Link>
                </ul>
            </nav>

            
            <div className="navbar-header__burger" onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
            </div>
        </header>
    );
}