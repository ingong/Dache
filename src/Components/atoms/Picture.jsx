import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  height: 25rem;
  width: 25rem;
  &:hover {
    background-color: pink;
    z-index: 1;
  }
  img {
    height: 25rem;
    width: 25rem;
  }
`;

const Picture = ({ value }) => {
  console.log(value);

  return (
    <Image value={value}>
      <img src={value.img_path} alt="img" />
    </Image>
  );
};

export default Picture;
