import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/Mainpage';
import RecommendPage from './pages/RecommendPage';
import LoginPage from './pages/Login';
import { Header } from 'Components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Styled = {
  ContentWrapper: styled.main`
    margin: 0 auto;
  `,
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <TotalWrapper>
          <Styled.ContentWrapper>
            <Switch>
              <Route path="/" component={MainPage} exact />
              <Route path="/recommend" component={RecommendPage} exact />
              <Route path="/login" component={LoginPage} exact />
            </Switch>
          </Styled.ContentWrapper>
        </TotalWrapper>
      </Router>
    </>
  );
}

export default App;
