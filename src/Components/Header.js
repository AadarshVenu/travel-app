import logo from "../assets/images/logo.svg";
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} alt="logo" />
                <button>Login</button>
            </div>
        </>
    );
};

export default Header;
