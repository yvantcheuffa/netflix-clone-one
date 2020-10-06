import React from 'react';
import './App.css';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
    Home,
    Browse,
    SignIn,
    SignUp,
} from "./pages";
import {IsUserRedirect} from "./helpers/routes";

export default function App() {
    const user = null;
  return (
      <Router>
          <Route exact path={ROUTES.HOME}>
              <Home />
          </Route>
          <Route exact path={ROUTES.BROWSE}>
              <Browse />
          </Route>
          <IsUserRedirect
              exact
              path={ROUTES.SIGN_IN}
              loggedInPath={ROUTES.BROWSE}
              user={user}
          >
              <SignIn />
          </IsUserRedirect>
          <Route exact path={ROUTES.SIGN_UP}>
              <SignUp />
          </Route>
      </Router>
  );
}

