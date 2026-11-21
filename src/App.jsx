
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";

function ScrollToTop() {
    const { pathname, search } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, search]);

    return null;
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <FloatingWhatsApp />
        </BrowserRouter>
    );
}

export default App;
