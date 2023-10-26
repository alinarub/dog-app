import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
  :root {
    --yellow: #FFC40C;
    --blue: #2072AF;
    --almostblack: #242124;

  
  
  }
`;
