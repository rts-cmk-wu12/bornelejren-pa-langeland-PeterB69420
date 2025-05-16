import React, { useEffect, useState } from "react";

export default function SponsorOverview() {
    const [sponsorList, setSponsorList] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("sponsorList")) || [];
        setSponsorList(data);
    }, []);

    if (sponsorList.length === 0) {
        return <p>Ingen sponsorer endnu.</p>;
    }

    return (
        <section className="sponsor-overview">
            <p className="sponsor-overview__text">Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet
                foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård
                - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer,
                virksomhedssponsorer og donationer fra fonde</p>
            <h2 className="sponsor-overview__title">En særlig tak til:</h2>
            {sponsorList.map((sponsor, index) => (
                <div key={index} className="sponsor-overview__item">
                    <p className="sponsor-overview__detail">{sponsor.companyName}</p>
                </div>
            ))}
           
        </section>
    );
}
