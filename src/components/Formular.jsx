import { useState } from "react";
import { Link } from "react-router-dom";

export default function Formular() {
    const [formData, setFormData] = useState({
        supportType: "",
        companyName: "",
        email: "",
        address: "",
        phone: "",
        amount: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        const existingData = JSON.parse(localStorage.getItem("sponsorList")) || [];
        const updatedData = [...existingData, formData];
        localStorage.setItem("sponsorList", JSON.stringify(updatedData));
    };
    return (
        <>
            <section className="sponsor">
                <div className="sponsor__info">
                    <h2 className="sponsor__title">Tilmelding Som Sponsor</h2>
                    <p className="sponsor__text">Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med, har vi
                        opdelt støttemulighederne i 3 kategorier:</p>
                </div>
                <div className="sponsor__container">
                    <div className="sponsor__container-item">
                        <h3 className="sponsor__container-title">Børnesponsorat</h3>
                        <p className="sponsor__container-text">Hvis din virksomhed vælger at blive børnesponsor, dækker I omkostningerne for et
                            navngivet barns ophold og transport til og fra Langeland. Prisen pr. barn varierer fra lejr til
                            lejr, men vi har fastsat en gennemsnitspris på <span className="sponsor__price">kr. 4.000,-</span> pr. barn for et ophold. Denne pris
                            inkluderer transport, forplejning, forsikring, udflugter, adgangsbilletter til udflugtsmålene,
                            smågaver og slik til ét barn</p>
                    </div>
                    <div className="sponsor__container-item">
                        <h3 className="sponsor__container-title">Lejrsponsorat
                        </h3>
                        <p className="sponsor__container-text">For <span className="sponsor__price">kr. 2.000,-</span> kan virksomheden blive lejrsponsor og være med til at dække alle
                            omkostningerne ved børnelejren, som bl.a. omfatter ejendommens drifts- og
                            vedligeholdelsesomkostninger samt eventuelle ekstra udgifter omkring en lejr, der f.eks.
                            kan være løn til specialuddannet personale.
                        </p>
                    </div>
                    <div className="sponsor__container-item">
                        <h3 className="sponsor__container-title">Støtte til foreningen</h3>
                        <p className="sponsor__container-text">Virksomheder, der ønsker at støtte foreningens arbejde med et mindre beløb, kan vælge
                            at blive diplomsponsorer. Af administrative årsager skal der minimum støttes med
                            <span className="sponsor__price"> kr. 1.000,-</span> for at man kan modtage et trykt diplom til ophængning i virksomheden, men alle
                            støttebeløb - store som små - er naturligvis velkomne.
                        </p>
                    </div>
                </div>
                <form className="sponsor__formular" onSubmit={(e) => e.preventDefault()}>
                    <div className="sponsor-form__field">
                        <label htmlFor="supportType">Støttetype</label>
                        <select
                            id="supportType"
                            name="supportType"
                            value={formData.supportType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Vælg støttetype</option>
                            <option value="Brønesponsorat">Brønesponsorat</option>
                            <option value="Lejrsponsorat">Lejrsponsorat</option>
                            <option value="Støtte til foreningen">Støtte til foreningen</option>
                        </select>
                    </div>

                    <div className="sponsor-form__field">
                        <label htmlFor="companyName">Firmanavn</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="sponsor-form__field">
                        <label htmlFor="email">Mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="sponsor-form__field">
                        <label htmlFor="address">Adresse</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="sponsor-form__field">
                        <label htmlFor="phone">Telefon</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="sponsor-form__field">
                        <label htmlFor="amount">Beløb (DKK)</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Link to="/overview">
                        <button className="sponsor-form__button" type="button" onClick={handleSave}>
                            Submit
                        </button>
                    </Link>
                </form>
            </section>
        </>
    )
}