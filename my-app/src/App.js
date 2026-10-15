import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import PortfolioPage from './components/PortfolioPage';

function App() {
  return (
    <div className="App">
      <Header />
      <PortfolioPage />
      <Footer />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
