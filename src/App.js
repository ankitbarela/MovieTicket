import './App.css';
import Movie from './movie/MovieComponent';
import Home from './home/HomeComponent';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/HeaderComponent';
import TermsCondition from './terms-condition/TermsConditionComponent';
import Login from './login/LoginComponent';
import Ragister from './ragister/RagisterComponent';
import { useState } from 'react';


function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/movie" element={<Movie />}></Route>
            <Route exact path="/p" element={<Header />}></Route>
            <Route exact path="/t" element={<TermsCondition />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/ragister" element={<Ragister />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
