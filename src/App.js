import './App.css';
import Movie from './movie/MovieComponent';
import City from './city/CityComponent';
import Home from './home/HomeComponent';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
     <div className="Header">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <h3>Movie Ticket Application</h3>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">   
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/city">City</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Terms And Conditions</a>
                        </li>
                    </ul>
                </div>
            </nav>
          </div>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/city" element={<City />}></Route>
            <Route exact path="/movie" element={<Movie />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
