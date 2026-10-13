import Header from "./components/Header";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <div className="page-shell">
        <Header />
        <Hero />
        <Ticker />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
