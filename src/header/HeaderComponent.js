import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderComponent.css';

function Header() {
    return (
        <>
          <div className="Header">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <h3>Movie Ticket Application</h3>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">   
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Privacy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Terms And Conditions</a>
                        </li>
                    </ul>
                </div>
            </nav>
          </div>
        </>
    );
}

export default Header;
