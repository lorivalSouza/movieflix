import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Moviex } from 'type/moviex';
import { SpringPage } from 'type/vendor/spring';
import { requestBackend } from 'util/requests';
 


const Movie = () => {
  const [page, setPage] = useState<SpringPage<Moviex>>();
 
  useEffect(() => {
    const params : AxiosRequestConfig = {
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };
 
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);
 
  return (
    <div className='admin-container'>
      {page?.content.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};
 
export default Movie;
