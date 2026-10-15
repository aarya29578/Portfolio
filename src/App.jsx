import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import TechStackSection from './sections/TechStackSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main id="main-content">
        <AboutSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
