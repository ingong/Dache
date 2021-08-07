import React from 'react';
import { PhotoLayer } from 'Components';
import { InfoLayer } from 'Components';
import { MainRecommendLayer } from 'Components';
import { FunctionLayer } from 'Components';
import { Footer } from 'Components';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
`;
const Mainpage = history => {
  console.log(history);
  return (
    <Wrapper>
      <PhotoLayer />
      <InfoLayer />
      <MainRecommendLayer history={history} />
      <FunctionLayer />
      <Footer />
    </Wrapper>
  );
};

export default Mainpage;
