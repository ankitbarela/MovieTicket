import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import './SeatComponent.css';
import React, { useEffect, useState } from "react";
import HostUrl from '../HostUrl.json'
import { Link } from 'react-router-dom';

function Seat() {
    var location = useLocation();
    var showId = location.state.showId;
    var theaterId = location.state.theaterId;
    var movieId = location.state.movieId;
    var theaterName = location.state.theaterName;
    const [items, setItems] = useState([])
    const [priceOfOneSeat, setPricePerOneSeat] = useState(0)
    const [numberOfSeats, setNumberOfSeats] = useState(0)

    useEffect(() => {
        fetch(`${HostUrl.hostUrl}/Screen`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
    }, [])

    const seatClicked = (e) => {
        debugger
        var price = e.target.id
        var totalPrice = Number(price) + priceOfOneSeat
        setPricePerOneSeat(totalPrice)
        var seatCount = totalPrice / Number(price)
        setNumberOfSeats(seatCount)
    }

    const getScreen =
        items.filter(screen => screen.movieId == movieId && screen.theaterId == theaterId).map(filteredTheater => (
            [...Array(filteredTheater.totalSeats)].map((e, i) => <a href="javascript:;" id={filteredTheater.pricePerSeat} onClick={seatClicked} key={i}>*</a>)
        ))

    return (
        <>
            <span className='seat-page row'>
                <div className='seats col-md-3'>
                    {getScreen}
                    <div>count : {numberOfSeats}</div>
                    <div>
                        {numberOfSeats > 0 ?
                        <Link className='submit-link' to="/booking" state={{ seats: numberOfSeats, price: priceOfOneSeat, idOfTheater: theaterId, theaterName: theaterName }}>pay {priceOfOneSeat} rs.</Link>
                    :<div>
                    </div>}
                    </div>
                </div>
            </span>
        </>
    );
}

export default Seat;