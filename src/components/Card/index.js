import React from 'react';
import Poster from '../../assets/images/poster.jpg';


// == Import
import './styles.scss';

const Card = ({ movie }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  //Ici, les genres de l'API sont stockées dans un tableau "genres" avec une clé genre_id et une clé genre_name. 
  //On veut récupérer le genre_name.
  // Vu la longueur de certains ID, un switch case est plus approprié que boucler jusqu'à 10751 (id la plus haute)
  const genreFinder = () => {
    let genreArray = [];
    for(let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  return (
    <div className='card'>
      <img src={movie.poster_path 
      ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
      :  Poster
    } 
    alt="affiche du film" 
    />
      <h2>{movie.title}</h2>
      {movie.release_date ? <h5> Date de sortie : {dateFormater(movie.release_date)}</h5> : ""}
      <h4>{movie.vote_average}/10 <span>⭐</span></h4>
      <ul>{genreFinder()}</ul>
      {movie.overview ? <h3>Synopsis</h3> : ""}
      <p>{movie.overview}</p>

      <div className="btn">Ajouter aux favoris</div>
    </div>
  );
};

export default Card;
