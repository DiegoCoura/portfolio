import CardsSection from "./components/CardsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import TopBar from "./components/TopBar.jsx";
import Skills from "./components/Skills.jsx";
import FooterBar from "./components/FooterBar.jsx";

function App() {
  return (
    <>
      <TopBar />
      <HeroSection />
      <Skills />
      <CardsSection />
      <ContactSection />
      <FooterBar />
    </>
  );
}

export default App;
