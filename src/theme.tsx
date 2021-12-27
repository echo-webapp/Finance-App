import { createGlobalStyle } from "styled-components";

export const GlobalStyle: any = createGlobalStyle`

  :root{
    --black:#343A40;
    --lightgrey:#E5E5E5;
    --grey: #ADB5BD;
    --green:#CCF148;
    --green-gradient:radial-gradient(130.1% 4211.09% at -31.8% 124.29%, #7D8C0B 0%, #CCF148 100%);
    --darkgreen:#7D8C0B;
    --yellow:#F2E206;
    --white:#FFFFFF;
    --notif:#FDA600;
    --card-grey:#C4C4C4;
    --oswald:"Oswald";
    --font:"Poppins";
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:var(--font);
  }
  .MuiDataGrid-root{
    border: 2px solid #E5E5E5 !important;
    padding: 25px !important;
    border-radius: 93px !important;
    color:white !important;
    background-color: var(--black);
  }
  .MuiDataGrid-columnHeaders{
    color: #CCF148 !important;
  }
  .MuiTablePagination-root{
    color: #FFFFFF !important;
  }
  .MuiDataGrid-columnSeparator{
    visibility: hidden;
  }
  .MuiDataGrid-rowSeparator{
    visibility: hidden;
  }
  .MuiDataGrid-cell{
    border:none !important;;
  }
  .css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root{
    color:white !important;
  }
`;
