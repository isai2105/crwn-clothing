import React from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';

import { createStructuredSelector } from "reselect";

// we can pass history, because we included "withRouter"
const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>
            GO TO CHECKOUT</CustomButton>
        </div>
    )
};

// we call the selector, so we memoize "cache" .. 
// so the dropdown component is not re-rendered when the state changes that is unrelated to the cart items
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// Note: if we do not specify the second argument to the connect method ...
// we have access to other things .. included the "dispatch".
// the result of the connect, which is a component, passes to withRouter
export default withRouter(connect(mapStateToProps)(CartDropdown));