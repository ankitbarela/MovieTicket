import 'bootstrap/dist/css/bootstrap.min.css';
import './BookingComponent.css';
import { useLocation } from 'react-router-dom';



function Booking() {
    var location = useLocation();
    var numberOfSeats = location.state.seats;
    var totalPrice = location.state.price;
    return(
        <>
        <h1>this is booking summary page price is {totalPrice} number of seats {numberOfSeats}</h1>
        </>
    );
}

export default Booking;