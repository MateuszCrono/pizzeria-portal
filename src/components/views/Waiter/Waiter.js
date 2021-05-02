import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-dom';

const Waiter = () => (

  <div className={styles.component}>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>New Order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`} activeClassName='active'>Orders</Link>
    <h2> {'Waiter View'}</h2>
  </div>

);

export default Waiter;
