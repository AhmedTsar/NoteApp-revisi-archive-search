import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: hsla(213, 77%, 14%, 1);
  color: #5DDAE0;
}
`

export default GlobalStyles;