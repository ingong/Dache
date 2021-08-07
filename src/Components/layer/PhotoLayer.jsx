import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import mainFirst from 'assets/img/main_picture_first.png';
import mainSecond from 'assets/img/main_picture_second.png';
import mainThird from 'assets/img/main_picture_third.png';

const Styled = {
  Wrapper: styled.div`
    position: relative;
    top: 13.5rem;
    height: 90rem;
    width: 100vw;
    margin: 0;
    padding: 0;
  `,

  ImageContainer: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    font: ${({ theme }) => theme.font.caption};
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 20rem;
    position: relative;

    section {
      position: absolute;
      top: 0;
      left: 0;
    }
    .fade-in {
      transition: opacity 1s ease;
    }

    .fade-out {
      opacity: 0;
      transition: opacity 1s ease;
    }

    .container__first {
      background: url(${mainFirst}) center;
      background-size: cover;
      height: 80rem;
      width: 99vw;
      margin: 0;
      padding: 0;
      object-fit: cover;
      &-contents {
        height: 80rem;
        width: 50%;
        background-color: ${({ theme }) => theme.color.white};
        opacity: 0.6;
        &-p {
          display: flex;
          flex-direction: column;
          position: relative;
          top: 20rem;
          left: 25rem;
          height: 30rem;
          width: 100%;
          margin-bottom: 8rem;
          &-k {
            font-size: 4.5rem;
            height: 10rem;
            width: 50rem;
          }
          &-e {
            font-size: 1.2rem;
            height: 10rem;
            width: 50rem;
          }
        }
      }
    }
    .container__second {
      background: url(${mainSecond}) center;
      background-size: cover;
      height: 80rem;
      width: 99vw;
      margin: 0;
      padding: 0;
      object-fit: cover;
      &-contents {
        height: 80rem;
        width: 50%;
        background-color: ${({ theme }) => theme.color.white};
        opacity: 0.6;
        &-p {
          display: flex;
          flex-direction: column;
          position: relative;
          top: 20rem;
          left: 25rem;
          height: 30rem;
          width: 100%;
          margin-bottom: 8rem;
          &-k {
            font-size: 4.5rem;
            height: 10rem;
            width: 50rem;
          }
          &-e {
            font-size: 1.2rem;
            height: 10rem;
            width: 50rem;
          }
        }
      }
    }
    .container__third {
      background: url(${mainThird}) center;
      background-size: cover;
      height: 80rem;
      width: 99vw;
      margin: 0;
      padding: 0;
      object-fit: cover;
      &-contents {
        height: 80rem;
        width: 50%;
        background-color: ${({ theme }) => theme.color.white};
        opacity: 0.6;
        &-p {
          display: flex;
          flex-direction: column;
          position: relative;
          top: 20rem;
          left: 25rem;
          height: 30rem;
          width: 100%;
          margin-bottom: 8rem;
          &-k {
            font-size: 4.5rem;
            height: 10rem;
            width: 50rem;
          }
          &-e {
            font-size: 1.2rem;
            height: 10rem;
            width: 50rem;
          }
        }
      }
    }
  `,
};

const PhotoLayer = () => {
  //thirdProp
  const [fadeThirdProp, setFadeThirdProp] = useState({
    fade: 'fade-in',
  });
  const [CisFirst, setCFirst] = useState(true);
  useEffect(() => {
    let timeout;
    if (CisFirst) {
      setTimeout(() => {
        timeout = setInterval(() => {
          if (fadeThirdProp.fade === 'fade-in') {
            setFadeThirdProp({
              fade: 'fade-out',
            });
          } else {
            setFadeThirdProp({
              fade: 'fade-in',
            });
          }
        }, 4000);
      }, 8000);
      setCFirst(false);
    } else {
      setTimeout(() => {
        timeout = setInterval(() => {
          if (fadeThirdProp.fade === 'fade-in') {
            setFadeThirdProp({
              fade: 'fade-out',
            });
          } else {
            setFadeThirdProp({
              fade: 'fade-in',
            });
          }
        }, 4000);
      }, 4000);
    }
    return () => clearInterval(timeout);
  }, [fadeThirdProp]);

  //todo Second Component
  const [fadeSecondProp, setFadeSecondProp] = useState({
    fade: 'fade-in',
  });

  const [BisFirst, BsetFirst] = useState(true);
  useEffect(() => {
    let timeout;
    if (BisFirst) {
      setTimeout(() => {
        timeout = setInterval(() => {
          if (fadeSecondProp.fade === 'fade-in') {
            setFadeSecondProp({
              fade: 'fade-out',
            });
          } else {
            setFadeSecondProp({
              fade: 'fade-in',
            });
          }
        }, 4000);
      }, 4000);
      BsetFirst(false);
    } else {
      setTimeout(() => {
        timeout = setInterval(() => {
          if (fadeSecondProp.fade === 'fade-in') {
            setFadeSecondProp({
              fade: 'fade-out',
            });
          } else {
            setFadeSecondProp({
              fade: 'fade-in',
            });
          }
        }, 4000);
      }, 4000);
    }
    return () => clearInterval(timeout);
  }, [fadeSecondProp]);

  //todo First
  const [fadeFirstProp, setFadeFirstProp] = useState({
    fade: 'fade-in',
  });
  const [AisFirst, AsetFirst] = useState(true);

  useEffect(() => {
    let timeout;
    if (AisFirst) {
      timeout = setTimeout(() => {
        setInterval(() => {
          if (fadeFirstProp.fade === 'fade-in') {
            setFadeFirstProp({
              fade: 'fade-out',
            });
          } else {
            setFadeFirstProp({
              fade: 'fade-in',
            });
          }
        }, 4000);
      }, 0);
      AsetFirst(false);
    } else {
      setTimeout(() => {
        timeout = setInterval(() => {
          if (fadeFirstProp.fade === 'fade-in') {
            setFadeFirstProp({
              fade: 'fade-out',
            });
          } else {
            setFadeFirstProp({
              fade: 'fade-in',
            });
          }
        }, 4000);
      }, 4000);
    }
    return () => clearInterval(timeout);
  }, [fadeFirstProp]);
  return (
    <Styled.Wrapper>
      <Styled.ImageContainer>
        <section className={fadeThirdProp.fade}>
          <div className="container__third">
            <div className="container__third-contents">
              <div className="container__third-contents-p">
                <div className="container__third-contents-p-k">추 가 비 용 없 이 </div>
                <div className="container__third-contents-p-k">쉽 고 간 편 하 게</div>
                <div className="container__third-contents-p-k">우 리 집 에 딱 맞 는</div>
                <div className="container__third-contents-p-k">추 천 을 무 제 한 으 로</div>
                <div className="container__third-contents-p-e">
                  We suggest unlimited recommendations for your home at no extra money
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={fadeSecondProp.fade}>
          <div className="container__second">
            <div className="container__second-contents">
              <div className="container__second-contents-p">
                <div className="container__second-contents-p-k">추 가 비 용 없 이 </div>
                <div className="container__second-contents-p-k">쉽 고 간 편 하 게</div>
                <div className="container__second-contents-p-k">우 리 집 에 딱 맞 는</div>
                <div className="container__second-contents-p-k">추 천 을 무 제 한 으 로</div>
                <div className="container__second-contents-p-e">
                  We suggest unlimited recommendations for your home at no extra money
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={fadeFirstProp.fade}>
          <div className="container__first">
            <div className="container__first-contents">
              <div className="container__first-contents-p">
                <div className="container__first-contents-p-k">추 가 비 용 없 이 </div>
                <div className="container__first-contents-p-k">쉽 고 간 편 하 게</div>
                <div className="container__first-contents-p-k">우 리 집 에 딱 맞 는</div>
                <div className="container__first-contents-p-k">추 천 을 무 제 한 으 로</div>
                <div className="container__first-contents-p-e">
                  We suggest unlimited recommendations for your home at no extra money
                </div>
              </div>
            </div>
          </div>
        </section>
      </Styled.ImageContainer>
    </Styled.Wrapper>
  );
};

export default PhotoLayer;

// const useFadeFirst = (duration = 0, delay = 0, count = 0) => {
//   const [state, confirmState] = useState(false);
//   const element = useRef();

//   setInterval(() => {
//     if (state) {
//       confirmState(false);
//     } else {
//       confirmState(true);
//     }
//   }, 4000);

//   useEffect(() => {
//     if (!state) {
//       const { current } = element;
//       current.style.transition = `opacity ${duration}s ${delay}s`;
//       current.style.opacity = 1;
//     } else {
//       const { current } = element;
//       current.style.transition = `opacity ${duration}s ${delay}s`;
//       current.style.opacity = 0;
//     }
//   }, [state]);
//   return { ref: element, style: { opacity: 0 } };
// };
