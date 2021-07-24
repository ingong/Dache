import React from 'react';
import styled from 'styled-components';
import NaverIcon from 'assets/icon/ic_naver.svg';
import KakaoIcon from 'assets/icon/ic_kakaotalk.svg';
import Login from 'assets/img/main_picture_second.png';

const Styled = {
  Wrapper: styled.div`
    margin-top: 8.8rem;
    margin-left: calc(-50vw + 50%);
    display: flex;
    width: 99vw;
    height: 92.5vh;
  `,

  ImageContainer: styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${Login});
    background-size: cover;
    background-position: center;

    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 1;
    }
  `,

  Section: styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content-wrapper {
      display: flex;
      flex-direction: column;

      h1 {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 4.9rem;
        margin-bottom: 0.7rem;
        font: ${({ theme }) => theme.font.display2};
        color: ${({ theme }) => theme.color.black};
      }

      p {
        width: 100%;
        height: 2.2rem;
        margin-bottom: 7rem;
        font: ${({ theme }) => theme.font.body1};
        color: ${({ theme }) => theme.color.gray3};
      }

      .google {
        border: 0.1rem solid #dfdfdf;
      }
    }
  `,

  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45.2rem;
    height: 4.8rem;
    background-color: ${props => props.color};
    border-radius: 2.1rem;
    padding-left: 1rem;
    margin-bottom: 1.7rem;
    color: #363636;
    font: ${({ theme }) => theme.font.button};
    line-height: 3rem;
    border: none;
    img {
      position: relative;
      top: 0.4rem;
      right: 1rem;
    }
    .naverIcon {
      position: relative;
      top: -0.1rem;
      left: -2.4rem;
    }
    .kakaotalkIcon {
      position: relative;
      top: 0.05rem;
    }
  `,
};

const LoginLayer = () => {
  const handleSuccess = async (token, social) => {
    console.log(token);
    // const data = await postToken(token, social);
    // localStorage.setItem('token', data.token);
    // localStorage.setItem('ID', data.id);
    window.open('http://localhost:3000', '_self');
  };

  // 로그인 실패 시
  const handleFailure = error => {
    console.log(error);
  };
  return (
    <Styled.Wrapper>
      <Styled.ImageContainer>
        {/* <Main /> */}
        {/* <SubTitle style={{ marginTop: '2.1rem' }} /> */}
      </Styled.ImageContainer>
      <Styled.Section>
        <div className="content-wrapper">
          <h1>Dache 시작하기</h1>
          <Styled.Button type="button" color={'#FEE500'}>
            <img className="kakaotalkIcon" src={KakaoIcon} alt="kakakotalk" />
            <div className="content">카카오톡으로 시작하기</div>
          </Styled.Button>
          <Styled.Button type="button" color={'#1EC800'}>
            <img className="naverIcon" src={NaverIcon} alt="naver" />
            <div className="content">네이버로 시작하기</div>
          </Styled.Button>
        </div>
      </Styled.Section>
    </Styled.Wrapper>
  );
};

export default LoginLayer;
