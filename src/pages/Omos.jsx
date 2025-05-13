import Nav from '../components/nav';
import React from 'react';
import '../style/navbar.scss';
import '../style/main.scss';
import '../style/hero.scss';
import '../style/footer.scss';
import '../style/about.scss';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Aboutus from '../components/aboutus';

export default function Omos() {
    return (
        <>
        <main className="main">
        <div id="wrapper">
            <Nav />
            <Hero />
            <Aboutus />
        </div>
        </main>
        <Footer />
        </>
    )
}