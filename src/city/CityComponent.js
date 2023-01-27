import 'bootstrap/dist/css/bootstrap.min.css';
import './CityComponent.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function City(props) {
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

    function handlerCity(e) {
        props.onSelect(e.target.value);
        props.onLoad(false);
    }

    return (
        <>
            <div className="city">
                <h5 className='heading'>Choose Your City</h5>
                <div className="cityies row">
                    {items.map((city) =>
                        <div className='col-md-3 small-img'>
                            <img src='/images/ncr.avif' alt='not uplaoded' />
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
