import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerToggleHandler = () => {
    //best way to set state when new state is dependent on old state.
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })

  }

  render () {
    return (
      <React.Fragment>
        <Toolbar
          toggle={this.sideDrawerToggleHandler}
          isAuth={this.props.isAuthenticated}/>
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          toggle={this.sideDrawerToggleHandler}
          open={this.state.showSideDrawer}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);
