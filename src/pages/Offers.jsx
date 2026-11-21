
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Offers.css";

const offers = [
    {
        id: 1,
        tag: "SPECIAL SET",
        title: "Engagement Moments",
        description:
            "Everything you need to make your engagement moments even more special, with beautifully coordinated handmade details.",
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
        items: "Engagement trays & personalised details",
    },
    {
        id: 2,
        tag: "MADE WITH LOVE",
        title: "Wedding Essentials",
        description:
            "Thoughtfully created pieces to add a personal touch to your Katb Ketab and wedding celebrations.",
        image:
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900",
        items: "Handkerchiefs & wedding accessories",
    },
    {
        id: 3,
        tag: "THOUGHTFUL GIFTS",
        title: "Little Gifts, Big Feelings",
        description:
            "Discover personalised handmade gifts, created with care to celebrate the people and moments you love.",
        image:
            "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=900",
        items: "Personalised gifts & keepsakes",
    },
];

function Offers() {
    return (
        <>
            <Navbar />

            <main className="offers-page">

                {/* Hero */}
                <section className="offers-hero">
                    <span className="offers-eyebrow">
                        SOMETHING SPECIAL FOR YOU
                    </span>

                    <h1>A little something special.</h1>

                    <p>
                        Thoughtful pieces, lovely combinations, and special
                        offers made to make your moments even more memorable.
                    </p>
                </section>

                {/* Offers */}
                <section className="offers-section">

                    <div className="offers-heading">
                        <span className="offers-eyebrow">
                            MADE TO MAKE YOU SMILE
                        </span>

                        <h2>Explore our offers</h2>

                        <p>
                            Find a little something that feels just right
                            for your special occasion.
                        </p>
                    </div>

                    <div className="offers-grid">
                        {offers.map((offer) => (
                            <article className="offer-card" key={offer.id}>

                                <div className="offer-image">
                                    <img
                                        src={offer.image}
                                        alt={offer.title}
                                    />

                                    <span className="offer-tag">
                                        {offer.tag}
                                    </span>
                                </div>

                                <div className="offer-info">
                                    <h3>{offer.title}</h3>

                                    <p className="offer-description">
                                        {offer.description}
                                    </p>

                                    <p className="offer-items">
                                        {offer.items}
                                    </p>

                                    <a
                                        href="/contact"
                                        className="offer-btn"
                                    >
                                        Explore Offer
                                        <span>→</span>
                                    </a>
                                </div>

                            </article>
                        ))}
                    </div>
                </section>

                {/* Custom Offer Banner */}
                <section className="custom-offer-banner">
                    <span className="offers-eyebrow">
                        YOUR IDEA, OUR HANDS
                    </span>

                    <h2>Have something special in mind?</h2>

                    <p>
                        Tell us what you're dreaming of, and let's create
                        something made just for you.
                    </p>

                    <a href="/contact" className="custom-offer-btn">
                        Create Your Own Piece
                        <span>→</span>
                    </a>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default Offers;
