
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const categories = [
    { id: "trays", label: "Engagement Trays", arabic: "صواني الخطوبة" },
    { id: "hoops", label: "Embroidered Hoops", arabic: "طارات التطريز" },
    { id: "handkerchiefs", label: "Katb Ketab Handkerchiefs", arabic: "مناديل كتب الكتاب" },
    { id: "decorations", label: "Event Decorations", arabic: "ديكورات المناسبات" },
];

const products = [
    { id: 1, name: "The Classic Engagement Tray", category: "trays", description: "صينية خطوبة بتفاصيل أنيقة" },
    { id: 2, name: "The Blush Ring Tray", category: "trays", description: "صينية خطوبة بلمسات وردية" },
    { id: 3, name: "Personalised Ring Tray", category: "trays", description: "صينية بأسمائكم وألوانكم المفضلة" },

    { id: 4, name: "The Forever Hoop", category: "hoops", description: "طارة تطريز تفضل ذكرى جميلة" },
    { id: 5, name: "Floral Embroidery Hoop", category: "hoops", description: "تطريز وردي بتفاصيل رقيقة" },
    { id: 6, name: "Name & Date Hoop", category: "hoops", description: "طارة مطرزة بالأسماء والتاريخ" },

    { id: 7, name: "The Classic Handkerchief", category: "handkerchiefs", description: "منديل كتب كتاب بتطريز أنيق" },
    { id: 8, name: "Personalised Couple Set", category: "handkerchiefs", description: "طقم مناديل بأسماء العروسين" },
    { id: 9, name: "Floral Katb Ketab Set", category: "handkerchiefs", description: "تطريز رقيق ليوم مميز" },

    { id: 13, name: "The Celebration Table", category: "decorations", description: "تفاصيل يدوية لطاولة مناسبتك" },
    { id: 14, name: "Elegant Event Details", category: "decorations", description: "ديكورات مخصصة لمناسبتك" },
    { id: 15, name: "The Welcome Corner", category: "decorations", description: "ركن استقبال بتفاصيل مميزة" },
];

const normalizeSearch = (value = "") =>
    value
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u064B-\u065F\u0670]/g, "")
        .replace(/[أإآ]/g, "ا")
        .replace(/ى/g, "ي")
        .trim();

function Navbar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchOpen, setSearchOpen] = useState(false);

    const normalizedTerm = normalizeSearch(searchTerm);

    const matchingProducts = normalizedTerm
        ? products.filter((product) => {
            const category = categories.find(
                (item) => item.id === product.category
            );

            const searchableText = normalizeSearch([
                product.name,
                product.description,
                category?.label,
                category?.arabic,
            ].join(" "));

            return searchableText.includes(normalizedTerm);
        }).slice(0, 6)
        : [];

    const goToCategory = (categoryId) => {
        setSearchOpen(false);
        setSearchTerm("");
        navigate(`/collections?category=${categoryId}`);
    };

    const goToProduct = (product) => {
        setSearchOpen(false);
        setSearchTerm(product.name);
        navigate(`/collections?search=${encodeURIComponent(product.name)}`);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        if (!searchTerm.trim()) return;

        setSearchOpen(false);
        navigate(`/collections?search=${encodeURIComponent(searchTerm.trim())}`);
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <Link to="/" className="navbar-logo">
                <div className="logo-circle">L</div>

                <div className="logo-text">
                    <span className="logo-name">Lamsa</span>
                    <span className="logo-subtitle">ATELIER · لمسة</span>
                </div>
            </Link>

            {/* Navigation Links */}
            <div className="navbar-links">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/collections">COLLECTIONS</NavLink>
                <NavLink to="/offers">OFFERS</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </div>

            {/* Search */}
            <div className="navbar-right">
                <div
                    className="navbar-search-wrapper"
                    onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) {
                            setSearchOpen(false);
                        }
                    }}
                >
                    <form
                        className={`navbar-search ${searchOpen ? "search-active" : ""}`}
                        onSubmit={handleSearchSubmit}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="search-icon"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="m16 16 4 4" />
                        </svg>

                        <input
                            type="text"
                            placeholder="Search trays, hoops, handkerchiefs..."
                            value={searchTerm}
                            onFocus={() => setSearchOpen(true)}
                            onClick={() => setSearchOpen(true)}
                            onChange={(event) => {
                                setSearchTerm(event.target.value);
                                setSearchOpen(true);
                            }}
                        />

                        {searchTerm && (
                            <button
                                type="button"
                                className="search-clear"
                                onClick={() => setSearchTerm("")}
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}

                        {!searchTerm && (
                            <span className="search-shortcut">⌘K</span>
                        )}
                    </form>

                    {searchOpen && (
                        <div className="search-dropdown">
                            {!normalizedTerm ? (
                                <>
                                    <p className="search-dropdown-title">
                                        BROWSE BY COLLECTION
                                    </p>

                                    <div className="search-category-list">
                                        {categories.map((category) => (
                                            <button
                                                type="button"
                                                key={category.id}
                                                className="search-category-item"
                                                onClick={() => goToCategory(category.id)}
                                            >
                                                <span>
                                                    <strong>{category.label}</strong>
                                                    <small>{category.arabic}</small>
                                                </span>
                                                <span className="search-arrow">→</span>
                                            </button>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="search-dropdown-title">
                                        SEARCH RESULTS
                                    </p>

                                    {matchingProducts.length > 0 ? (
                                        <div className="search-product-list">
                                            {matchingProducts.map((product) => {
                                                const category = categories.find(
                                                    (item) => item.id === product.category
                                                );

                                                return (
                                                    <button
                                                        type="button"
                                                        key={product.id}
                                                        className="search-product-item"
                                                        onClick={() => goToProduct(product)}
                                                    >
                                                        <span>
                                                            <strong>{product.name}</strong>
                                                            <small>{category?.label}</small>
                                                        </span>
                                                        <span className="search-arrow">→</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div className="search-empty">
                                            <strong>No pieces found</strong>
                                            <span>Try another name or collection.</span>
                                        </div>
                                    )}

                                    <button
                                        type="button"
                                        className="search-view-all"
                                        onClick={handleSearchSubmit}
                                    >
                                        View all search results
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>

                <a
                    href="https://wa.me/201000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="navbar-whatsapp"
                    aria-label="Chat on WhatsApp"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z" />
                        <path d="M8.8 8.2c.3-.5.6-.5.9-.5h.4c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .7.5.8 1.2 1.4 2 1.8.2.1.4.1.6-.1l.7-.8c.2-.2.4-.3.7-.2l1.6.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.4-1.1.6-1.8.4-1.1-.3-2.4-.9-3.7-2.1-1.1-1-2-2.3-2.2-3.3-.2-.7 0-1.5.5-2Z" />
                    </svg>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
