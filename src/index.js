import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducers } from './redux/reducers'
import { Provider } from 'react-redux'
import './stylesheets/index.css'

const enhancer = compose(
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export const store = createStore(
  reducers, enhancer
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
