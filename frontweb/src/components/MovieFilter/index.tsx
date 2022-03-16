import { Controller, useForm } from 'react-hook-form';
import { Genre } from 'type/genre';
import Select from 'react-select';
import './styles.css';
import { useEffect, useState } from 'react';
import { requestBackend } from 'util/requests';

export type MovieFilterData = {
  //name: string;
  genre: Genre | null;
};

type Props = {
  onSubimitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubimitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<MovieFilterData>();

  const onSubmit = (formData: MovieFilterData) => {
    console.log('Enviou: ' + formData);
    onSubimitFilter(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);
    const obj: MovieFilterData = {
      //name: getValues('name'),
      genre: getValues('genre'),
    };
    console.log('Enviou: ' + obj.genre?.name);
    onSubimitFilter(obj);
  };

  useEffect(() => {
    requestBackend({ url: '/genres', withCredentials: true }).then(
      (response) => {
        setSelectGenres(response.data.content);
      }
    );
  }, []);

  return (
      <div className="movie-item-search-container">
        <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-form">
          <div className="movie-filter-genre-container">
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectGenres}
                  classNamePrefix="movie-filter-select"
                  isClearable
                  placeholder="Gênero"
                  onChange={(value) => handleChangeGenre(value as Genre)}
                  getOptionLabel={(genre: Genre) => genre.name}
                  getOptionValue={(genre: Genre) => String(genre.id)}
                ></Select>
              )}
            />
          </div>
        </form>
      </div>
  );
};

export default MovieFilter;
