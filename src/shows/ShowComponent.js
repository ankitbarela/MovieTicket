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
        fetch(`${HostUrl.hostUrl}/Theater`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
        getShows();
        localStorage.setItem('booking', movieName);
    }, [])

    var getShows = () => {
        fetch(`${HostUrl.hostUrl}/Shows`)
            .then(res => res.json())
            .then(
                (result) => {
                    setShows(result);
                }
            )
    }

    const theater = items.filter(theater => theater.movieId == movieId).map(filteredTheater => (

        theaterName = filteredTheater.theaterName
    ))

    return (
        <>
            <div className='theater-show'>
                <div className='page-heading'>Theater</div>
                <img src='/images/theater.jpeg'  alt='not uplaoded'/>
                <div>
                    <span className='theater-name'>{theater}:</span>
                    {shows.map((show) =>
                        <span><Link to="/seat" state={{ showId: show.showId, movieId: show.movieId, theaterId: show.theaterId, theaterName: theaterName }}>{show.duretion}</Link></span>
                    )}
                </div>

            </div>
        </>
    );
}

export default Show;