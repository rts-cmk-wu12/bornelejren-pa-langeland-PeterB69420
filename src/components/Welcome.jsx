
export default function Welcome() {
    return (
        <>
        <section className="welcome">
            <div className="welcome__content">
                <h1 className="welcome__title">Velkommen til Børnelejren på Langeland</h1>
                <div className="welcome__container">
                    <p className="welcome__text">Børnelejren på Langeland er en forening, der udelukkende har til formål at sende dårligt
                        stillede børn og unge sammen med deres pædagoger på et ophold i landlige omgivelser på
                        det naturskønne Sydlangeland.</p>
                    <p className="welcome__text">Der er mange børn i verden, der ikke har det så godt, som de burde have det. Det gælder
                        desværre også i Danmark. Der er børn med medfødte handicap, børn der er blevet
                        alvorligt syge, børn der lider under omsorgssvigt eller bliver udsat for overgreb, børn der
                        har mistet én af eller begge deres forældre, børn der er tvangsfjernet fra deres hjem og
                        familie, børn der bliver mobbet i skolen, børn der vokser op i meget fattige familier, børn
                        fra skilsmisse- og sammenbragte familier - vi kender allesammen et barn, der tilhører en af
                        disse grupper, og det er disse børn, vi gerne vil gøre noget for.</p>
                    <p className="welcome__text">Foreningen Børnelejren på Langeland samler penge ind fra erhvervslivet, fonde og private
                        til at sende dårligt stillede børn på et velfortjent lejrophold på Søgård. <span className="welcome__text-span">Hjælp os med at
                            hjælpe dem!</span></p>
                </div>
                <div className="welcome__image">
                    <img src="/pool.jpg" alt="pool" /> 
                </div>
            </div>
            </section>
        </>
    )
}   