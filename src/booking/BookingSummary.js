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
    var theaterName = location.state.theaterName;

    const [items, setItems] = useState([])
    const initialvalues = {
        theaterName: theaterName,
        movieName: localStorage.getItem('booking'),
        numberOfSeats: numberOfSeats
    };
    const [inputs, setInputs] = useState(initialvalues);

    useEffect(() => {
        creatBookingDetail();
    }, [])

    const creatBookingDetail =() =>{
        fetch(`${HostUrl.hostUrl}/BookingSummary`, {
            method: 'POST',
            headers: {
                'access-control-allow-origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        }).then((response) => {
            response.json().then((result) => {
              console.log(result)
            })
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            <h1>Booking Detail</h1>
            <div className='main-container'>
                <div className='detail'>
                    <span className='heading'> Movie Name :</span>
                    <span>
                        {inputs.movieName}
                    </span>
                </div>
                <div className='detail'>
                    <span className='heading'> Theater Name :</span>
                    {theaterName}
                </div>
                <div className='detail'>
                    <span className='heading'> total Seat :</span>
                    <span>{inputs.numberOfSeats}</span>
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