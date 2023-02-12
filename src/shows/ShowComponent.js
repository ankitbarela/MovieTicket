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


    useEffect(() => {
        debugger
        fetch(`${HostUrl.hostUrl}/Theater`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
    }, [])

    return(
        <>
        <h1>this is show page</h1>
        <h4>City Id : {cityId}</h4>
        <h4>Movie Id : {movieId}</h4>
        <h4>{items.length}</h4>
        </>
    );
}

export default Show;