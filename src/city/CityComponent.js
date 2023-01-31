import 'bootstrap/dist/css/bootstrap.min.css';
import './CityComponent.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import HostUrl from '../HostUrl.json'


function City(props) {
    const [items, setItems] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        fetch(`${HostUrl.hostUrl}/City`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    getAuthorityToken();
                }
            )

    }, [])

    const getAuthorityToken = () => {
        var user = localStorage.getItem('tokenKey');
        if (user) {
            setIsLoggedIn(true);
        }
    }

    return (
        <>
            {isLoggedIn ?
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
                </div> : <div></div>}
        </>
    );
}

export default City;
