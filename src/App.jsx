import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import TechStackSection from './sections/TechStackSection';
import ContactSection from './sections/ContactSection';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      const cleanPath = window.location.pathname.replace(/\/+$/, '') || '/';
      return cleanPath;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const cleanPath = window.location.pathname.replace(/\/+$/, '') || '/';
      setCurrentPath(cleanPath);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isProjectsPage = currentPath === '/projects';

  return (
    <div className="portfolio-app-root">
      <Navbar currentPath={currentPath} onNavigate={navigate} />

      {isProjectsPage ? (
        <main id="main-content">
          <ProjectsPage onBackHome={() => navigate('/')} />
        </main>
      ) : (
        <main id="main-content">
          <AboutSection />
          <div className="section-divider" />
          <ProjectsSection onExploreProjects={() => navigate('/projects')} />
          <div className="section-divider" />
          <TechStackSection />
          <ContactSection />
        </main>
      )}

      <Footer currentPath={currentPath} onNavigate={navigate} />
    </div>
  );
}

export default App;
