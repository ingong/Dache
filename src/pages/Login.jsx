import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NaverIcon from 'assets/icon/ic_naver.svg';
import KakaoIcon from 'assets/icon/ic_kakaotalk.svg';
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

  responseKaKao = res => {
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
        <Styled.ImageContainer>
          {/* <Main /> */}
          {/* <SubTitle style={{ marginTop: '2.1rem' }} /> */}
        </Styled.ImageContainer>
        <Styled.Section>
          <div className="content-wrapper">
            <h1>Dache 시작하기</h1>
            <KaKaoBtn
              token={'1d5cddfd974a182f8edaf6455ff049e3'}
              buttonText="KaKao"
              onSuccess={this.responseKaKao}
              onFailure={this.responseFail}
              getProfile={true}
              // onClick={kakaoResponse}
              type="button"
              color={'#FEE500'}
            >
              {/* <img className="kakaotalkIcon" src={KakaoIcon} alt="kakakotalk" />
              <div className="content">카카오톡으로 시작하기</div> */}
            </KaKaoBtn>
            <Styled.Button type="button" color={'#1EC800'}>
              <img className="naverIcon" src={NaverIcon} alt="naver" />
              <div className="content">네이버로 시작하기</div>
            </Styled.Button>
          </div>
        </Styled.Section>
      </Styled.Wrapper>
    );
  }
}
// const LoginLayer = () => {
//   const kakaoResponse = async response => {
//     const KAKAO_LOGIN_REDIRECT_URI = 'http://ec2-54-180-57-37.ap-northeast-2.compute.amazonaws.com/api/user/setKakaoLogin&prompt=none';
//     const KAKAO_LOGOUT_REDIRECT_URI = 'http://ec2-54-180-57-37.ap-northeast-2.compute.amazonaws.com/api/user/setLogout';
//     const KAKAO_SIGNUP_REDIRECT_URI = 'http://ec2-54-180-57-37.ap-northeast-2.compute.amazonaws.com/api/user/setKakaoSignup';
//     const REST_API_KEY = '4e207a6290ab122cb5d87392763aa81d';
//     let res = await axios.get(
//       `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${KAKAO_LOGIN_REDIRECT_URI}`
//       // {
//       //   params: {
//       //     code: response.response.access_token,
//       //   },
//       // }
//     );
//     console.log(response.response.access_token);
//     console.log(response.response.access_token);
//     console.log(res);
//     console.log('clicked');
//   };

//   // const handleSuccess = async (token, social) => {
//   // console.log(token);
//   // const data = await postToken(token, social);
//   // localStorage.setItem('token', data.token);
//   // localStorage.setItem('ID', data.id);
//   // window.open('http://localhost:3000', '_self');
//   // };

//   // 로그인 실패 시
//   // const handleFailure = error => {
//   //   console.log(error);
//   // };
//   return (
//     <Styled.Wrapper>
//       <Styled.ImageContainer>
//         {/* <Main /> */}
//         {/* <SubTitle style={{ marginTop: '2.1rem' }} /> */}
//       </Styled.ImageContainer>
//       <Styled.Section>
//         <div className="content-wrapper">
//           <h1>Dache 시작하기</h1>
//           <Styled.Button onClick={kakaoResponse} type="button" color={'#FEE500'}>
//             <img className="kakaotalkIcon" src={KakaoIcon} alt="kakakotalk" />
//             <div className="content">카카오톡으로 시작하기</div>
//           </Styled.Button>
//           <Styled.Button type="button" color={'#1EC800'}>
//             <img className="naverIcon" src={NaverIcon} alt="naver" />
//             <div className="content">네이버로 시작하기</div>
//           </Styled.Button>
//         </div>
//       </Styled.Section>
//     </Styled.Wrapper>
//   );
// };

export default LoginLayer;
