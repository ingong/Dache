import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/header_logo.png';
const Head = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    font: ${({ theme }) => theme.font.caption};
    color: ${({ theme }) => theme.color.lightgray2};
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
    /* justify-content: space-between; */
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
      width: 40rem;
      display: flex;
      justify-content: space-between;
      font-size: 1.5rem;
    }
  `,
};

const Header = () => {
  return (
    <Head.Wrapper>
      <Head.Content>
        <div className="logo">
          <img className="logo__image" src={logo} alt="logo" />
        </div>
        <div className="elements">
          <div className="home">Home</div>
          <div className="about">About Us</div>
          <div className="upload">Upload</div>
          <div className="login">Login</div>
        </div>
      </Head.Content>
    </Head.Wrapper>
  );
};

export default Header;
