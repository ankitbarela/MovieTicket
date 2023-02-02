import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeComponent.css';
import { useEffect, useState } from 'react';
import City from '../city/CityComponent';




function Home() {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState();

  useEffect(() => {
    setTimeout(() => setShow(true), 2000);
  }, []);

  function handleCityName(cityName) {
    setItem(cityName);
    setShow(false);
  }

  return (
    <>
      {show ? <City onSelect={handleCityName} /> : null}
      <div className="banner">
        <div className="select-city">
        </div>
      </div>
    </>
  );
}

export default Home;
