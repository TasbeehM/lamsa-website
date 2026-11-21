
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

function About() {
    return (
        <>
            <Navbar />

            <main className="about-page">
                
<section className="about-hero">
    <div className="about-hero-content">
        <span className="section-label">OUR STORY</span>

        <h1>
            A touch of love,
            <br />
            <em>made by hand.</em>
        </h1>

        <p>
            Every Lamsa creation carries a story, a memory
            and a little piece of love.
        </p>
    </div>
</section>


                <section className="about-story">
                    <div className="about-story-image">
                        <img
                            src="/images/hero.jpg"
                            alt="Handcrafted creative work"
                        />
                    </div>

                    <div className="about-story-content">
                        <span className="section-label">MEET LAMSA</span>

                        <h2>
                            A small atelier,
                            <br />
                            <em>a lot of love.</em>
                        </h2>

                        <p>
                            Lamsa — لمسة — means a touch. We believe that
                            the smallest details can make the biggest
                            difference in life's special moments.
                        </p>

                        <p>
                            From engagement trays to embroidered
                            handkerchiefs and personalised keepsakes,
                            every piece is thoughtfully designed and
                            carefully handcrafted.
                        </p>
                    </div>
                </section>

                <section className="about-message">
                    <span className="section-label">OUR PROMISE</span>
                    <h2>
                        Made with care.
                        <br />
                        <em>Made just for you.</em>
                    </h2>
                    <p>
                        Your moments are unique, and your details should be too.
                    </p>
                    <a href="https://wa.me/201000000000" className="btn-primary">
                        Create With Us
                    </a>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default About;
