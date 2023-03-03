import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderComponent.css';
import { useEffect, useState } from 'react';
import HostUrl from '../HostUrl.json'
import { useSelector } from 'react-redux';


function Header() {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [userName,setUserName] = useState("");
    var userId = localStorage.getItem('userId');

  const loginDetail = useSelector((state) => state.login.data.value)

console.log(loginDetail)
    useEffect(() => {
        fetch(`${HostUrl.hostUrl}/User/${userId}`)
        .then(res => res.json())
        .then(
            (result) => {
                setUserName(result.name)
                console.log(result) 
                localStorage.setItem('loggedUser', JSON.stringify(result))
            }
        )
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
                            {!loginDetail ? <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/ragister">Sign In</a>
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
                                        <a className="nav-link active" href="/">{userName}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" onClick={logout}  href="/">Logout</a>
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
