import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import PortfolioPage from './components/PortfolioPage';
import ErrorPage from './components/ErrorPage';
import AboutPage from './components/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

