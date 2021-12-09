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
    const params : AxiosRequestConfig = {
      url: "/movies",
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);
 
  
  return (
    <>
    <h1>ta aquimmmcmncn</h1>
    <div className="home-container">
      <div className="home-title">
        <h1>Tela listagem de filmes</h1>
      </div>

      <Link to="/movies">
        <div className="home-item">
          <p>
            <a href="/movies/1">Acessar /movies/1</a>
          </p>
        </div>
        <div className="home-item">
          <p>
            <a href="/movies/2">Acessar /movies/2</a>
          </p>
        </div>
      </Link>
    </div>
    </>
  );
};

export default MovieCatalog;
