import "@/styles/globals.css";
import "@/App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { siteConfig } from "./config/siteConfig";
import { CartProvider } from "./context/CartContext";

// Pages
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// ✅ Add this component file: src/components/utils/ScrollToTop.jsx
// import ScrollToTop from "./components/utils/ScrollToTop";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const isFourPage = siteConfig.site.mode === "fourPage";

  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            {/* Home is always available */}
            <Route path="/" element={<Home />} />

            {/* ✅ In fourPage mode allow these pages, otherwise redirect to home */}
            <Route
              path="/menu"
              element={isFourPage ? <MenuPage /> : <Navigate to="/" replace />}
            />
            <Route
              path="/gallery"
              element={isFourPage ? <GalleryPage /> : <Navigate to="/" replace />}
            />
            <Route
              path="/contact"
              element={isFourPage ? <ContactPage /> : <Navigate to="/" replace />}
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;