import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Fader } from 'Components';
import main_picture_first from 'assets/img/main_picture_first.png';
import main_picture_second from 'assets/img/main_picture_second.png';
import main_picture_third from 'assets/img/main_picture_third.png';

const Photos = {
  Wrapper: styled.div`
    position: relative;
    top: 13.5rem;
    height: 80rem;
    margin: 0;
    padding: 0;
  `,
};
const PhotoLayer = () => {
  return (
    <Photos.Wrapper>
      <Fader />;
    </Photos.Wrapper>
  );
};

export default PhotoLayer;
