import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieComponent.css';
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
//import Avtar from '../images/Avtar.jpg';

function Movie() {
    const location = useLocation();
    const [items, setItems] = useState([])

    var cityId = location.state.cityId;
    useEffect(() => {
        debugger
        fetch(`https://localhost:44366/api/Movie/${cityId}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
    }, [])

    return (
        <div className="movie">
            <h4>Select Your Movie</h4>
            <div className='row movie-detail'>
            {items.map((movie) =>
                        <div className='col-md-3'>
                            <img src={`/images/${movie.imageName}.jpg`}  alt='not uplaoded'/>
                            <div className='movie-name'><b>Moive Name :</b>{movie.movieName}</div>
                            <div className='detail'><b>Director Name :</b>{movie.directorName}</div>
                            <div className='detail'><b>Rating :</b>{movie.rating}</div>
                            <div className='detail'><b>Producer Name :</b>{movie.producerName}</div>
                            <div className='detail'><b>Movie Type :</b>{movie.movieType}</div>
                        </div>
            )
            }
            </div>
        </div>
    );
}

export default Movie;
