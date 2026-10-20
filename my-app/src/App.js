import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import PortfolioPage from './components/PortfolioPage';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <PortfolioPage />
      </div>
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

    </>
  );
}

export default App;

