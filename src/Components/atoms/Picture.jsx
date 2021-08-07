import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  background-image: url(${props => props.value.img_path});
  background-size: cover;
  transition: all 0.3s linear;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  background-color: pink;
  overflow: hidden;
`;

const Picture = ({ value }) => {
  const handleChange = e => {
    e.currentTarget.style.opacity = 0;
    e.target.style.transform = 'scale(1.05)';
  };
  const handleOut = e => {
    e.currentTarget.style.opacity = 1;
    e.target.style.transform = 'scale(1.0)';
  };

  return (
    <Wrapper>
      <Image
        value={value}
        onMouseEnter={e => handleChange(e)}
        onMouseOut={e => {
          handleOut(e);
        }}
      ></Image>
      <Content>Content</Content>
    </Wrapper>
  );
};

export default Picture;
