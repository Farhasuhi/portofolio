import Toggle from '../Toggle/Toggle';
import './Navbar.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
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
                        <li><Link to="hero" spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
                        <li><Link to="services" spy={true} smooth={true} offset={-100} duration={500} >Services</Link></li>
                        <li><Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500} >Portfolio</Link></li>
                        <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={500} >Skills</Link></li>
                    </ul>
                </div>
                <button className="button n-button">
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} > Contact me</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;