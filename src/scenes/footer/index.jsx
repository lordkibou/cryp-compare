import { Link } from "react-router-dom";

const Footer = ({ property }) => {
    return (
        <footer className={`footer ${property}`}>
            <div>© 2023 Cryp Compare. All Rights Reserved.</div>
            <div className="footer-content">
                <Link className="link-text" to={"https://github.com/lordkibou"} target="_blank" rel="noopener noreferrer">Made with <span role="img" aria-label="heart">&#x2764;</span> by Juan Diaz</Link>
            </div>
        </footer>
      );
}

export default Footer;