
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

const whatsappNumber = "201000000000"; // غيري الرقم لرقم البراند

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        const name = data.get("name");
        const phone = data.get("phone");
        const email = data.get("email");
        const piece = data.get("piece");
        const quantity = data.get("quantity");
        const colors = data.get("colors") || "Not specified";
        const eventDate = data.get("eventDate") || "Not specified";
        const description = data.get("description") || "No additional notes";
        const referenceImage = data.get("referenceImage");

        const message = `
Hello Lamsa! I'd like to submit a custom order.

*Your Details*
Name: ${name}
Phone: ${phone}
Email: ${email}

*Your Piece*
Selected Piece: ${piece}
Quantity: ${quantity}
Preferred Colors: ${colors}
Event Date: ${eventDate}

*Design Description & Notes*
${description}

Reference Image: ${
            referenceImage && referenceImage.size > 0
                ? referenceImage.name
                : "Not attached"
        }

Please contact me with the details and quote. Thank you!
        `;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <>
            <Navbar />

            <main className="contact-page">
                {/* Intro Section */}
                <section className="contact-hero">
                    <span className="contact-eyebrow">LET'S MAKE IT PERSONAL</span>

                    <h1>Let's create something just for you.</h1>

                    <p>
                        Choose a piece you love, or describe your dream design.
                        We will reply with a sketch, the details, and a quote.
                    </p>
                </section>

                {/* Contact Content */}
                <section className="contact-content">

                    {/* Left Side */}
                    <div className="contact-left">

                        <div className="how-it-works">
                            <span className="contact-section-label">
                                THE PROCESS
                            </span>

                            <h2>How it works</h2>

                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div>
                                    <h3>Send your request</h3>
                                    <p>Fill in the form. It takes about two minutes.</p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-number">2</div>
                                <div>
                                    <h3>We reply on WhatsApp</h3>
                                    <p>
                                        Within 24 hours with a sketch and a quote.
                                    </p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-number">3</div>
                                <div>
                                    <h3>Approve, we create</h3>
                                    <p>
                                        Once you approve, we start making your
                                        piece by hand.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="whatsapp-box">
                            <div className="whatsapp-icon">
                                <i className="fab fa-whatsapp"></i>
                            </div>

                            <h3>Prepare to chat.</h3>

                            <p>
                                Send us a message and a photo directly on
                                WhatsApp.
                            </p>

                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noreferrer"
                                className="whatsapp-contact-btn"
                            >
                                <i className="fab fa-whatsapp"></i>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="contact-form-card">
                        <form onSubmit={handleSubmit}>

                            <div className="form-heading">
                                <span className="contact-section-label">
                                    WE'D LOVE TO HEAR FROM YOU
                                </span>
                                <h2>Your details</h2>
                            </div>

                            {/* Your Details */}
                            <div className="form-section">
                                <h3 className="form-section-title">
                                    Your details
                                </h3>

                                <div className="form-group">
                                    <label htmlFor="name">
                                        Your name <span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        Your phone number <span>*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="e.g. 01xxxxxxxxx"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        Your email <span>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Your Piece */}
                            <div className="form-section">
                                <h3 className="form-section-title">
                                    Your piece
                                </h3>

                                <div className="form-group">
                                    <label htmlFor="piece">
                                        Choose a piece <span>*</span>
                                    </label>
                                    <select
                                        id="piece"
                                        name="piece"
                                        defaultValue=""
                                        required
                                    >
                                        <option value="" disabled>
                                            Choose a piece or full custom
                                        </option>
                                        <option value="Engagement Trays">
                                            Engagement Trays
                                        </option>
                                        <option value="Embroidered Hoops">
                                            Embroidered Hoops
                                        </option>
                                        <option value="Katb Ketab Handkerchiefs">
                                            Katb Ketab Handkerchiefs
                                        </option>
                                        <option value="Wedding Accessories">
                                            Wedding Accessories
                                        </option>
                                        <option value="Event Decorations">
                                            Event Decorations
                                        </option>
                                        <option value="Personalised Gifts">
                                            Personalised Gifts
                                        </option>
                                        <option value="Full Custom Design">
                                            Full Custom Design
                                        </option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="quantity">
                                        Quantity <span>*</span>
                                    </label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        min="2"
                                        step="1"
                                        defaultValue="1"
                                        required
                                    />
                                    <small>Minimum order: 2 pieces</small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="colors">
                                        Preferred colors
                                        <span className="optional">Optional</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="colors"
                                        name="colors"
                                        placeholder="e.g. Ivory, blush pink, gold..."
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="eventDate">
                                        Event date
                                        <span className="optional">Optional</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="eventDate"
                                        name="eventDate"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">
                                        Design description & notes
                                        <span className="optional">Optional</span>
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows="5"
                                        placeholder="Tell us about your dream design, details, names, dates..."
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="referenceImage">
                                        Reference image
                                        <span className="optional">Optional</span>
                                    </label>

                                    <div className="upload-area">
                                        <input
                                            type="file"
                                            id="referenceImage"
                                            name="referenceImage"
                                            accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                                        />
                                        <div className="upload-text">
                                            <span className="upload-symbol">+</span>
                                            <strong>Upload an image</strong>
                                            <small>
                                                JPG, PNG or WEBP (Optional)
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="payment-note">
                                <span>♡</span>
                                <p>
                                    No payment needed now. We will confirm the
                                    details and price with you first.
                                </p>
                            </div>

                            <button type="submit" className="submit-request-btn">
                                Submit Request
                                <span>→</span>
                            </button>

                            <p className="form-required-note">
                                * Required fields
                            </p>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Contact;
