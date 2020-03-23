'use-strict'


import * as Actions from '../actions'


const CustomerDataReducer = (state = {CustomerData: {}}, action) => {

  if(action.type === Actions.UPDATE_CUSTOMER_DATA){
    state = action.payload;
  }

	return state;
}


export default CustomerDataReducer;
