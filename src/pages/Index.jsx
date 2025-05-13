import Nav from '../components/nav';
import React from 'react';
import '../style/navbar.scss';
import '../style/main.scss';
import '../style/welcome.scss';
import '../style/hero.scss';
import '../style/footer.scss';
import Welcome from '../components/Welcome';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Index() {
    return (
        <>
        <main className="main">
        <div id="wrapper">
            <Nav />
            <Hero />
            <Welcome />
            
        </div>
        </main>
        <Footer />
        </>
    )
}