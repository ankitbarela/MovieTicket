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

    useEffect(() => {
        debugger
        fetch(`${HostUrl.hostUrl}/Theater`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
    }, [])
    
    const filterTheater = items.filter(theater => theater.theaterId == theaterId).map(filteredTheater => (
        <div>
            {filteredTheater.theaterName}
        </div>
      ))
    return(
        <>
        <h1>this is booking summary page price is {totalPrice} number of seats {numberOfSeats}</h1>
        {filterTheater}
        </>
    );
}

export default Booking;