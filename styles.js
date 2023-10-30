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
    background-color: var(--backgroundcolor);
  }
  :root {
    --accent-color: #febb49;
    --primary-color: #056393;
    --backgroundcolor: #F2F3F4;
    --font-color: #242124;
    --lightgray: #E5E4E2;

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
    border: 2px solid var(--lightgray);
    width: var(--mobilewidth);
    max-width: var(--mobilewidth);
    border-radius: var(--borderradius-small);
    padding-bottom: 1.5;
    margin: 2rem 0;
  }

  legend {
    font-size: 1.3rem
  }

  ul {
    list-style: none;
  }

li {
  background-color: var(--lightgray);
  width: fit-content;
  border-radius: var(--borderradius-small);
  margin: var(--basicmargin);
  padding: .5rem;
}

span {
  margin-left: 2rem;
  background-color: var(--accent-color);
  padding: .4rem;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  display: inline-block;
}

`;
