import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'type/movie';
import { SpringPage } from 'type/vendor/spring';
import { requestBackend } from 'util/requests';

import './styles.css';

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/movies',
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-title">
          <h1>Tela listagem de filmes</h1>
        </div>

        <div className="home-item">
          <Link to="/movies/1">
            <p>Acessar /movies/1</p>
          </Link>
        </div>
        <div className="home-item">
          <Link to="/movies/2">
            <p>Acessar /movies/2</p>
          </Link>
        </div>
        <div className="home-item">
          <Link to="/movies/3">
            <p>Acessar /movies/3</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCatalog;
