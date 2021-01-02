import { createGlobalStyle } from 'styled-components';
import IRANSansWeb_Light from './IRANSansWeb_Light.woff';

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
`;
 
export default GlobalStyle;