import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const TestPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      {/** The Header always must be visible, regardless of the page we are in */}
      <Header />
      {/* switch allows us to only render 1 ROute match. To avoid rendering multiple components */}
      <Switch>
        {/* without the exact, when visiting: "/" ... both components would render */}
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact={true} path='/shop' component={ShopPage}/>
        <Route exact={true} path='/test' component={TestPage}/>
      </Switch>
    </div>
  );
}

export default App;
