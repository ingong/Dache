import React from 'react';
import styled from 'styled-components';

const Head = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    font: ${({ theme }) => theme.font.caption};
    color: ${({ theme }) => theme.color.black};
    height: 3.6rem;

    a {
      &:hover {
        cursor: pointer;
      }
    }
  `,
};

const Header = () => {
  return (
    <Head.Wrapper>
      <div className="logo"></div>
      <div className="home">Home</div>
      <div className="about">About Us</div>
      <div className="upload">Upload</div>
      <div className="login">Login</div>
    </Head.Wrapper>
  );
};

export default Header;
