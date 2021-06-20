import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  *, button, a{
    text-decoration: none;
    outline: 0;
  } 
  
  :root{
    --black: #080708;
    --light-black: #151315;
    --red: #D5202C;
    --strong-red: #74181F;
    --yellow: #FDCA40;
    --white: #E6E8E6;
    --gray: #8F8F8F;

    --hover: #2727276e;

    /* url da paleta: https://coolors.co/080708-df2935-74181f-fdca40-8f8f8f-e6e8e6  */
  }


  body, html {
    background:var(--black);
    color: var(--white);
    width: 100%;
    height: 100%;
  }

  h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: var(--yellow);
  }
`;