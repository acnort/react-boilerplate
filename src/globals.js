import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #aaa;
    padding: .4em 1em;
    border: 1px solid #aaa;
    border-radius: 2em;
  }
`;

export default GlobalStyle;
