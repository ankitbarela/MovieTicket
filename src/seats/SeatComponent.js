import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import './SeatComponent.css';

function Seat() {
    var location = useLocation();
    var showId = location.state.showId;
    return(
        <>
        <h1>this is seat page and the show id is {showId}</h1>
        <div className='seat-page'>
           <a href="">1</a>
        </div>
        </>
    );
}

export default Seat;