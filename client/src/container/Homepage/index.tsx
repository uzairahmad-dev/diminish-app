import React from 'react';

import Header from '../../components/Header';
import SectionFreeTry from '../../components/SectionFreeTry';
import SectionMarketing from '../../components/SectionMarketing';
import SectionPricing from '../../components/SectionPricing';
import Footer from '../../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Header />
      <SectionFreeTry />
      <SectionMarketing />
      <SectionPricing />
      <Footer />
    </div>
  );
}

export default HomePage;