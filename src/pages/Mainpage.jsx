import React from 'react';
import { PhotoLayer } from 'Components';
import { InfoLayer } from 'Components';
import { MainRecommendLayer } from 'Components';
import { FunctionLayer } from 'Components';

const Mainpage = () => {
  return (
    <>
      <PhotoLayer />
      <InfoLayer />
      <MainRecommendLayer />
      <FunctionLayer />
    </>
  );
};

export default Mainpage;
