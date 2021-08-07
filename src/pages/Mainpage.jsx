import React from 'react';
import { PhotoLayer } from 'Components';
import { InfoLayer } from 'Components';
import { MainRecommendLayer } from 'Components';
import { FunctionLayer } from 'Components';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
`;
const Mainpage = () => {
  return (
    <Wrapper>
      <PhotoLayer />
      <InfoLayer />
      <MainRecommendLayer />
      <FunctionLayer />
    </Wrapper>
  );
};

export default Mainpage;
