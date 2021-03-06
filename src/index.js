import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose} from 'redux';
import allReducers from './reducers'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import watchClick from './sagas'

const sagaMiddleWare=createSagaMiddleware()

const myStore = createStore(allReducers,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )

  sagaMiddleWare.run(watchClick)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>  
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
