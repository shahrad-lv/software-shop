import { createGlobalStyle } from 'styled-components';
import IRANSansWeb_Light from './IRANSansWeb_Light.woff';
import theme from '../theme/material-ui.theme'
const GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: 'IRANSansWeb_Light';
        src: url(${IRANSansWeb_Light}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    * {
      margin: 0;
      padding: 0;
      font-family: IRANSansWeb_Light !important;
    }
    .MuiTabs-flexContainer{
      justify-content: center;

    }
    .MuiTabs-flexContainer{
      justify-content: space-around;
      width: 70%;
      height: 200px;
      margin: 0 auto;
    }
    .MuiTabs-indicator	{
      height: 4px;
      border-radius: 5px 5px 0 0 ;
      background: #fff;
      box-shadow: 0 0 15px ${(props) => theme.palette.secondary.main}, 0 0 5px ${(props) => theme.palette.secondary.light}, 0 0 15px ${(props) => theme.palette.secondary.main};
    }

.load-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 1310;
  pointer-events: none;
}

/* .load-screen {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #040925;
  width: 0%;
  height: 100%;
} */

.load-screen1 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #040925;

  width: 100%;
  height: 0%;
}

.faded {
  opacity: 0;
  pointer-events: none;
}

`;
 
export default GlobalStyle;