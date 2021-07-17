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
    input {
      opacity: 0;
    }
    .image {
      height: 70rem;
      width: 100%;
      background: url(${main_recommend}) center;
      background-size: cover;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      height: 70rem;
      width: 100%;
      color: ${({ theme }) => theme.color.white};
      background-color: rgba(0, 0, 0, 0.5);

      &__inner {
        position: relative;
        top: 30rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &__content {
        height: 18rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .title {
          font-size: 5rem;
          margin-bottom: 2rem;
        }
        .subtitle {
          font-size: 2rem;
        }
        .text {
          line-height: 3rem;
          font-size: 2rem;
        }
      }
      &__btns-btn {
        border-radius: 0.5rem;
        height: 5rem;
        width: 20rem;
        margin-top: 2rem;
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
        <section className="container__inner">
          <div className="container__content">
            <div className="title">내 방에 어울리는 명화 추천받기</div>
            <div className="subtitle">Upload a picture of your room and get recommendations for matching masterpieces</div>
            <div className="text">
              나의 방 사진을 업로드하여 어울리는 명화를 추천받아보세요
              <br />
              다채 AI 큐레이터가 사진을 분석하여 가장 잘 어울리는 명화를 추천해줍니다
            </div>
          </div>
          <div className="container__btns">
            <button className="container__btns-btn" alt="upload">
              <input type="file" />
            </button>
          </div>
        </section>
      </section>
    </Recommend.Wrapper>
  );
};

export default MainRecommendLayer;
