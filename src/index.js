import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {  createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import fbConfig from './config/fbConfig';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';

const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebase, fbConfig)
  )
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};


// const middlewares = [
//   thunk.withExtraArgument({getFirestore })
// ]
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(...middlewares),
//     reduxFirestore(fbConfig)
//   )
// )



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
