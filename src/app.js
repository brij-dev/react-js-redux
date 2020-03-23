'use-strict'

//Dependencies
import React, { Component } from "react";

import { connect } from 'react-redux'; //Redux support
import * as Actions from './redux/actions'; //Redux support


class App extends Component {


  constructor(props){

    super(props);

    // Updating customer data in RAM (redux memory)
    this.props.updateCustomerData(
      {
        'user_name': 'John doe',
        'user_email': 'johndoe@gmail.com'
      }
    );

  }


  // Renders UI
  render() {

    return(

      <div className="main-container">
        {' User Name ' + this.props.CustomerData['user_name']}
        {' User Email ' + this.props.CustomerData['user_email']}
      </div>

    )

  }

}


function mapStateToProps(state){
  return {
    CustomerData: state.CustomerDataReducer
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateCustomerData: (CustomerData) => dispatch({type: Actions.UPDATE_CUSTOMER_DATA, payload: CustomerData}),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
