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
    const user = {};
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
              user={user}>
              <SignIn />
          </IsUserRedirect>

          <IsUserRedirect
            exact
              path={ROUTES.SIGN_UP}
              loggedInPath={ROUTES.BROWSE}
              user={user}>
              <SignUp />
          </IsUserRedirect>
          <Route>
              <h1 style={{textAlign: "center"}}>The resource you requested could not be found.</h1>
          </Route>
      </Router>
  );
}

