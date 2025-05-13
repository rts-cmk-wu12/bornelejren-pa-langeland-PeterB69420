import Nav from '../components/nav';
import React from 'react';
import '../style/navbar.scss';
import '../style/main.scss';
import '../style/hero.scss';
import '../style/footer.scss';
import '../style/overview.scss';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SponsorOverview from '../components/Sponsoroverview';

export default function Overview() {
    return (
        <>
        <main className="main">
        <div id="wrapper">
            <Nav />
            <Hero />
            <SponsorOverview />
        </div>
        </main>
        <Footer />
        </>
    )
}