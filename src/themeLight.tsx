import { createGlobalStyle } from "styled-components";

const GlobalStyle: any = createGlobalStyle`
  :root{
    --background:#EFEFEF;
    --header-text:#FFFFFF;
    --header-bg:#2196F3;
    --card-text:#343A40;
    --lightgrey:#E5E5E5;
    --grey: #ADB5BD;
    --green:#CCF148;
    --green-gradient:radial-gradient(130.1% 4211.09% at -31.8% 124.29%, #7D8C0B 0%, #CCF148 100%); // light -#2196F3
    --darkgreen:#7D8C0B;
    --yellow:#F2E206;
     --black:#343A40;  
    --white:#FFFFFF;
    --notif:#FDA600;
    --card-grey:#C4C4C4;

    --logout-icon:#343A40;

    --grid-header:#343A40;
    --grid-border:#343A40;
    --grid-text:#343A40;

    --subheader-color:#343A40;

    --oswald:"Oswald";
    --font:"Poppins";
  }
`;

export default GlobalStyle;
