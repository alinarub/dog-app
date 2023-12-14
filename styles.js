import { createGlobalStyle } from "styled-components";

import { DM_Serif_Display, Poppins } from "next/font/google";

const decorativeFont = DM_Serif_Display({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const basicFont = Poppins({
  weight: ["200", "300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// darkrmode
export const DarkModeStyles = createGlobalStyle`
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
    font-family: ${basicFont.style.fontFamily}; 
    background-color: var(--background-color);
    font-weight: 300;
  }
  /* darkmode */
  :root {
    --accent-color: #febb49;
    --primary-color: #056393;
    --background-color: #003153;
    --font-color: white;
    --soft-background: #005B7C;
    --almost-black-color: #242124;
  

    --mobilewidth: 21rem;
    --borderradius-small: .5rem;
    --borderradius-medium: 1.3rem;
    --basicmargin: 2.4rem;
  }

  p {
    line-height: 1.6;
    font-size: 1rem;
    color: var(--font-color);
    font-weight: 100;
   

  }

  h1, h2, h3, h4, h5, h6, legend {
    font-family: ${decorativeFont.style.fontFamily}; 
    color: var(--font-color);
    text-align: center;
  }
`;

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
    font-family: ${basicFont.style.fontFamily}; 
    background-color: var(--background-color);
    font-weight: 300;
  }
  /* lightmode */
  :root {
    --accent-color: #febb49;
    --primary-color: #056393;
    --background-color: #F2F3F4;
    --font-color: #242124;
    --soft-background: #E5E4E2;
  

    --mobilewidth: 21rem;
    --borderradius-small: .5rem;
    --borderradius-medium: 1.3rem;
    --basicmargin: 2.4rem;
  }

  p {
    line-height: 1.6;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, legend {
    font-family: ${decorativeFont.style.fontFamily}; 
    color: var(--primary-color);
    text-align: center;
  }

`;
