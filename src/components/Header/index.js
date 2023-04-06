import './styles.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <h2>
                <Link to="/">LIKEMINDS</Link>
            </h2>
            <div className="header-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/history">
                    <li>History</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
            </div>
        </div>
    )
}

export default Header;