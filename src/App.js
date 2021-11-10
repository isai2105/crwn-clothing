import { Switch, Route } from 'react-router-dom';
import React from 'react';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';


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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/** The Header always must be visible, regardless of the page we are in */}
        <Header currentUser={this.state.currentUser} />
        {/* switch allows us to only render 1 ROute match. To avoid rendering multiple components */}
        <Switch>
          {/* without the exact, when visiting: "/" ... both components would render */}
          <Route exact={true} path='/' component={HomePage}/>
          <Route exact={true} path='/shop' component={ShopPage}/>
          <Route exact={true} path='/signIn' component={SignInAndSignUpPage}/>
          <Route exact={true} path='/test' component={TestPage}/>
        </Switch>
      </div>
    );
  }

}

export default App;
