import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <div>
                <Link to="#">
                    <img src="logo.png" alt="Logo-CrypCompar" className="logo"/>
                </Link>
            </div>
        </header>
      );
}

export default Navbar;