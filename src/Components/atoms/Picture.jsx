import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  height: 30rem;
  width: 30rem;
  &:hover {
    background-color: pink;
    z-index: 1;
  }
  img {
    height: 30rem;
    width: 30rem;
  }
`;

const Picture = ({ value }) => {
  const handleChange = e => {
    e.target.style.display = 'none';
    // e.target.style.transform = 'scale(1.3, 1.3)';
  };
  const handleOut = e => {
    e.target.style.display = 'flex';
    // e.target.style.transform = 'scale(1.3, 1.3)';
  };

  return (
    <Image value={value}>
      <img
        src={value.img_path}
        onMouseEnter={e => handleChange(e)}
        onMouseOut={e => {
          handleOut(e);
        }}
        alt="img"
      />
    </Image>
  );
};

export default Picture;
