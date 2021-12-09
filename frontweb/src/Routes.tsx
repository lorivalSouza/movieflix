import { BrowserRouter, Switch, Route, Redirect, Router } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Auth from 'pages/Admin/Auth';
import MovieCatalog from 'pages/Admin/MovieCatalog';
import history from 'util/history';
import TesteMV from 'pages/Admin/TesteMV';
import MovieDetails from 'pages/Admin/MovieDetails';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/admin/auth/login" exact />
      <Route path="/" exact>
        <Auth />
      </Route>

      <Route path="/movies" exact>
        <MovieCatalog />
      </Route>

      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>

      <Redirect from="/admin" to="/movies" exact />
      <Route path="/admin" exact>
        <TesteMV />
      </Route>

      <Route path="/admin/auth">
        <Auth />
      </Route>

    </Switch>
  </Router>
);

export default Routes;