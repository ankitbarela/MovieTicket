import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderComponent.css';
import Popup from 'reactjs-popup';
import { useEffect ,useState} from 'react';

function Header() {
    const [show, setShow] = useState(false); 

    // // useEffect(() => {
    // //     cityPopup
    // // }, []);

    return (
        <>
       <h1>This is Empty Page</h1>
        </>
    );
}

export default Header;
