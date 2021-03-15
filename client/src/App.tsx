import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { PrivateRoute } from './components/PrivateRoute';
import { AccountForm } from './features/account/AccountForm';
import Cart from './features/Cart/Cart';
import Details from './features/Details/Details';
import './scss/app.scss';
import { AccountControl } from './services/AccountControl';
import { DetailsControl } from './services/DetailsControl';

export const accountControl = new AccountControl();
export const detailsControl = new DetailsControl();

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/account/form" component={AccountForm} />
          <PrivateRoute exact path="/">
            <Details />
          </PrivateRoute>
          <PrivateRoute exact path="/cart">
            <Cart />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
