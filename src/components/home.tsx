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
    <div className="w-full min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SecondarySection />
      <PortfolioGallery />
      <ProofSection />
      <PhotoSection />
      <ServicesSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
