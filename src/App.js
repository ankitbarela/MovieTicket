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
import Order from './order/OrderComponent';
import Seat from './seats/SeatComponent';
import Show from './shows/ShowComponent';


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
            <Route exact path="/terms" element={<TermsCondition />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/ragister" element={<Ragister />}></Route>
            <Route exact path="/reset" element={<ResetPassword />}></Route>
            <Route exact path="/show" element={<Show />}></Route>
            <Route exact path="/seat" element={<Seat />}></Route>
            <Route exact path="/order" element={<Order />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
