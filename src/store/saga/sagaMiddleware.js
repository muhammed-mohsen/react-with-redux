import createSagaMiddleware from "redux-saga";

const configureSagaMiddleware = () => {
  const sagaMiddleware = createSagaMiddleware();

  return sagaMiddleware;
};
export default configureSagaMiddleware;
