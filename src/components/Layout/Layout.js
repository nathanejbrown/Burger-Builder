import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

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
        <Toolbar toggle={this.sideDrawerToggleHandler}/>
        <SideDrawer toggle={this.sideDrawerToggleHandler} open={this.state.showSideDrawer}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    )
  }
}

export default Layout;
