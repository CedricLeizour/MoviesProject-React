import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Card from '../Card';

// == Import
import './styles.scss';

const UserList = () => {
  const [listData, setListData] = useState([]);
  const removeItemFromList = (movie) => {
    const newList = listData.filter((data) => data.id !== movie.id);
    setListData(newList);
    /* const arrayId = listData.indexOf(movie);
    listData.splice(arrayId, 1);
    setListData([...listData]); */
    console.log(arrayId, listData);
  };

  useEffect(() => {
    const moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(',')
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=1c7bacd2276cb4fe1a9f30056ba28695&language=fr-FR`).then((res) => setListData((listData) => [...listData, res.data]));
    }
    console.log(listData);
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>Favoris <span>📽️❤️</span></h2>
      <div className="result">
        {listData.length > 0
          ? (listData.map((movie) => (<Card movie={movie} key={movie.id} removeItemFromList={removeItemFromList} />)))
          : <h2>Aucun favori pour le moment</h2>}
      </div>
    </div>
  );
};

export default UserList;
