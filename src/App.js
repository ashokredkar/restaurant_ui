import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { Navbar } from './components';
import ExploreMenu from './pages/explore/ExploreMenu';

const App = () => (
  <>
    {/* <Navbar /> */}
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/explore' element={<ExploreMenu />} />
    </Routes>
  </>
);

export default App;
