import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/Navigation';
import LandingPage from '@/pages/LandingPage';
import AboutPage from '@/pages/AboutPage';
import DownloadsPage from '@/pages/DownloadsPage';
import Footer from '@/components/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="math-project-theme">
      <Router>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/downloads" element={<DownloadsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;