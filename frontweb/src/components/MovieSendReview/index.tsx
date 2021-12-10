import { AxiosRequestConfig } from 'axios';
import ResultCard from 'components/ResultCard';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Review } from 'type/review';
import { requestBackend, requestPostMovieSendReview } from 'util/requests';
import './styles.css';

type Props = {
  movieId: string;
};

type FormData = {
  movieId: number;
  text: string;
};

const MovieSendReview = ({ movieId }: Props) => {

  const { register, handleSubmit } = useForm<FormData>();

  const [hasError, setHasError] = useState(false);

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    requestPostMovieSendReview(formData)
      .then((response) => {
        setHasError(false);
        window.location.reload();
      })
      .catch((error) => {
        setHasError(true);
      });
  };



  return (
    <>
      <div className="review-container">
        <div className="review-card">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-container">
              <input
              {...register('text')}
                type="text"
                name="text"
                className="review-input"
                placeholder="Deixe sua avaliação aqui"
              />
              <button type="submit" className="btn btn-primary review-button">
                SALVAR AVALIAÇÃO
              </button>
            </div>
          </form>
        </div>        
      </div>
    </>
  );
};

export default MovieSendReview;
