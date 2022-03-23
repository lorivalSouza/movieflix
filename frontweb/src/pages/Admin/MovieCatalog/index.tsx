import { AxiosRequestConfig } from 'axios';
import MovieFilter, { MovieFilterData } from 'components/MovieFilter';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'type/movie';
import { SpringPage } from 'type/vendor/spring';
import { requestBackend } from 'util/requests';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: {
        genre: null,
      },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({
      activePage: 0,
      filterData: data,
    });
  };

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id
      },
    };
    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <MovieFilter onSubimitFilter={handleSubmitFilter} />

      <div className="movie-item-container">
        <div className="row">
          {page?.content.map((movie) => (
            <div className="col-sm-6 col-xl-3" key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <div className="movie-item-details-container">
                  <div className="base-card movie-item-img-container">
                    <img src={movie?.imgUrl} alt={movie?.title}></img>
                    <h1>{movie?.title} </h1>
                    <h6> {movie?.year} </h6>
                    <h4>{movie?.subTitle}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Pagination
        forcePage={page?.number}
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default MovieCatalog;
