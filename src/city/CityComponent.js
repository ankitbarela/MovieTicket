import 'bootstrap/dist/css/bootstrap.min.css';
import './CityComponent.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function City() {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch("https://localhost:44366/api/City")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )

    }, [])

    const listItems = items.map((number) =>
        <Link to="/movie" state={{ cityId: number.cityId }}>{number.cityName}</Link>
    );
    return (
        <>
            <div className="city">
                <h1>Choose Your City</h1>
                <div className="cityies row">
                    {items.map((city) =>
                        <div className='col-md-3'>
                            <img src='/images/city-image.jpeg'  alt='not uplaoded'/>
                            <div className='city-name'>
                              <Link to="/movie" state={{ cityId: city.cityId }}>{city.cityName}</Link>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    );
}

export default City;
