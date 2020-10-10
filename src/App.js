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
import {IsUserRedirect, ProtectedRoute} from "./helpers/routes";
import { useAuthListener } from './hooks';

export default function App() {
    const { user } = useAuthListener();
  return (
      <Router>
          <Route path={ROUTES.HOME} exact>
              <Home />
          </Route>

          <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
              <Browse />
          </ProtectedRoute>

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

      </Router>
  );
}

