import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';


import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';


const TestPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {

          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });

          // OLD VERSION before redux:
          // this.setState({
          //   currentUser: {
          //     id: snapshot.id,
          //     ...snapshot.data()
          //   }
          // }, () => {
          //   console.log(this.state);
          // })
          console.log(snapshot.data());
        });
      } else { 
        // OLD VERSION before redux:
        // this.setState( {currentUser: null} );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/** The Header always must be visible, regardless of the page we are in */}
        <Header />
        {/* switch allows us to only render 1 ROute match. To avoid rendering multiple components */}
        <Switch>
          {/* without the exact, when visiting: "/" ... both components would render */}
          <Route exact={true} path='/' component={HomePage}/>
          <Route exact={true} path='/shop' component={ShopPage}/>
          {/**
           * Notice how instead of: component={SignInAndSignUpPage}
           * we use render with a conditional .. so it is only rendered if there is a value for the currentUser
           */}
          <Route exact={true} path='/signIn' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/'/>
              ) : (
                <SignInAndSignUpPage/>
              )
            }
          />
          <Route exact={true} path='/checkout' component={CheckoutPage}/>
          <Route exact={true} path='/test' component={TestPage}/>
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// the "user" action, gets dispatched to all reducers
// the reducers use the "type" to figure out if they need to act or not
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// passing null because we do not need state to props here
export default connect(mapStateToProps, mapDispatchToProps)(App);
