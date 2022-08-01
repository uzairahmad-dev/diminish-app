import React from 'react';
import Header from '../../components/Header';
import BuyPlan from '../../components/BuyPlan';
import SectionAbout from '../../components/SectionAbout';
import SectionPricing from '../../components/SectionPricing';
import SectionFooter from '../../components/SectionFooter';

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Header />
      <BuyPlan />
      <SectionAbout />
      <SectionPricing />
      <SectionFooter />
    </div>
  );
}

export default HomePage;