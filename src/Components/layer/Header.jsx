import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/header_logo.png';
import { useLocation, useHistory } from 'react-router';
import { Link, withRouter } from 'react-router-dom';

const Head = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    font: ${({ theme }) => theme.font.caption};
    color: ${({ theme }) => theme.color.gray2};
    height: 13.5rem;
    z-index: 1;
    width: 100vw;
    position: fixed;
    margin: 0;
    a {
      &:hover {
        cursor: pointer;
      }
    }
  `,
  Content: styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    .logo__image {
      width: 16rem;
    }
    .elements {
      div:first-child {
        color: ${({ theme }) => theme.color.black};
      }
      div:hover {
        color: ${({ theme }) => theme.color.black};
        cursor: pointer;
      }
      margin-left: 22rem;
      width: 48rem;
      display: flex;
      justify-content: space-between;
      font-size: 1.5rem;
      div {
        width: 12rem;
      }
      .upload {
        & .upload__visible {
          color: ${({ theme }) => theme.color.gray2};
        }
        &:hover {
          & .upload__hide {
            opacity: 1;
          }
        }
        &__hide {
          position: relative;
          top: 2rem;
          color: ${({ theme }) => theme.color.gray2};
          opacity: 0;
        }
      }
    }
  `,
};

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Head.Wrapper>
      <Head.Content>
        <Link to="/">
          <img className="logo__image" src={logo} alt="logo" />
        </Link>
        <div className="elements">
          <div
            className="home"
            isSelect={location.pathname === '/'}
            onClick={() => {
              history.push('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </div>
          <div
            className="about"
            isSelect={location.pathname === '/'}
            onClick={() => {
              history.push('/');
              window.scrollTo({ top: 700, behavior: 'smooth' });
            }}
          >
            About Us
          </div>
          <div className="upload">
            <div
              className="upload__visible"
              isSelect={location.pathname === '/'}
              onClick={() => {
                history.push('/');
                window.scrollTo({ top: 1500, behavior: 'smooth' });
              }}
            >
              Upload
            </div>
            <div
              className="upload__hide"
              isSelect={location.pathname === '/recommend'}
              onClick={() => {
                history.push('/recommend');
                window.scrollTo({ top: 1500, behavior: 'smooth' });
              }}
            >
              Recommendations
            </div>
          </div>
          <div
            className="login"
            isSelect={location.pathname === '/'}
            onClick={() => {
              history.push('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Login
          </div>
        </div>
      </Head.Content>
    </Head.Wrapper>
  );
};

export default withRouter(Header);
