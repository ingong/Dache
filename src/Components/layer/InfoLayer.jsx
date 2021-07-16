import React from 'react';
import styled from 'styled-components';

const Info = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    font: ${({ theme }) => theme.font.caption};
    color: ${({ theme }) => theme.color.black};
    position: relative;
    top: 13.5rem;
    height: 80rem;
    width: 100%;
    margin: 0;
  `,
};
const InfoLayer = () => {
  return <Info.Wrapper>인포입니다</Info.Wrapper>;
};

export default InfoLayer;
