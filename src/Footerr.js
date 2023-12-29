import myLogo from './images/logo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footerr">
            <div className="little">
                <div className="lemon">
                  <img src={myLogo} />
                  <p>LITTLE LEMON</p>
                </div>
                <div className="footer-category">
                    <ul className='nav-footer'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="/booking">Online Reservation</Link></li>
                        <li><Link to="/OrderOnline">Menu</Link></li>
                    </ul>

                    <div className="contact">
                        <h3>Contact</h3>
                        <p>Kigali city, Kicukiro, kk 155</p>
                        <p>Rwanda</p>
                        <p>+250784405041</p>
                        <p>manirumva@gmail.com</p>
                    </div>

                    <div className="socials">
                        <h3>Socials</h3>
                        <ul>
                            <li><a href="www.instagram.com">Instagram</a></li>
                            <li><a href="www.facebook.com">Facebook</a></li>
                            <li><a href="www.tiktok.com">TikTok</a></li>
                            <li><a href="www.x.com">X</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="last">
                <p>This is final project. Created by Imanirumva Martin. See you on</p>
                <h3><a href="www.github.com">GitHub</a></h3>
            </div>
        </div>
    );
}
 
export default Footer;