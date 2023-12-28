import myLogo from './images/logo.jpg';

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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Online Reservation</a></li>
                        <li><a href="#">Menu</a></li>
                    </ul>

                    <div className="contact">
                        <h3>Contact</h3>
                        <p>21 S Racine Ave, Chicago, IL 60607</p>
                        <p>United States</p>
                        <p>+250784405041</p>
                        <p>contact@littlelemon</p>
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
                <p>This is final project for Meta Front-End certification. Created by Sue Brechko. See you on</p>
                <h3><a href="www.github.com">GitHub</a></h3>
            </div>
        </div>
    );
}
 
export default Footer;