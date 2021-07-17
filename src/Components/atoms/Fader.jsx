import React from 'react';
import styled from 'styled-components';
import main_picture_first from 'assets/img/main_picture_first.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  font: ${({ theme }) => theme.font.caption};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 20rem;
  p {
    font-size: 4.5rem;
    margin-bottom: 8rem;
  }
  .fade-in {
    transition: opacity 1s ease;
  }

  .fade-out {
    opacity: 0;
    transition: opacity 1s ease;
  }

  .container {
    background: url(${main_picture_first}) center;
    background-size: cover;
    height: 80rem;
    width: 99vw;
    margin: 0;
    padding: 0;
    object-fit: cover;
    &__contents {
      height: 80rem;
      width: 50%;
      background-color: ${({ theme }) => theme.color.white};
      opacity: 0.6;
      &-p {
        height: 50rem;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 17rem;
        left: 40rem;
      }
    }
  }
`;

const Fader = ({ value, image }) => {
  return (
    <Wrapper>
      <section>
        <div className="container" value={value} src={image} alt="firstImage">
          <div className="container__contents">
            <div className="container__contents-p">
              <p>추가 비용 없이 </p>
              <p>쉽고 간편하게</p>
              <p>우리집에 딱 맞는</p>
              <p>추천을 무제한으로</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Fader;
