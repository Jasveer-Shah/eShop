import React from 'react'
import './App.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WelcomeImage from './components/WelcomeImage';
//note to test github

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeImage />
      <Footer />

    </div>
  );
}

export default App;
