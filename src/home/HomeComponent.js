import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeComponent.css';
import { useEffect ,useState} from 'react';
import City from '../city/CityComponent';




function Home() {
  const [show, setShow] = useState(false); 
  const [item, setItem] = useState(); 

  useEffect(() => {
    setTimeout(() => setShow(true), 1000);
}, []);

function handleCityName(cityName){
    setItem(cityName);
    setShow(false);
    console.log(item);
    console.log(cityName);
  }

    return (
        <>
    { show ? <City onSelect={handleCityName}/> : null }
            <div className="banner">
                    <div className="select-city">
                            <div className="discription">It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium.</div>
                    </div>
            </div>
        </>
    );
}

export default Home;
