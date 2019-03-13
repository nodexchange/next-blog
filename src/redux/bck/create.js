/* global __DEVELOPMENT__ __CLIENT__ __DEVTOOLS__ */
import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import createMiddleware from './middleware/clientMiddleware';


export default function createStore(history, client, data) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history);

  const middleware = [createMiddleware(client), reduxRouterMiddleware];

  let finalCreateStore;
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies, import/no-unresolved
    const { persistState } = require('redux-devtools');
    // eslint-disable-next-line global-require, import/no-unresolved
    const DevTools = require('../containers/DevTools/DevTools');

    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }
  // eslint-disable-next-line global-require, import/no-unresolved
  const reducer = require('./modules/reducer');

  const store = finalCreateStore(reducer, data);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      // eslint-disable-next-line global-require, import/no-unresolved
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  return store;
}
