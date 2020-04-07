import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700|Nunito:300,400,600,700&display=swap&subset=latin-ext');

* , *::before, *::after {
    box-sizing: border-box;
}
  html {
    font-size: 62.5%;
  }
  body {    
    margin: 0;
    padding: 0;
    background-color: #ECEFF1;
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    text-align: center;
		flex-direction: row;
    justify-content: center;
    align-items: center;
}
`;
export default GlobalStyle;
