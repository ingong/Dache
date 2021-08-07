import React, { Component } from 'react';
import styled from 'styled-components';
import Login from 'assets/img/main_picture_second.png';
import KaKaoLogin from 'react-kakao-login';

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

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

class LoginLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'kakao',
    };
  }

  responseKaKao = (res: any) => {
    this.setState({
      data: res,
    });
    alert(JSON.stringify(this.state.data));
  };

  responseFail = err => {
    alert(err);
  };

  render() {
    return (
      <Styled.Wrapper>
        <Styled.ImageContainer></Styled.ImageContainer>
        <Styled.Section>
          <div className="content-wrapper">
            <h1>Dache 시작하기</h1>
            <KaKaoBtn
              jsKey={'1d5cddfd974a182f8edaf6455ff049e3'}
              buttonText="KaKao"
              onSuccess={this.responseKaKao}
              onFailure={this.responseFail}
              getProfile={true}
              type="button"
              color={'#FEE500'}
            ></KaKaoBtn>
            <Styled.Button type="button" color={'#1EC800'}>
              <div className="content">네이버로 시작하기</div>
            </Styled.Button>
          </div>
        </Styled.Section>
      </Styled.Wrapper>
    );
  }
}

export default LoginLayer;
