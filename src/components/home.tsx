import Header from "./Header";
import HeroSection from "./HeroSection";
import SecondarySection from "./SecondarySection";
import PortfolioGallery from "./PortfolioGallery";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SecondarySection />
      <PortfolioGallery />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
