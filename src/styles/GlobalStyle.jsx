import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html{
    font-size: 10px;
  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    font-family: "Noto Sans kr", "Spoqa Han Sans Neo",
      -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    padding: 0;
    margin: 0;
  };
  button{
    display: flex;
    cursor: pointer;
    outline: none;
  };
  input{
    display: flex;
    outline: none;
    padding-left: 10px;
  };
  .my-masonry-grid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: -30px;
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 30px;
  background-clip: padding-box;
}
.my-masonry-grid_column > div {
  background: yellow;
  margin-bottom: 30px;
}

`;

export default GlobalStyle;
