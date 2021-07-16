import React from 'react';
import styled from 'styled-components';
import main_picture_first from 'assets/img/main_picture_first.png';
const Photos = {
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
    .container {
      &__image {
        background: url(${main_picture_first}) center;
        background-size: cover;
        height: 80rem;
        width: 100vw;
        object-fit: cover;
      }
      &__contents {
        position: absolute;
        top: 0;
        height: 80rem;
        width: 50%;
        background-color: ${({ theme }) => theme.color.white};
        opacity: 0.6;
      }
    }
  `,
};
const PhotoLayer = () => {
  return (
    <Photos.Wrapper>
      <section className="container">
        <div className="container__image" src={main_picture_first} alt="firstImage"></div>
        <div className="container__contents">
          <p>추가 비용 없이 </p>
          <p>쉽고 간편하게</p>
          <p>우리집에 딱 맞는</p>
          <p>추천을 무제한으로</p>
        </div>
      </section>
    </Photos.Wrapper>
  );
};

export default PhotoLayer;
