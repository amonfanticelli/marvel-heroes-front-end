import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {

  //typography

  --font-inter:'Inter', sans-serif;
  --font-lexend: 'Lexend', sans-serif;

  --fonts-heading-1-700: 700;
  --fonts-heading-1-size: 44px;
  --fonts-heading-1-line: 56px;

  --fonts-heading-2-600: 600;
  --fonts-heading-2-size: 36px;
  --fonts-heading-2-line: 45px;

  --fonts-heading-3-600: 600;
  --fonts-heading-3-size: 32px;
  --fonts-heading-3-line: 40px;

  --fonts-heading-3-500: 500;
  --fonts-heading-3-size: 32px;
  --fonts-heading-3-line: 40px;

  --fonts-heading-4-600: 600;
  --fonts-heading-4-size: 28px;
  --fonts-heading-4-line: 35px;

  --fonts-heading-4-500: 500;
  --fonts-heading-4-size: 28px;
  --fonts-heading-4-line: 35px;

  --fonts-heading-5-600: 600;
  --fonts-heading-5-size: 24px;
  --fonts-heading-5-line: 30px;

  --fonts-heading-5-500: 500;
  --fonts-heading-5-size: 24px;
  --fonts-heading-7-line: 30px;

  --fonts-heading-6-600: 600;
  --fonts-heading-6-size: 20px;
  --fonts-heading-6-line: 25px;

  --fonts-heading-6-500: 500;
  --fonts-heading-6-size: 20px;
  --fonts-heading-6-line: 25px;

  --fonts-heading-7-600: 600;
  --fonts-heading-7-size: 16px;
  --fonts-heading-7-line: 20px;

  --fonts-heading-7-500: 500;
  --fonts-heading-7-size: 16px;
  --fonts-heading-7-line: 20px;

  --fonts-body-1-400: 400;
  --fonts-body-1-600: 600;

  --fonts-body-2-400: 400;
  --fonts-body-2-500: 500;

  --fonts-button-big-text-400: 400;

  --fonts-button-medium-text-600: 600;

  --fonts-input-placeholder-400: 400;

  --fonts-input-label-500: 500;

  //brand
  --colors-brand-1: #4529E6;
  --colors-brand-2: #5126EA;
  --colors-brand-3: #B0A6F0;
  --colors-brand-4: #EDEAFD;

  //grey scale
  --colors-grey-0: #0B0D0D;
  --colors-grey-1: #212529;
  --colors-grey-2: #495057;
  --colors-grey-3: #868E96;
  --colors-grey-4: #ADB5BD;
  --colors-grey-5: #CED4DA;
  --colors-grey-6: #DEE2E6;
  --colors-grey-7: #E9ECEF;
  --colors-grey-8: #F1F3F5;
  --colors-grey-9: #F8F9FA;
  --colors-grey-10: #FDFDFD;
  --colors-white: #FFFFFF;

  //feedback
  --colors-alert-1: #CD2B31;
  --colors-alert-2: #FDD8D8;
  --colors-alert-3: #FFE5E5;
  --colors-sucess-1: #18794E;
  --colors-sucess-2: #CCEBD7;
  --colors-sucess-3: #DDF3E4;


  //Colors Random Profile
  --colors-random1: #E34D8C;
  --colors-random2: #C04277;
  --colors-random3: #7D2A4D;
  --colors-random4: #7000FF;
  --colors-random5: #6200E3;
  --colors-random6: #36007D;
  --colors-random7: #349974;
  --colors-random8: #2A7D5F;
  --colors-random9: #153D2E;
  --colors-random10: #6100FF;
  --colors-random11: #5700E3;
  --colors-random12: #30007D;

}

html {
    box-sizing: border-box;
    font-size: 16px;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lexend', sans-serif;
  }

  h1 {
    font-weight: var(--fonts-heading-1-700);
    font-size: var(--fonts-heading-1-size);
    line-height: var(--fonts-heading-1-line);
  }
  h2 {
    font-weight: var(--fonts-heading-2-600);
    font-size: var(--fonts-heading-2-size);
    line-height: var(--fonts-heading-2-line);
  }
  h3 {
    font-weight: var(--fonts-heading-3-600);
    font-size: var(--fonts-heading-3-size);
    line-height: var(--fonts-heading-3-line);
  }
  h4 {
    font-weight: var(--fonts-heading-4-600);
    font-size: var(--fonts-heading-4-size);
    line-height: var(--fonts-heading-4-line);
  }
  h5 {
    font-weight: var(--fonts-heading-5-600);
    font-size: var(--fonts-heading-5-size);
    line-height: var(--fonts-heading-5-line);
  }
  h6 {
    font-weight: var(--fonts-heading-6-600);
    font-size: var(--fonts-heading-6-size);
    line-height: var(--fonts-heading-6-line);
  }

  .text-body-1-400 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  .text-body-1-600 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
  }
  .text-body-2-400 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  .text-body-2-500 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
  .text-button-big-text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
  }
  .text-button-medium-text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 0px;
  }
  input::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 0px;
  }
  label {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
  
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  figure {
    margin: 0;
    padding: 0;
    border: 0;
  }

`;
