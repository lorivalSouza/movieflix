import { AxiosRequestConfig } from 'axios';
import MovieReview from 'components/MovieReview';
import ResultCard from 'components/ResultCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'type/movie';
import { hasAnyRoles } from 'util/auth';
import { requestBackend } from 'util/requests';

import './styles.css';

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    setIsLoading(true);
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies/' + movieId,
      withCredentials: true,
    };
    requestBackend(params)
      .then((response) => {
        setMovie(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      <div className="movie-details-container">
        <div className="base-card movie-details-card">
          <div className="row">
            <div className="col-xl-6">
              <div className="movie-img-container">
                <img src={movie?.imageUrl} alt={movie?.title}></img>
              </div>
              <div className="movie-title-container">
                <h1>{movie?.title} </h1>
              </div>
              <div className="movie-sub-title-container">
                <h4>{movie?.subTitle}</h4>
                <h6>Ano: {movie?.year}</h6>
              </div>
              <div className="movie-genre-container">
                {movie && <p> {movie?.genre.name}</p>}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="movie-synopsis-container">
                <h2>Sinopse do filme:</h2>
                <h4>{movie?.synopsis}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          {hasAnyRoles(['ROLE_MEMBER']) && (
            <MovieReview movieId={movieId} />
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
