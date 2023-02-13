import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import './SeatComponent.css';
import React, { useEffect, useState } from "react";
import HostUrl from '../HostUrl.json'

function Seat() {
    var location = useLocation();
    var showId = location.state.showId;
    var theaterId = location.state.theaterId;
    var movieId = location.state.movieId;
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`${HostUrl.hostUrl}/Screen`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
    }, [])

    const getScreen =
        items.filter(screen => screen.movieId == movieId && screen.theaterId == theaterId).map(filteredTheater => (
            [...Array(filteredTheater.totalSeats)].map((e, i) =><a href="#" key={i}>1</a>)
        ))

    return (
        <>
            <h1>this is seat page and the show id is {showId} theater id is {theaterId} movie id is {movieId}</h1>
            <h1>{items.length}</h1>
            <div className='seat-page'>
                <div>
                {getScreen}
                </div>
            </div>
            
        </>
    );
}

export default Seat;