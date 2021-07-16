import React from 'react';
import styled from 'styled-components';
import main_image from 'assets/img/main_image.png';
const Info = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    font: ${({ theme }) => theme.font.caption};
    color: ${({ theme }) => theme.color.black};
    position: relative;
    height: 80rem;
    width: 100%;
    margin: 0;
  `,
  Content: styled.div`
    width: 40%;
    font-size: 2rem;
    line-height: 4.5rem;
  `,
};
const InfoLayer = () => {
  return (
    <Info.Wrapper>
      <img src={main_image} alt="main_image" />
      <Info.Content>
        다채는 색 기반 추천 알고리즘을 기반으로 인테리어 소품을 추천하는 AI 인테리어
        <br /> 큐레이팅 서비스입니다. <br />
        여타 큐레이팅 서비스보다 저렴한 가격으로 서비스를 제공하고 있으며 <br />
        인테리어 큐레이팅 서비스의 대중화를 비전으로 삼고 있습니다. ​<br />
        <br /> 현재 명화 추천 큐레이팅 서비스를 제공하고 있으며, 향후 인테리어 소품 및 건자재까지
        <br /> 확장된 큐레이팅 서비스를 본 플랫폼에서 제공받으실 수 있습니다.
      </Info.Content>
    </Info.Wrapper>
  );
};

export default InfoLayer;
