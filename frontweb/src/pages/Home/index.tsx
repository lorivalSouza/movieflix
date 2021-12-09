import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
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
  );
};

export default Home;
