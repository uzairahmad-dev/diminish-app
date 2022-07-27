import React from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Plan from '../../components/Plan';
import Footer from '../../components/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Header />
      <About />
      <Plan />
      <Footer />
    </div>
  );
}

export default HomePage;
