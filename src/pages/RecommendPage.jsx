import React, { useEffect, useState } from 'react';
import { getPictures } from 'lib/api/sample';
import { Header } from 'Components';
import styled from 'styled-components';
import { Picture } from 'Components';

const Wrapper = styled.div`
  position: relative;
  padding: 0 25rem;
  top: 18rem;
  width: 70%;
  height: 130rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const RecommendPage = () => {
  const [pictures, setPicture] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getPictures();
      data && setPicture(data['recommend_images'].slice(0, 9));
    })();
  }, []);
  console.log(pictures);
  return (
    <>
      <Header />
      <Wrapper>
        {pictures?.map(value => (
          <Picture value={value} />
        ))}
      </Wrapper>
    </>
  );
};

export default RecommendPage;
