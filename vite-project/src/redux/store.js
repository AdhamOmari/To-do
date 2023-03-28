import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk'
import AllReducer from './AllReducer'



const store = createStore(AllReducer, applyMiddleware(thunk));


export { store };