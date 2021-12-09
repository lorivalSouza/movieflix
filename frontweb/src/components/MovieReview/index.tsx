import { AxiosRequestConfig } from 'axios';
import ResultCard from 'components/ResultCard';
import { useEffect, useState } from 'react';
import { Review } from 'type/review';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props ={
  movieId: string;
}

const MovieReview = ({movieId } : Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [review, setReview] = useState<Review>();
    useEffect(() => {
        setIsLoading(true);
        const params: AxiosRequestConfig = {
          method: 'GET',
          url: '/movies/' + movieId+'/review',
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
        <div className="review-card">
          <form>
            <div className="form-container">
              <input
                type="text"
                name="review"
                className="review-input"
                placeholder="Deixe sua avaliação aqui"
              />
              <button type="submit" className="btn btn-primary review-button">
              SALVAR AVALIAÇÃO
              </button>
            </div>
          </form>
        </div>
        <>
          <div className="details-card">
            <div className="container-details">
              {review && <ResultCard username={review?.user.name}
               description={review?.text} />}
            </div>
            <div className="container-details">
              <ResultCard username="Mirian Souza: "
               description="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit " />
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default MovieReview;