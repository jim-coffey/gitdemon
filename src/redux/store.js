import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import gitRepoReducers from './reducers';

const store = createStore(gitRepoReducers, applyMiddleware(thunk));

export default store;
