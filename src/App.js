import './App.css';
import Movie from './movie/MovieComponent';
import Home from './home/HomeComponent';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/HeaderComponent';
import TermsCondition from './terms-condition/TermsConditionComponent';
import Login from './login/LoginComponent';
import Ragister from './ragister/RagisterComponent';
import ResetPassword from './reset-password/ResetComponent';
import Seat from './seats/SeatComponent';
import Show from './shows/ShowComponent';
import Booking from './booking/BookingSummary';
import AComponent from './demo/AComponent';


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
            <Route exact path="/terms" element={<TermsCondition />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/ragister" element={<Ragister />}></Route>
            <Route exact path="/reset" element={<ResetPassword />}></Route>
            <Route exact path="/show" element={<Show />}></Route>
            <Route exact path="/seat" element={<Seat />}></Route>
            <Route exact path="/booking" element={<Booking />}></Route>
            <Route exact path="/A" element={<AComponent />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
