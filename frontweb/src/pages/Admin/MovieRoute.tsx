import { Switch, Route } from 'react-router-dom';
import MovieCatalog from './MovieCatalog';
import MovieDetails from './MovieDetails';

const MovieRoute = () => (
    <Switch>
    <Route path="/movies" exact>
      <MovieCatalog />
    </Route>
    <Route path="/movies/:movieId">
      <MovieDetails />
    </Route>
  </Switch>
)
export default MovieRoute;