import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Burger Builder</NavigationItem>
    { props.isAuthenticated
      ? <React.Fragment>
          <NavigationItem link="/Orders">Orders</NavigationItem>
          <NavigationItem link="/logout">Logout</NavigationItem>
        </React.Fragment>
      : <NavigationItem link="/auth">Authenticate</NavigationItem> }
  </ul>
);

export default navigationItems;
