import { AxiosRequestConfig } from 'axios';
import MovieSendReview from 'components/MovieSendReview';
import ResultCard from 'components/ResultCard';
import { useEffect, useState } from 'react';
import { Review } from 'type/review';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  movieId: string;
};

const MovieReview = ({ movieId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState<Review[]>();
  useEffect(() => {
    setIsLoading(true);
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies/' + movieId + '/reviews',
      withCredentials: true,
    };
    requestBackend(params)
      .then((response) => {
        setReview(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      <div className="review-container">
        <MovieSendReview movieId={movieId} />
        <>
          <div className="details-card">
            <div className="base-card comment-card">
              {review?.map((item) => (
                <div key={item.id}>
                  <div className="container-details">
                    <ResultCard
                      username={item.user.name}
                      description={item.text}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default MovieReview;
