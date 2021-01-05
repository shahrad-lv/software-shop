import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './theme/globalStyle';
import rootReducer from "./redux/store/rootReducer";
import { StylesProvider, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createStore, applyMiddleware } from 'redux'
import firebase from './config/firebaseConfig'
import { createFirestoreInstance } from 'redux-firestore'
import theme from './theme/material-ui.theme'
const store = createStore (rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})) ) 

const rrfProps = {
  firebase,
  config: {},
  dispatch : store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </ThemeProvider>
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




