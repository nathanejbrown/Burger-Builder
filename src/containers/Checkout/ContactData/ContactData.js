import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
      this.setState({ loading: true });
      //alert('You continue!');
      //.json in the post is specific to Firebase.
      const order = {
        ingredients: this.props.ingredients,
        price: this.props.price.toFixed(2),
        customer: {
          name: 'Marcellus Wallace',
          address: {
            street: '1600 Pennsylvania Avenue',
            zipCode: '20500',
            country: 'USA'
          },
          email: 'test@test.com'
        },
        deliveryMethod: 'fastest'
      }
      axios.post('/orders.json', order)
        .then(response => {
          this.setState({ loading: false });
          this.props.history.push('/');
        })
        .catch(error => {
          this.setState({ loading: false });
        });

  }

  render () {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
        <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
        <input className={classes.Input} type="text" name="street" placeholder="Street" />
        <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
          {form}
      </div>
    );
  }
}

export default ContactData;
