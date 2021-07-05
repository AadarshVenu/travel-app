import logo from "../assets/images/logo.svg";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <button>Login</button>
            </div>
        </>
    );
};

export default Header;
