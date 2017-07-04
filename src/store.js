import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import reducer from './reducers'
import epics from './epics';

const epicMiddleware = createEpicMiddleware(epics);
const middleware = applyMiddleware(epicMiddleware, logger);

export default createStore(reducer, {}, middleware);
