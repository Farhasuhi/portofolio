import Toggle from '../Toggle/Toggle';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    Suhi
                </div>
                <Toggle></Toggle>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact me
                </button>
            </div>
        </div>
    );
};

export default Navbar;