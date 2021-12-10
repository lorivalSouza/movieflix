import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router-dom';

import './styles.css';
import MovieCatalog from './MovieCatalog';
import MovieDetails from './MovieDetails';

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/movies">
            <MovieCatalog />
          </PrivateRoute>
          <PrivateRoute path="/admin/movies/:movieId">
            <MovieDetails />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;