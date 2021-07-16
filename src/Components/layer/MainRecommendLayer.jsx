import React from 'react';
import styled from 'styled-components';
import main_recommend from 'assets/img/main_recommend.png';
import upload1 from 'assets/icon/Home/upload1.png';
import upload2 from 'assets/icon/Home/upload2.png';
const Recommend = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    font: ${({ theme }) => theme.font.caption};
    color: ${({ theme }) => theme.color.black};
    height: 70rem;
    width: 100%;
    margin: 0;
    object-fit: cover;
    position: relative;
    .image {
      height: 70rem;
      width: 100%;
      background: url(${main_recommend}) center;
      background-size: cover;
    }
    .container {
      position: absolute;
      top: 0;
      height: 70rem;
      width: 100%;
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.black};
      opacity: 0.5;
      &__btns-btn {
        z-index: 1;
        border-radius: 2rem;
        height: 5rem;
        width: 20rem;
        background: url(${upload1}) center;
        background-size: cover;
        :hover {
          background: url(${upload2}) center;
          background-size: cover;
          background-color: ${({ theme }) => theme.color.black};
          opacity: 1;
        }
      }
    }
  `,
};
const MainRecommendLayer = () => {
  return (
    <Recommend.Wrapper>
      <section className="image"></section>
      <section className="container">
        <div className="container__content">
          <p className="title">내 방에 어울리는 명화 추천받기</p>
          <p className="subtitle">Upload a picture of your room and get recommendations for matching masterpieces</p>
          <p className="content">
            나의 방 사진을 업로드하여 어울리는 명화를 추천받아보세요 다채 AI 큐레이터가 사진을 분석하여 가장 잘 어울리는 명화를 추천해줍니다
          </p>
        </div>
        <div className="container__btns">
          <button className="container__btns-btn" alt="upload"></button>
        </div>
      </section>
    </Recommend.Wrapper>
  );
};

export default MainRecommendLayer;
