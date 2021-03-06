import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card';

// == Import
import './styles.scss';

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState('batman');
  const [sortRating, setSortRating] = useState(null);
  const dontRefresh = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1c7bacd2276cb4fe1a9f30056ba28695&query=${search}&language=fr-FR`,
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form onSubmit={dontRefresh}>
          <input
            type="text"
            placeholder="Entrer le titre d'un film"
            id="search-input"
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortRating('goodToBad')}
          >
            Top<span>→</span>
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortRating('badToGood')}
          >
            Flop<span>→</span>
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData.length > 0
          ? (moviesData
            .slice(0, 24)
            .sort((a, b) => {
              if (sortRating === 'goodToBad') {
                return b.vote_average - a.vote_average;
              }
              if (sortRating === 'badToGood') {
                return a.vote_average - b.vote_average;
              }
            })
            .map((movie) => (
              <Card key={movie.id} movie={movie} />
            )))
          : <h2>Aucun résultat ne correspond à votre recherche 😟</h2>}
      </div>
    </div>
  );
};

export default Form;
