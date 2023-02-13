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
    const [screen, setScreen] = useState()

    useEffect(() => {
        fetch(`${HostUrl.hostUrl}/Screen`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
            getScreen();
    }, [])
       
      function getScreen(){
        items.filter(screen => screen.movieId == movieId && screen.theaterId == theaterId).map(filteredTheater => (
            setScreen(filteredTheater)
          ))
      }

    return(
        <>
        <h1>this is seat page and the show id is {showId} theater id is {theaterId} movie id is {movieId}</h1>
        <h1>{items.length}</h1>
        <div className='seat-page'>
           <a href="">1</a>
        </div>
        {screen.screenNumber}
        </>
    );
}

export default Seat;