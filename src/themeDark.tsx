import { createGlobalStyle } from "styled-components";

const GlobalStyle: any = createGlobalStyle`
  :root{
    --background:#343A40;
    --header-text:#343A40;
    --header-bg:radial-gradient(130.1% 4211.09% at -31.8% 124.29%, #7D8C0B 0%, #CCF148 100%);
    --card-text:#343A40;
    --lightgrey:#E5E5E5;
    --grey: #ADB5BD;
    --green:#CCF148;
    --green-gradient:radial-gradient(130.1% 4211.09% at -31.8% 124.29%, #7D8C0B 0%, #CCF148 100%);
    --darkgreen:#7D8C0B;
    --yellow:#F2E206;
     --black:#343A40;  
    --white:#FFFFFF;
    --notif:#FDA600;
    --card-grey:#C4C4C4;

    --subheader-color:#FFFFFF;

    --grid-header:#CCF148;
    --grid-border:#FFFFFF;
    --grid-text:#FFFFFF;

    --logout-icon:#FFFFFF;

    --oswald:"Oswald";
    --font:"Poppins";
  }
`;

export default GlobalStyle;
