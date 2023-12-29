import myLogo from './images/logo.jpg';
import { useState } from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("bar-1 unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [islinkMenuclicked, setLinkMenu] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("bar-1 clicked");
            setMenuClass("menu visible");

        } else {
            setBurgerClass("bar-1 unclicked");
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    }

    const updateList = () => {
        if (!islinkMenuclicked) {
            setMenuClass("menu hidden");
        }
        setLinkMenu(!islinkMenuclicked);
    }

    return (
        <div className="navbar">
            <div className="header">
                <div className="loggo">
                  <img src={myLogo} />
                  <p>LITTLE LEMON</p>
                </div>
                    <ul className={menu_class}>
                        <li className={islinkMenuclicked} onClick={updateList}><Link to="/">HOME</Link></li>
                        <li className={islinkMenuclicked} onClick={updateList}><a href="#about">ABOUT</a></li>
                        <li className={islinkMenuclicked} onClick={updateList}><Link to="/booking">ONLINE RESERVATION</Link></li>
                        <li className={islinkMenuclicked} onClick={updateList}><Link to="/OrderOnline">MENU</Link></li>
                    </ul>
                <div className="hamburger" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </div>
        </div>
    );
}
 
export default NavBar;