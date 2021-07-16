import React from 'react';
import { Header } from 'Components';
import { PhotoLayer } from 'Components';
import { InfoLayer } from 'Components';
import { MainRecommendLayer } from 'Components';
import { FunctionLayer } from 'Components';
import { Footer } from 'Components';

const Mainpage = () => {
  return (
    <>
      <Header />
      <PhotoLayer />
      <InfoLayer />
      <MainRecommendLayer />
      <FunctionLayer />
      <Footer />
    </>
  );
};

export default Mainpage;
