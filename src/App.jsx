import React from 'react';
import { getPictures } from 'lib/api/sample';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/Mainpage';
// import { BrowserRouter as Router } from 'react-router-dom';

const Styled = {
  ContentWrapper: styled.main`
    max-width: 1080px;
    margin: 0 auto;
  `,
};

function App() {
  const handleData = async () => {
    const data = await getPictures();
    console.log(data);
  };

  console.log(handleData);
  return (
    <Styled.ContentWrapper>
      <GlobalStyle />
      <MainPage />
      <button onClick={handleData}>버튼입니다</button>
    </Styled.ContentWrapper>
  );
}

export default App;
