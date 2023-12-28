import { Link } from 'react-router-dom';
import chieff from './images/chief.jpg';

const Kigali = () => {
    return (
        <div className="kigalii">
            <div className="kgl">
                <h1 className="tittle">Little Lemon</h1>
                <h1 className="kcity">Kigali</h1>
                <p>Lille Lemon is a charming neighborhood bistro thatserves simple food and classic cocktails in a lively but casual environment.
                The restaurant features a locally-sourced menu with daily specials.
                </p>
                <div className="btnn">
                    <Link to="/booking">Reserve a Table</Link>
                </div>
            </div>
            <div className="kgl-img">
                <img src={chieff} />
            </div>
        </div>
        
    );
}
 
export default Kigali;