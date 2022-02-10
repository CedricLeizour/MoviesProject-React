import React from 'react';
import Poster from '../../assets/images/poster.jpg';


// == Import
import './styles.scss';

const Card = ({ movie }) => {
  return (
    <div className='card'>
      <img src={movie.poster_path 
      ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
      :  Poster
    } 
    alt="" 
    />
      <h2>{movie.title}</h2>
    </div>
  );
};

export default Card;
