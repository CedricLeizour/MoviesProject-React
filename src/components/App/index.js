import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import UserList from '../UserList';

// == Import
import './styles.scss';

const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coup-de-coeur" element={<UserList />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </div>
);

export default App;
