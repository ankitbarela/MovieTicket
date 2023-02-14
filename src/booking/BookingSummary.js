import 'bootstrap/dist/css/bootstrap.min.css';
import './BookingComponent.css';
import { useLocation } from 'react-router-dom';
import HostUrl from '../HostUrl.json'
import React, { useEffect, useState } from "react";



function Booking() {
    var location = useLocation();
    var numberOfSeats = location.state.seats;
    var totalPrice = location.state.price;
    var theaterId = location.state.idOfTheater;
    const [items, setItems] = useState([])
    const [movieName, SetMovieName] = useState("")

    useEffect(() => {
        fetch(`${HostUrl.hostUrl}/Theater`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
        var nameofMovie = localStorage.getItem('booking');
        SetMovieName(nameofMovie);
    }, [])

    const filterTheater = items.filter(theater => theater.theaterId == theaterId).map(filteredTheater => (
        <span>
            {filteredTheater.theaterName}
        </span>
    ))
    return (
        <>
            <h1>Booking Detail</h1>
            <div className='main-container'>
                <div className='detail'>
                    <span className='heading'> Movie Name :</span>
                    <span>
                        {movieName}
                    </span>
                </div>
                <div className='detail'>
                    <span className='heading'> Theater Name :</span>
                    {filterTheater}
                </div>
                <div className='detail'>
                    <span className='heading'> total Seat :</span>
                    <span>{numberOfSeats}</span>
                </div>
                <div className='detail'>
                    <span className='heading'> Price :</span>
                    {totalPrice}
                </div>
            </div>
        </>
    );
}

export default Booking;