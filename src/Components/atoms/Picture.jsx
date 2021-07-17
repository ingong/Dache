import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  height: 30rem;
  width: 30rem;
  position: relative;
  overflow: hidden;
  div {
    height: 30rem;
    width: 30rem;
    background-color: pink;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 1;
    overflow: hidden;
  }
  img {
    position: absolute;
    top: 0;
    height: 30rem;
    width: 30rem;
    overflow: hidden;
    margin: 0 auto;
    transition: all 0.3s linear;
  }
`;

const Picture = ({ value }) => {
  const handleChange = e => {
    e.target.style.opacity = 1;
    e.target.nextSibling.style.transform = 'scale(1.05)';
  };
  const handleOut = e => {
    e.target.style.opacity = 0;
    e.target.nextSibling.style.transform = 'scale(1.0)';
  };

  return (
    <Image value={value}>
      <div
        className="content"
        onMouseEnter={e => handleChange(e)}
        onMouseOut={e => {
          handleOut(e);
        }}
      ></div>
      <img src={value.img_path} alt="img" />
    </Image>
  );
};

export default Picture;
