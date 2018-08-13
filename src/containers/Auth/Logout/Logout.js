import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';

class Logout extends Component {
  componentDidMount () {
    this.props.onLogout();
    this.props.clearOrders();
  }

  render () {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
    clearOrders: () => dispatch(actions.clearOrders())
  }
}

export default connect(null, mapDispatchToProps)(Logout);
