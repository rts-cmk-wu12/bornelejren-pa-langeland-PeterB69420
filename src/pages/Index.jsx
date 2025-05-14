import Nav from '../components/nav';
import React from 'react';
import '../style/navbar.scss';
import '../style/main.scss';
import '../style/welcome.scss';
import '../style/hero.scss';
import '../style/footer.scss';
import '../style/gallery.scss';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <>
            <main className="main">
                <div id="wrapper">
                    <Nav />
                    <div className="hero">
                        <img src="/herobg.jpg" alt="" />
                        <div className="hero__welcome-box">
                            <h2 className="hero__welcome-title">Velkommen til Børnelejren på Langeland</h2>
                            <p className="hero__welcome-text">Oplev glæden og eventyret med os!</p>
                            <Link to={`/omos`}><button className="hero__welcome-button">læs mere</button></Link>
                        </div>
                    </div>
                    <section className="welcome">
                        <div className="welcome__content">
                            <h2 className="welcome__title">Velkommen til Børnelejren på Langeland</h2>
                            <div className="welcome__container">
                                <div className="welcome__container-item">
                                    <p className="welcome__text">Børnelejren på Langeland er en forening, der udelukkende har til formål at sende dårligt
                                        stillede børn og unge sammen med deres pædagoger på et ophold i landlige omgivelser på
                                        det naturskønne Sydlangeland.</p>
                                </div>
                                <div className="welcome__container-item">
                                    <p className="welcome__text">Der er mange børn i verden, der ikke har det så godt, som de burde have det. Det gælder
                                        desværre også i Danmark. Der er børn med medfødte handicap, børn der er blevet
                                        alvorligt syge, børn der lider under omsorgssvigt eller bliver udsat for overgreb, børn der
                                        har mistet én af eller begge deres forældre, børn der er tvangsfjernet fra deres hjem og
                                        familie, børn der bliver mobbet i skolen, børn der vokser op i meget fattige familier, børn
                                        fra skilsmisse- og sammenbragte familier - vi kender allesammen et barn, der tilhører en af
                                        disse grupper, og det er disse børn, vi gerne vil gøre noget for.</p>
                                </div>
                                <div className="welcome__container-item">
                                    <p className="welcome__text">Foreningen Børnelejren på Langeland samler penge ind fra erhvervslivet, fonde og private
                                        til at sende dårligt stillede børn på et velfortjent lejrophold på Søgård. <span className="welcome__text-span">Hjælp os med at
                                            hjælpe dem!</span></p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Gallery />
                </div>
            </main>
            <Footer />
        </>
    )
}