import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer__content">
                    <div className="footer__contact">
                        <h2 className="footer__contact-title">Kontakt:</h2>
                        <ul className="footer__contact-list">
                            <li className="footer__contact-item">Knud Bro Alle 1, st. mf.</li>
                            <li className="footer__contact-item">3660 Stenløse</li>
                            <li className="footer__contact-item">
                                Telefon: <a href="tel:38711260" className="footer__contact-link">38711260</a>
                            </li>
                            <li className="footer__item">
                                E-mail: <a href="mailto:info@lejren.dk" className="footer__contact-link">info@lejren.dk</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__social">
                        <h2 className="footer__social-title">Følg os:</h2>
                        <div className="footer__icons">
                            <a href="https://facebook.com" target="_blank" rel="" className="footer__icon" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="" className="footer__icon" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="" className="footer__icon" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="" className="footer__icon" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
