import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card';

// == Import
import './styles.scss';

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/search/movie?api_key=1c7bacd2276cb4fe1a9f30056ba28695&query=java&language=fr-FR',
      ).then((res) => setMoviesData(res.data.results));
  }, []);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input type="text" placeholder="Entrer le titre d'un film" id="search-input" />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top<span>→</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Flop<span>→</span>
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData.slice(0, 12).map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))};
      </div>
    </div>
  );
};

export default Form;
