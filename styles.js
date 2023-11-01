import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  body {
  
    font-family: system-ui;
    background-color: var(--background-color);
  }
  :root {
    --accent-color: #febb49;
    --primary-color: #056393;
    --background-color: #F2F3F4;
    --font-color: #242124;
    --soft-background: #E5E4E2;

    --mobilewidth: 23rem;
    --borderradius-small: .5rem;
    --borderradius-medium: 1.3rem;
    --basicmargin: 2.4rem;
  }

  p {
    line-height: 1.6;
    font-size: 1rem;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0;
    width: var(--mobilewidth);
    padding-bottom: 1.5;
    margin: 2rem 0;
  }

  legend {
    font-size: 1.3rem
  }
`;
