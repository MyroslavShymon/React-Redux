import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App.jsx";
import { rootReducer } from "./redux/rootReducer.js";
import { createLogger } from "redux-logger";
import { forbiddenmWordsMiddleware } from "./redux/middlewares/index.js";
import createSagaMiddleware from "@redux-saga/core";
import { sagaWatcher } from "./redux/sagas.js";

const logger = createLogger({
  // predicate: (getState, action) => action.type !== SHOW_LOADER,
});

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger, forbiddenmWordsMiddleware, saga)
  )
);

saga.run(sagaWatcher);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
