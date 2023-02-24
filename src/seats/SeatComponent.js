import 'bootstrap/dist/css/bootstrap.min.css';
import { json, useLocation } from 'react-router-dom';
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
    var movieName = localStorage.getItem('booking')
    const [seats, setSeats] = useState([])
    const [priceOfOneSeat, setPricePerOneSeat] = useState(0)
    const [bookedSeats, setBookedSeats] = useState([])
    const [notAvailableSeats, setNotAvailableSeats] = useState([])
    const [selectedSeat, setSelectedSeat] = useState(0);
    const initialState = [];
    const [inputs, setInputs] = useState(initialState);
    var totalPrice = inputs.length * priceOfOneSeat;

    useEffect(() => {
        fetch(`${HostUrl.hostUrl}/Seats`)
            .then(res => res.json())
            .then(
                (result) => {
                    setSeats(result);
                }
            )
            getBookedSeats();
    }, [])

    const getBookedSeats = ()=>{
        fetch(`${HostUrl.hostUrl}/BookedSeat`)
        .then(res => res.json())
        .then(
            (result) => {
                var array = [];
                result.filter(e => e.showId == showId).map(seat=> 
                      array.push(
                          {seatId : seat.bokeedSeatNumber
                          }
                      )
                  ) 
                console.log("this is from api",result)
                setBookedSeats(array)
                console.log("this is for sdijfn",array)
            }
        )
    }
    const onSelectSeat = (e) => {
        var selected = e.target.id;
        seats.filter(e=> e.seatNumber == Number(selected)).map(seat=>
            setPricePerOneSeat(seat.pricePerSeat))
        if (!inputs.some(e => e.seatId == selected)) {
            setSelectedSeat(Number(selected))
            inputs.push({
                seatId: selected
            });
        }
    }

    return (
        <>
            <h1>
                this is seat page{bookedSeats.length}
            </h1>
            <div className='seat-page'>
                <table>
                    <tbody>
                        <tr >
                            {seats.map(seat =>
                                <td>
                                    <a href="javascript:;" id={seat.seatNumber} className={(bookedSeats.some(e=>e.seatId == seat.seatNumber) ? 'booked' :(inputs.some(e => e.seatId == seat.seatNumber) ? 'selected' : ''))} onClick={onSelectSeat}>{seat.seatId}</a>
                                </td>
                            )}
                        </tr>
                    </tbody>
                </table>
                {inputs.length > 0 ?
                    <div>
                        <Link className='submit-link' to="/booking" state={{ seats: inputs.length, price: totalPrice, idOfTheater: theaterId, theaterName: theaterName, selectedSeats: inputs , showId :showId }}>pay {totalPrice} rs.</Link>
                    </div> : <div></div>
                }
            </div>
        </>
    );
}

export default Seat;