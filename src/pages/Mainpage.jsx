import React from 'react';
import { Header } from 'Components';
import { PhotoLayer } from 'Components';
import { InfoLayer } from 'Components';
import { MainRecommendLayer } from 'Components';
const Mainpage = () => {
  return (
    <>
      <Header />
      <PhotoLayer />
      <InfoLayer />
      <MainRecommendLayer />
    </>
  );
};

export default Mainpage;
