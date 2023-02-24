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
    var selectedSeats = location.state.selectedSeats;
    var showId = location.state.showId;

    const [seats, setSeats] = useState('')
    var stringaSeat = '';

    const initialvalues = {
        theaterName: theaterName,
        movieName: localStorage.getItem('booking'),
        numberOfSeats: numberOfSeats,
        seatNumbers: '',
        bookedSeats : [],
        showId : showId
    };
    const [inputs, setInputs] = useState(initialvalues);

    useEffect(() => {
        // TODO Need to uncomment this api call function
        ConvertOnString();
       // creatBookingDetail();     
        localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats))
    }, [])

    const creatBookingDetail = () => {
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
                if (result.statusCode != 200) {
                    console.log("booking not ragistered")
                }
                console.log(result)
            })
        }).catch(err => {
            console.log(err);
        });
    }

    const ConvertOnString = () => {
        debugger
        selectedSeats.map((seat) =>
           {
            stringaSeat =   seat.seatId +','+ stringaSeat;
            inputs.bookedSeats.push(seat.seatId);
           }
        )
        setSeats(stringaSeat)
        console.log(seats)
        console.log(selectedSeats)
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
                <div className='detail'>
                    <span className='heading'> selectedSeats :</span>
                    {seats}
                </div>
            </div>
        </>
    );
}

export default Booking;