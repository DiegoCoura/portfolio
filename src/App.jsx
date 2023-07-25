import CardsSection from "./components/CardsSection/CardsSection.jsx";
import ContactSection from "./components/ContactSection/ContactSection.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import Skills from "./components/Skills/Skills.jsx";
import FooterBar from "./components/FooterBar/FooterBar.jsx";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="container-app">
        <TopBar />
        <HeroSection />
        <Skills />
        <CardsSection />
        <ContactSection />
        <FooterBar />
      </Container>
    </>
  );
}

export default App;
