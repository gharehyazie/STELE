import Header from "./Header";
import HeroSection from "./HeroSection";
import SecondarySection from "./SecondarySection";
import PortfolioGallery from "./PortfolioGallery";
import ProofSection from "./ProofSection";
import PhotoSection from "./PhotoSection";
import ServicesSection from "./ServicesSection";
import ProductsSection from "./ProductsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="w-full min-h-screen bg-white" id="top">
      <Header />
      <HeroSection />
      <SecondarySection />
      <ProofSection />
      <PhotoSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="products">
        <ProductsSection />
      </div>
      <div id="portfolio">
        <PortfolioGallery />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
