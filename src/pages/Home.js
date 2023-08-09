import React from 'react';
import './Home.css';
import Header from '../partials/Header';
import Main from '../partials/Main';
import Footer from '../partials/Footer';

function Home() {

  return (
    <div className="home">
      <Header />
      <div className="home-main-container">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default Home;