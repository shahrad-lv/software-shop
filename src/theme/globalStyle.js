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
`;
 
export default GlobalStyle;