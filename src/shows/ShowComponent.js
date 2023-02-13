import 'bootstrap/dist/css/bootstrap.min.css';
import './ShowComponent.css';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import HostUrl from '../HostUrl.json'


function Show() {
    const location = useLocation();
    var cityId = location.state.cityId;
    var movieId = location.state.movieId;

    const [items, setItems] = useState([])
    const [shows, setShows] = useState([])


    useEffect(() => {
        debugger
        fetch(`${HostUrl.hostUrl}/Theater`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
            getShows();
    }, [])

    var getShows = ()=>{
        fetch(`${HostUrl.hostUrl}/Shows`)
        .then(res => res.json())
        .then(
            (result) => {
                setShows(result);
            }
        )
    }

    const filterTheater = items.filter(theater => theater.movieId == movieId).map(filteredTheater => (
        <li>
          {filteredTheater.theaterName}
        </li>
      ))

    return(
        <>
        <h1>this is show page</h1>
        <h4>City Id : {cityId}</h4>
        <h4>Movie Id : {movieId}</h4>
        <h4>{items.length}</h4>
        <h4>{shows.length}</h4>
        {shows.map((show)=>
            <div>{show.duretion}</div>
        )}
        {filterTheater}
        </>
    );
}

export default Show;