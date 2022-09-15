import logo from '../images/logo.png';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
const MyNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt={logo} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Mouse</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">HeadPhones</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Cameras</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Blog</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faUser} />
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Sign in</a></li>
                            <li><a className="dropdown-item" href="#">Create an account</a></li>
                            <li><hr className="dropdown-divider"/></li>
                                <p>Language:</p>
                            <li><a className="dropdown-item" href="#">English</a></li>
                            <li><a className="dropdown-item" href="#">Arabic</a></li>
                        </ul>
                    </li>
                    
                </ul>
                <form className="d-flex">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                </div>
            </div>
        </nav>
    )
};
export default MyNav;