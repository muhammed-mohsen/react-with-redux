import reducer from "./reducer";
import { applyMiddleware, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import configureSagaMiddleware from "./saga/sagaMiddleware";
import { watchAgeUp } from "./saga/saga";

const configureStore = () => {
  const store = createStore(
    reducer,
    applyMiddleware(configureSagaMiddleware()),
    devToolsEnhancer({ trace: true })
  );

  return { store, configureSagaMiddleware };
};

export default configureStore;
