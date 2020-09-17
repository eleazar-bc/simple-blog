import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import { getFirebase } from 'react-redux-firebase';

const initialSate = {};
const middleware = [thunk.withExtraArgument({ getFirebase })];

const createStoreWithFirebase = compose(applyMiddleware(...middleware))(createStore);

const store = createStoreWithFirebase(allReducers, initialSate);

export default store;
