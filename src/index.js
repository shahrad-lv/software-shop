import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './theme/globalStyle';
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={rootReducer}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
