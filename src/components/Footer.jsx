
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                {/* Brand */}
                <div className="footer-brand">
                    <h2>Lamsa</h2>
                    <span>ATELIER · لمسة</span>
                    <p>
                        Handmade engagement trays, katb ketab handkerchiefs,
                        embroidery and keepsakes — each piece stitched, wired
                        and wrapped by hand for your once-in-a-lifetime moments.
                    </p>
                </div>

                {/* Explore */}
                <div className="footer-links">
                    <h3>Explore</h3>
                    <Link to="/about">About Us</Link>
                    <Link to="/collections">Collections</Link>
                    <Link to="/offers">Offers</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* Collections */}
                <div className="footer-links">
                    <h3>Collections</h3>
                    <Link to="/collections?category=trays">Engagement Trays</Link>
                    <Link to="/collections?category=hoops">Embroidered Hoops</Link>
                    <Link to="/collections?category=handkerchiefs">Katb Ketab Handkerchiefs</Link>
                    <Link to="/collections?category=decorations">Event Decorations</Link>
                </div>

                {/* Say Hello */}
                <div className="footer-links footer-contact">
                    <h3>Say Hello</h3>

                    <a href="https://wa.me/201000000000" target="_blank" rel="noreferrer">
                        WhatsApp
                    </a>

                    <a href="tel:+201000000000">
                        Phone
                    </a>

                    <a href="mailto:hello@lamsa.com">
                        Email
                    </a>

                    <div className="footer-socials">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                                <rect x="3" y="3" width="18" height="18" rx="5"/>
                                <circle cx="12" cy="12" r="4"/>
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                            </svg>
                        </a>

                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.6V3.7c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.5Z"/>
                            </svg>
                        </a>

                        <a href="https://wa.me/201000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/>
                                <path d="M9 8.5c.5 2 2 3.5 4.5 4.5l1-1 2 1c-.3 1.5-1.5 2-3 1.5-3-1-5.5-3.5-6-6-.2-1 .5-2 1.5-2Z"/>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Lamsa. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
