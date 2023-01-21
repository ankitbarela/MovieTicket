import 'bootstrap/dist/css/bootstrap.min.css';
import './CityComponent.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function City() {
  const   [cities, setCities] = useState([]);
    useEffect(() => {
        fetch("https://localhost:44366/api/City")
          .then(res => res.json())
          .then(
            (result) => {
               setCities(result);
               console.log(cities);
               console.log(result);
            }
          )
      }, [])

    return (
        <>
        <div className="city">
                <h1>this is city page</h1>
                <div className="cityies">
                {cities.map(city =>{
                    <Link>{city.CityName}</Link>
                })}
                </div>
         </div>
        </>
    );
}

export default City;
