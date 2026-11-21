
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Home.css";

const collections = [
    {
        name: "Engagement Trays",
        image: "/images/trays.jpg",
        path: "trays"
    },
    {
        name: "Katb Ketab Handkerchiefs",
        image: "/images/Katb Ketab Handkerchiefs.jpg",
        path: "handkerchiefs"
    },
    {
        name: "Embroidery Hoops",
        image: "/images/Embroidery Hoops.jpg",
        path: "hoops"
    },
    {
        name: "Event Decorations",
        image: "/images/Event Decorations.jpg",
        path: "decorations"
    }
];

const creativeProcess = [
    {
        number: "01",
        icon: "✎",
        title: "We Listen",
        description:
            "We start with a chat about your occasion, your colours, and the little details that matter to you."
    },
    {
        number: "02",
        icon: "✧",
        title: "We Sketch",
        description:
            "We turn your ideas into a design and share the sketch with you for your approval."
    },
    {
        number: "03",
        icon: "✂",
        title: "We Make",
        description:
            "Every piece is carefully handcrafted with love and attention to every little detail."
    },
    {
        number: "04",
        icon: "♡",
        title: "We Wrap",
        description:
            "Your finished piece is beautifully wrapped and prepared for your special moment."
    }
];

function Home() {
    return (
        <>
            <Navbar />

            <main className="home-page">

                <section className="home-hero">
                    <div className="hero-content">
                        <span className="section-label">
                            HANDMADE WEDDING & ENGAGEMENT ACCESSORIES
                        </span>

                        <h1>
                            Handcrafted with Love,
                            <br />
                            <em>Made for Your Special Moments.</em>
                        </h1>

                        <p>
                            Beautiful handmade details, thoughtfully designed
                            to make your special moments unforgettable.
                        </p>

                        <div className="hero-buttons">
                            <a href="#collections" className="btn-primary">
                                Explore Our Collection
                            </a>

                            <Link to="/about" className="btn-outline">
                                Discover Our Story
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="meet-artist">
                    <div className="artist-image">
                        <img
                             src="/images/hero.jpg"
                            alt="Creative handmade work"
                        />
                    </div>

                    <div className="artist-content">
                        <span className="section-label">Meet the artist</span>

                        <h2>
                            A small atelier,
                            <em> a lot of love.</em>
                        </h2>

                        <p>
                            Lamsa — لمسة, “a touch” — began at a kitchen table
                            with a single embroidery hoop for a friend's
                            engagement. Today it's a little studio where every
                            tray, handkerchief and keepsake is still made the
                            same way: slowly, by hand, and only for you.
                        </p>

                        <br />

                        <p>
                            We work closely with every bride, groom and family
                            to turn their colours, names and memories into
                            pieces that are kept long after the celebration ends.
                        </p>

                        <Link to="/about" className="text-link">
                            Read Our Story →
                        </Link>
                    </div>
                </section>

                {/* Creative Process Section */}
                <section className="process-section">
                    <div className="process-heading">
                        <span className="section-label">
                            FROM IDEA TO HANDMADE
                        </span>

                        <h2>
                            The Creative Process:
                            <br />
                            <em>How Your Piece Comes to Life.</em>
                        </h2>

                        <p>
                            A calm, personal process where you get to see and
                            approve every step before a single stitch is made.
                        </p>
                    </div>

                    <div className="process-cards">
                        {creativeProcess.map((step) => (
                            <div className="process-card" key={step.number}>
                                <div className="process-card-top">
                                    <span className="process-number">
                                        {step.number}
                                    </span>

                                    <span className="process-icon">
                                        {step.icon}
                                    </span>
                                </div>

                                <h3>{step.title}</h3>

                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="collections-section" id="collections">
                    <div className="section-heading">
                        <span className="section-label">
                            EXPLORE OUR COLLECTIONS
                        </span>

                        <h2>
                            Made for <em>every chapter.</em>
                        </h2>

                        <p>
                            Discover handmade pieces created for your most
                            meaningful celebrations.
                        </p>
                    </div>

                   <div className="collections-grid">
    {collections.map((item, index) => (
        <Link
            to={`/collections?category=${item.path}`}
            className="collection-card"
            key={index}
        >
            <img src={item.image} alt={item.name} />

            <div className="collection-overlay">
                <span>{item.name}</span>
            </div>
        </Link>
    ))}
</div>
                </section>

                <section className="create-section" id="contact">
                    <div className="create-content">
                        <span className="section-label">
                            MADE JUST FOR YOU
                        </span>

                        <h2>
                            Let's create together.
                            <br />
                            <em>Have a moment in mind?</em>
                        </h2>

                        <p>
                            Tell us your ideas, favourite colours and special
                            details. Let's create something meaningful together.
                        </p>

                        <a
                            href="https://wa.me/201000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default Home;
