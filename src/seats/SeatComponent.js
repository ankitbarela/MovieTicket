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
    const [items, setItems] = useState([])
    const [priceOfOneSeat, setPricePerOneSeat] = useState(200)
    const [selectedSeatCount, setSelectedSeatCount] = useState(0);
    const [disable, setDisable] = useState(false);
    const initialState = [];
    const [bookedSeats, setBookedSeats] = useState([])
    var seated = "";

    const [inputs, setInputs] = useState(initialState);
    var totalPrice = inputs.length * priceOfOneSeat;
    const onSelectSeat = (e) => {
        var checked = e.target.checked;
        var seatValue = e.target.value;
        if (checked) {
            inputs.push({
                seatId: e.target.value,
            });
            setSelectedSeatCount(selectedSeatCount + 1)
        }
        else {
            setInputs((current) =>
                current.filter((seat) => seat.seatId !== seatValue))
            setSelectedSeatCount(selectedSeatCount - 1)
        }
    }

    useEffect(() => {
        fetch(`${HostUrl.hostUrl}/Screen`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
        var getBookedseats = localStorage.getItem('selectedSeats')
        var array = JSON.parse(getBookedseats)
        console.log(array)
        setBookedSeats(array)
    }, [])
    bookedSeats.map(seat =>
        { seated = seat.seatId
     console.log(seated)}
         )
         
    return (
        <>
        {seated}
            <div className="seatStructure">
                <center>
                    <table id="seatsBlock">
                        <p id="notification"></p>
                        <tr>
                            <td colspan="6"><div className="screen">SCREEN</div></td>
                            <br />
                        </tr>
                        <tr>
                            <td></td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>A</td>
                            <td><input disabled={disable} type="checkbox" className={seated == 'A1' ? 'sold' : ''}  onClick={onSelectSeat} value="A1" /></td>
                            <td><input disabled={disable} type="checkbox" className={seated == 'A2' ? 'sold' : ''} onClick={onSelectSeat} value="A2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="A3" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="A4" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="A5" /></td>
                        </tr>

                        <tr>
                            <td>B</td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="B1" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="B2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="B3" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="B4" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="B5" /></td>
                        </tr>

                        <tr>
                            <td>C</td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="C1" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="C2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="C3" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="C4" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="C5" /></td>
                        </tr>

                        <tr>
                            <td>D</td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="D1" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="D2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="D3" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="D4" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="D5" /></td>
                        </tr>

                        <tr>
                            <td>E</td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="E1" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="E2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="E2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="E3" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="E4" /></td>
                        </tr>

                        <tr>
                            <td>F</td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="F1" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="F2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="F3" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="F4" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="F5" /></td>
                        </tr>
                    </table>

                    <br />
                    <Link className='submit-link' to="/booking" state={{ seats: inputs.length, price: totalPrice, idOfTheater: theaterId, theaterName: theaterName, selectedSeats: inputs }}>pay {totalPrice} rs.</Link>
                </center>
            </div>

            <br /><br />
            <div className='sign-box'>
                <span>
                    <input type="checkbox" className="sold" />
                    <span>Sold</span>
                </span>
                <span>
                    <input type="checkbox" />
                    <span>Available</span>
                </span>
                <span>
                    <input type="checkbox" className='selected' />
                    <span>Selected</span>
                </span>
            </div>
        </>
    );
}

export default Seat;