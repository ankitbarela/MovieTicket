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
            <h1>this is seat page and the show id is {showId} theater id is {theaterId} movie id is {movieId}</h1>
            <h1>{items.length}</h1>
            {priceOfOneSeat}<br></br>
            {numberOfSeats}
            <div className='seat-page'>
                {getScreen}
            </div>
            <div>
                <Link to="/booking" state={{ seats : numberOfSeats, price : priceOfOneSeat}}>Book Ticket</Link>
            </div>
        </>
    );
}

export default Seat;