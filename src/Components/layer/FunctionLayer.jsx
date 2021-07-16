import React from 'react';
import styled from 'styled-components';
import finger from 'assets/icon/Home/finger.png';
import layout from 'assets/icon/Home/layout.png';
import search from 'assets/icon/Home/search.png';

// 배경 검정색, 글자 흰색
const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    font: ${({ theme }) => theme.font.title};
    color: ${({ theme }) => theme.color.black};
    width: 100%;
    height: 80rem;
    margin: 0;
    padding: 0;
    .title {
      font-size: 7rem;
      margin-bottom: 7rem;
    }
    .container {
      display: flex;
      justify-content: space-between;
      width: 140rem;
      height: 40rem;
      p {
        text-align: center;
      }
      img {
        margin-bottom: 4rem;
      }
      &__first {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 33.3%;
        background-color: #605f5f;
        &__content {
          font-size: 2rem;
          color: white;
        }
      }
      &__second {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 33.3%;
        &__content {
          font-size: 2rem;
          color: black;
        }
      }
      &__third {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 33.3%;
        background-color: #605f5f;
        &__content {
          font-size: 2rem;
          color: white;
        }
      }
      img {
        width: 10rem;
        height: 10rem;
      }
    }
  `,
};
const FunctionLayer = () => {
  return (
    <Styled.Wrapper>
      <section className="title">Coming Soon</section>
      <section className="container">
        <div className="container__first">
          <img src={layout} alt={layout} />
          <div className="container__first__content">
            <p>명화를 생생하게 배치해 볼 수 있는 AR 기능</p>
            <p>AR Service</p>
          </div>
        </div>
        <div className="container__second">
          <img src={finger} alt={finger} />
          <div className="container__second__content">
            <p>명화를 생생하게 배치해 볼 수 있는 AR 기능</p>
            <p>AR Service</p>
          </div>
        </div>
        <div className="container__third">
          <img src={search} alt={finger} />
          <div className="container__third__content">
            <p>명화를 생생하게 배치해 볼 수 있는 AR 기능</p>
            <p>AR Service</p>
          </div>
        </div>
      </section>
    </Styled.Wrapper>
  );
};

export default FunctionLayer;
