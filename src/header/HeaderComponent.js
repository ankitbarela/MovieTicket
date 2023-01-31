import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderComponent.css';
import Popup from 'reactjs-popup';
import { useEffect, useState } from 'react';

function Header() {
    const [show, setShow] = useState(false);

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(() => {
        debugger
        getAuthorityToken();
    }, [])

    const  getAuthorityToken = ()=>{
       var user = localStorage.getItem('tokenKey');
       if(user){
         setIsLoggedIn(true);
       }
     }

   const logout =()=> {
        localStorage.removeItem('tokenKey');
    }
    return (
        <>
            <div className="Header">
                <nav className="navbar navbar-expand-sm background-color navbar-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    <h3>Movie Ticket Application</h3>
                                </a>
                            </li>
                        </ul>
                            {!isLoggedIn ? <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active responsive-button" href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/t">Terms And Conditions</a>
                                </li>
                            </ul> :
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active responsive-button" onClick={logout}  href="/">Logout</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/t">Terms And Conditions</a>
                                    </li>
                                </ul>}

                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
