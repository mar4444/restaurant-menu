import { useState } from "react";
import buggerr from './images/bugger.jpg';
import freshfruitss from './images/freshfruits.jpg';
import noodlee from './images/noodle.jpg';
import { Link } from 'react-router-dom';

const OnlineMenu = () => {
    const [OnlineMenu, setOnlineMenu] = useState([
        { image: buggerr, tittle: 'bugger', price: '$12.99', body: 'The famous greek salad of crispy lettuce, peppers, olives, and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.' , id: 1 },
        { image: freshfruitss, tittle: 'Fresh Fruits', price: '$5.99', body: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. It is a great appetizer to start with!', id: 2 },
        { image: noodlee, tittle: 'Noodle', price: '$5.00', body: 'This comes straight from grandma s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. This is perfect for a light dessert!', id: 3 }
    ]);

    return (
        <div className="onlinemenu">
            <div className="special">
              <h1 className="thisweek">This week specials</h1>
                <div className="view-menu">
                  <Link to="/OrderOnline" className="linkk">Online Menu</Link>
                </div>
            </div>
            <div className="cards">
                { OnlineMenu.map((eachMenu) => (
                   <div className="every-menu" key={eachMenu.id}>
                    <img src={ eachMenu.image } />
                    <div className="tittle-price">
                      <h3>{ eachMenu.tittle}</h3>
                      <p>{ eachMenu.price}</p>
                    </div>
                    <p className="online-body">{ eachMenu.body }</p>
                   </div> 
                ))}
            </div>
        </div>
    );
}
 
export default OnlineMenu;