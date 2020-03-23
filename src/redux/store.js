'use-strict'


import { combineReducers, createStore } from 'redux';

import CustomerDataReducer from './reducers/customer_data_reducer';

const AppReducers = combineReducers({
  CustomerDataReducer
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);


export default store;
