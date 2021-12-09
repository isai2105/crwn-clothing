import React from "react";
import { Link } from "react-router-dom";

import './header.styles.scss';

/** NOTE how to import an image (SVG). The name "Logo" is made up by us */
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { connect } from "react-redux";


const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
                hidden ?
                <CartDropdown/>   
                :
                null
            }
    </div>
)

// every time the store is updated, this function is called
// the result of this method is merged with the proeprties of the Header component (that is why 'currentUser' has the same name as the Header property)

// This is an old syntax.
/*
const mapsStateToProps = state => ({
    currentUser: state.user.currentUser
});*/

const mapsStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

// the first argument is the function that allows us to access the state (store in Redux)
// it returns a new connected component class that wraps the component we pass in
export default connect(mapsStateToProps)(Header);