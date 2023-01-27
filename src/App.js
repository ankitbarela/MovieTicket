import './App.css';
import Movie from './movie/MovieComponent';
import Home from './home/HomeComponent';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/HeaderComponent';
import TermsCondition from './terms-condition/TermsConditionComponent';
import Login from './login/LoginComponent';
import Ragister from './ragister/RagisterComponent';


function App() {
  return (
    <>
      <div className="Header">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <h3>Movie Ticket Application</h3>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/t">Terms And Conditions</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            {/* <Route exact path="/city" element={<City />}></Route> */}
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
