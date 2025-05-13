import Nav from '../components/nav';
import React from 'react';
import '../style/navbar.scss';
import '../style/main.scss';
import '../style/hero.scss';
import '../style/footer.scss';
import '../style/form.scss';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Formular from '../components/Formular';

export default function Omos() {
    return (
        <>
        <main className="main">
        <div id="wrapper">
            <Nav />
            <Hero />
            <Formular />
        </div>
        </main>
        <Footer />
        </>
    )
}