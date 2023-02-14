import 'bootstrap/dist/css/bootstrap.min.css';
import './ShowComponent.css';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import HostUrl from '../HostUrl.json'
import { Link } from 'react-router-dom';


function Show() {
    const location = useLocation();
    var cityId = location.state.cityId;
    var movieId = location.state.movieId;
    var movieName = location.state.movieName;
    var theaterName = ""

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
            localStorage.setItem('booking',movieName);
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

      theaterName =  filteredTheater.theaterName
        // <span ref={theaterName}>
        //   {filteredTheater.theaterName}
        // </span>
      ))

    return(
        <>
        <h1>this is show page</h1>
        <h4>City Id : {cityId}</h4>
        <h4>Movie Id : {movieId}</h4>
        <h4>{items.length}</h4>
        <h4>{shows.length}</h4>
       <div className='theater-show'>
       {filterTheater}
       {shows.map((show)=>
            <span><Link to="/seat" state={{showId: show.showId , movieId: show.movieId, theaterId: show.theaterId ,theaterName :theaterName}}>{show.duretion}</Link></span>
        )}
       </div>
        </>
    );
}

export default Show;