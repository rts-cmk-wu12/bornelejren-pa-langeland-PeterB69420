import Nav from '../components/nav';
import React from 'react';
import '../style/navbar.scss';
import '../style/main.scss';
import '../style/hero.scss';
import '../style/footer.scss';
import '../style/about.scss';
import Footer from '../components/Footer';

export default function Omos() {
    return (
        <>
        <main className="main">
        <div id="wrapper">
            <Nav />
            <section className="aboutus">
                <div className="aboutus__content">
                    
                    <div className="aboutus__container">
                    <h2 className="aboutus__title">Om os</h2>
                        <div className="aboutus__container-item">
                            <p className="aboutus__text">Børnelejren på Langeland er en velgørende, non-profit forening, som afholder
                                finansierede lejre for dårligt stillede børn og unge fra hele landet. Børnelejrene bliver
                                afholdt på foreningens bondegård, Søgård Hovedgård, som ligger i naturskønne
                                omgivelser på sydspidsen af Langeland. Samtlige omkostninger til alle børns ophold og
                                transport til/fra lejren bliver finansieret af foreningen, og det er et krav fra foreningens
                                side, at der ikke opkræves brugerbetaling af børnenes forældre for opholdet på Søgård.</p>
                        </div>
                        <div className="aboutus__container-item">
                        <p className="aboutus__text">Foreningens bestyrelse og frivillige hjælpere arbejder ulønnet for Foreningen.
                            Medarbejderne fra institutionerne på foreningens lejre, får ikke kolonitillæg udbetalt af
                            Foreningen.</p>
                        </div>
                        <div className="aboutus__container-item">
                        <p className="aboutus__text">Det er primært virksomheder og støttemedlemmer, der finansierer foreningens drift og
                            aktiviteter. Vi har heldigvis erfaret, at rigtig mange virksomheder er villige til at bakke op
                            omkring lejren, ligesom vi håber på endnu flere private, passive støttemedlemmer.</p>
                        </div>
                        <div className="aboutus__container-item">
                        <p className="aboutus__text">Alle skriftlige henvendelser vedrørende Foreningen Børnelejren på Langeland og Søgård
                            Hovedgård bedes venligst sendt til Knud Bro Alle 1, st. mf., 3660 Stenløse. Telefoniske
                            henvendelser bedes ligeledes rettet til sekretariatet på telefon 38711260. Foreningens
                            formand er dagligt at træffe i sekretariatet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </main>
        <Footer />
        </>
    )
}