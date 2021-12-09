import React from "react";

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);


const matchDispatchToProps = dispatch => ({
    toggleCartHidden: () => {console.log("in the dispatcher");dispatch(toggleCartHidden())}
});

export default connect(null, matchDispatchToProps)(CartIcon);