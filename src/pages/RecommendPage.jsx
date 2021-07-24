import React, { useEffect, useState } from 'react';
import { getPictures } from 'lib/api/sample';
import { Footer } from 'Components';
import styled from 'styled-components';
import { Picture } from 'Components';
import Masonry from 'react-masonry-css';
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 18rem;
`;

const breakpointColumnsObj = {
  default: 4,
  1100: 4,
  700: 2,
  500: 1,
};

const RecommendPage = () => {
  const [pictures, setPicture] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getPictures();
      data && setPicture(data['recommend_images'].slice(0, 10));
    })();
  }, []);

  return (
    <>
      <Wrapper>
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {pictures?.map((value, index) => (
            <Picture key={index} value={value} />
          ))}
        </Masonry>
        <Footer />
      </Wrapper>
    </>
  );
};

export default RecommendPage;
