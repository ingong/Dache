import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/Mainpage';
import RecommendPage from './pages/RecommendPage';
import { Header, Footer } from 'Components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        <Styled.ContentWrapper>
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/recommend" component={RecommendPage} exact />
          </Switch>
        </Styled.ContentWrapper>
        <Footer />
      </Router>
    </>
  );
}

export default App;
