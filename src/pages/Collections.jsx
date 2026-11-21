
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Collections.css";

const categories = [
    { id: "all", label: "All Pieces" },
    {
        id: "trays",
        label: "Engagement Trays",
        subtitle: "صواني الخطوبة",
        description: "Beautifully handcrafted trays designed to present your engagement rings and precious details. Elegant touches, delicate finishes and designs made especially for your special moment.",
        image: "/images/trays.jpg",
    },
    {
        id: "hoops",
        label: "Embroidered Hoops",
        subtitle: "طارات التطريز",
        description: "Personalised embroidery hoops made to preserve your favourite names, dates and memories. Every stitch tells a little story, carefully made by hand.",
        image: "/images/Embroidery Hoops.jpg",
    },
    {
        id: "handkerchiefs",
        label: "Katb Ketab Handkerchiefs",
        subtitle: "مناديل كتب الكتاب",
        description: "Delicate embroidered handkerchiefs created for your Katb Ketab ceremony. Personalised with names, dates and thoughtful details to treasure forever.",
        image: "/images/Katb Ketab Handkerchiefs.jpg",
    },
    {
        id: "decorations",
        label: "Event Decorations",
        subtitle: "ديكورات المناسبات",
        description: "Special handmade decorations designed to bring your celebration to life. Personalised details that make every corner feel memorable.",
        image: "/images/Event Decorations.jpg",
    },
];

const products = [
    // Engagement Trays
    {
        id: 1,
        category: "trays",
        name: "The Classic Engagement Tray",
        description: "A timeless handmade tray for your engagement rings. صينية خطوبة بتفاصيل أنيقة.",
        price: 1450,
        image: "/images/trays.jpg",
    },
    {
        id: 2,
        category: "trays",
        name: "The Blush Ring Tray",
        description: "Soft blush details made for your special day. صينية خطوبة بلمسات وردية.",
        price: 1650,
        image: "/images/صينيه1.jpeg",
    },
    {
        id: 3,
        category: "trays",
        name: "Personalised Ring Tray",
        description: "Customised with your names and favourite colours. صينية بأسمائكم وألوانكم المفضلة.",
        price: 1750,
        image: "/images/صينيه2.jpeg",
    },

    // Embroidered Hoops
    {
        id: 4,
        category: "hoops",
        name: "The Forever Hoop",
        description: "A delicate embroidered keepsake made with love. طارة تطريز تفضل ذكرى جميلة.",
        price: 850,
        image: "/images/طاره1.jpg",
    },
    {
        id: 5,
        category: "hoops",
        name: "Floral Embroidery Hoop",
        description: "Floral details and delicate handmade stitches. تطريز وردي بتفاصيل رقيقة.",
        price: 950,
        image: "/images/طاره2.jpg",
    },
    {
        id: 6,
        category: "hoops",
        name: "Name & Date Hoop",
        description: "Personalised with your names and special date. طارة مطرزة بالأسماء والتاريخ.",
        price: 1100,
        image: "/images/Embroidery Hoops.jpg",
    },

    // Katb Ketab Handkerchiefs
    {
        id: 7,
        category: "handkerchiefs",
        name: "The Classic Handkerchief",
        description: "Elegant embroidery for your Katb Ketab day. منديل كتب كتاب بتطريز أنيق.",
        price: 650,
        image: "/images/كتب كتاب1.jpg",
    },
    {
        id: 8,
        category: "handkerchiefs",
        name: "Personalised Couple Set",
        description: "A matching set personalised with both names. طقم مناديل بأسماء العروسين.",
        price: 950,
        image: "/images/كتب كتاب2.jpg",
    },
    {
        id: 9,
        category: "handkerchiefs",
        name: "Floral Katb Ketab Set",
        description: "Soft floral embroidery for a meaningful memory. تطريز رقيق ليوم مميز.",
        price: 800,
        image: "/images/كتب كتاب3.jpg",
    },

    // Event Decorations
    {
        id: 13,
        category: "decorations",
        name: "The Celebration Table",
        description: "Handmade details to make your table unforgettable. تفاصيل يدوية لطاولة مناسبتك.",
        price: 600,
        image: "/images/ديكور1.jpeg",
    },
    {
        id: 14,
        category: "decorations",
        name: "Elegant Event Details",
        description: "Personalised decorations for your special celebration. ديكورات مخصصة لمناسبتك.",
        price: 900,
        image: "/images/ديكور2.jpeg",
    },
    {
        id: 15,
        category: "decorations",
        name: "The Welcome Corner",
        description: "A beautiful handmade touch for your event. ركن استقبال بتفاصيل مميزة.",
        price: 950,
        image: "/images/ديكور3.jpeg",
    },
];

const normalizeSearchText = (value = "") => {
    return value
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u064B-\u065F\u0670]/g, "")
        .replace(/[أإآ]/g, "ا")
        .replace(/ى/g, "ي")
        .trim();
};

function Collections() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [activeCategory, setActiveCategory] = useState(
        searchParams.get("category") || "all"
    );

    const [searchTerm, setSearchTerm] = useState(
        searchParams.get("search") || ""
    );

    const [sortOption, setSortOption] = useState("featured");
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const category = searchParams.get("category") || "all";
        const search = searchParams.get("search") || "";

        const validCategory = categories.some(
            (item) => item.id === category
        );

        setActiveCategory(validCategory ? category : "all");
        setSearchTerm(search);
    }, [searchParams]);

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);

        setSearchParams((previousParams) => {
            const params = new URLSearchParams(previousParams);

            if (categoryId === "all") {
                params.delete("category");
            } else {
                params.set("category", categoryId);
            }

            return params;
        });
    };

    const filteredProducts = products
        .filter((product) => {
            const matchesCategory =
                activeCategory === "all" ||
                product.category === activeCategory;

            const category = categories.find(
                (item) => item.id === product.category
            );

            const searchableText = normalizeSearchText([
                product.name,
                product.description,
                category?.label,
                category?.subtitle,
                category?.description,
            ].join(" "));

            const matchesSearch = searchableText.includes(
                normalizeSearchText(searchTerm)
            );

            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            if (sortOption === "price-low") return a.price - b.price;
            if (sortOption === "price-high") return b.price - a.price;
            return a.id - b.id;
        });

    const visibleCategories =
        activeCategory === "all"
            ? categories.filter((category) => category.id !== "all")
            : categories.filter((category) => category.id === activeCategory);

    const formatPrice = (price) =>
        `EGP ${price.toLocaleString("en-EG")}`;

    const whatsappLink = (product, action) =>
        `https://wa.me/201000000000?text=${encodeURIComponent(
            `Hello Lamsa! I would like to ${action} "${product.name}".`
        )}`;

    return (
        <>
            <Navbar />

            <main className="collections-page">

                {/* Collections Hero */}
                <section className="collections-hero">
                    <span className="section-label">
                        THE LAMSA COLLECTION
                    </span>

                    <h1>
                        Handmade for every moment,
                        <br />
                        <em>made to be yours.</em>
                    </h1>

                    <p>
                        Explore every piece, find the details you love,
                        <br />
                        then request it as it is or made your way.
                    </p>
                </section>

                {/* Search and Sort */}
                <section className="collection-tools">
                    <div className="collection-search">
                        <span className="search-icon">⌕</span>

                        <input
                            type="text"
                            placeholder="Search by name or collection..."
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                    </div>

                    <div className="collection-sort">
                        <label htmlFor="sort-products">Sort</label>

                        <select
                            id="sort-products"
                            value={sortOption}
                            onChange={(event) => setSortOption(event.target.value)}
                        >
                            <option value="featured">Featured First</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>
                </section>

                {/* Category Filters */}
                <section className="category-filters">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={
                                activeCategory === category.id
                                    ? "category-pill active"
                                    : "category-pill"
                            }
                            onClick={() => handleCategoryChange(category.id)}
                        >
                            <span className="category-dot"></span>
                            {category.label}
                        </button>
                    ))}
                </section>

                {/* Products */}
                <section className="collection-results">

                    <div className="results-count">
                        Showing <strong>{filteredProducts.length}</strong> pieces
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="no-products">
                            <h2>No pieces found</h2>
                            <p>Try another name or collection.</p>
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    setActiveCategory("all");
                                    setSearchParams({});
                                }}
                            >
                                Clear Search
                            </button>
                        </div>
                    ) : (
                        visibleCategories.map((category) => {
                            const categoryProducts = filteredProducts.filter(
                                (product) => product.category === category.id
                            );

                            if (categoryProducts.length === 0) return null;

                            return (
                                <section
                                    className="product-category-section"
                                    key={category.id}
                                >
                                    <div className="category-heading">
                                        <div className="category-cover">
                                            <img
                                                src={category.image}
                                                alt={category.label}
                                            />
                                        </div>

                                        <div className="category-intro">
                                            <span className="section-label">
                                                HANDMADE WITH LOVE
                                            </span>

                                            <h2>{category.label}</h2>

                                            <span className="category-arabic">
                                                {category.subtitle}
                                            </span>

                                            <p>{category.description}</p>

                                            <span className="category-piece-count">
                                                {categoryProducts.length} Pieces
                                            </span>
                                        </div>
                                    </div>

                                    <div className="collection-products-grid">
                                        {categoryProducts.map((product) => (
                                            <article
                                                className="collection-product-card"
                                                key={product.id}
                                            >
                                                <div className="collection-product-image">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                    />
                                                </div>

                                                <div className="collection-product-info">
                                                    <span className="product-category-name">
                                                        {category.label}
                                                    </span>

                                                    <h3>{product.name}</h3>

                                                    <p>{product.description}</p>

                                                    <div className="collection-product-price">
                                                        {formatPrice(product.price)}
                                                    </div>

                                                    <div className="collection-product-actions">
                                                        <button
                                                            className="view-details-btn"
                                                            onClick={() =>
                                                                setSelectedProduct(product)
                                                            }
                                                        >
                                                            View Details
                                                        </button>

                                                        <a
                                                            href={whatsappLink(
                                                                product,
                                                                "request"
                                                            )}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="request-design-btn"
                                                        >
                                                            Request This Design
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </section>
                            );
                        })
                    )}
                </section>

                {/* Product Details Popup */}
                {selectedProduct && (
                    <div
                        className="product-modal-overlay"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <div
                            className="product-modal"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                className="modal-close"
                                onClick={() => setSelectedProduct(null)}
                            >
                                ×
                            </button>

                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                            />

                            <div className="modal-info">
                                <span className="section-label">
                                    LAMSA HANDMADE
                                </span>

                                <h2>{selectedProduct.name}</h2>

                                <p>{selectedProduct.description}</p>

                                <strong>
                                    {formatPrice(selectedProduct.price)}
                                </strong>

                                <a
                                    href={whatsappLink(
                                        selectedProduct,
                                        "get more details about"
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="request-design-btn"
                                >
                                    Ask About This Piece
                                </a>
                            </div>
                        </div>
                    </div>
                )}

            </main>

            <Footer />
        </>
    );
}

export default Collections;
