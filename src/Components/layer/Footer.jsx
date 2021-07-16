import React from 'react';
import styled from 'styled-components';

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.black};
    width: 100%;
    height: 20rem;
    margin: 0;
    padding: 0;
    border-top: 1px solid;
    section {
      padding-bottom: 2rem;
    }
  `,
};

const Footer = () => {
  return (
    <Styled.Wrapper>
      <section className="contact">contact us: dachae@gmail.com</section>
      <section className="copyright">Copyright© 2021 Dachae. All rights reserved.</section>
    </Styled.Wrapper>
  );
};

export default Footer;
