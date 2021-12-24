import { createGlobalStyle } from "styled-components";

export const GlobalStyle: any = createGlobalStyle`

  :root{
    --black:#343A40;
    --lightgrey:#E5E5E5;
    --grey: #ADB5BD;
    --green:#CCF148;
    --darkgreen:#7D8C0B;
    --yellow:#F2E206;
    --white:#FFFFFF;
    --notif:#FDA600;
    --oswald:"Oswald";
    --font:"Poppins";
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:var(--font);
  }
`;
