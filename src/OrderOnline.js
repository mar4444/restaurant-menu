import { useState } from "react";
import salad11 from './images2/salad1.jpg';
import salad22 from './images2/salad2.jpg';
import salad33 from './images2/salad3.jpg';
import salad44 from './images2/salad4.jpg';
import salad55 from './images2/salad5.jpg';
import salad66 from './images2/salad6.jpg';
import salad77 from './images2/salad7.jpg';
import ent11 from './images2/ent1.jpg';
import ent22 from './images2/ent2.jpg';
import ent33 from './images2/ent3.jpg';
import ent44 from './images2/ent4.jpg';
import ent55 from './images2/ent5.jpg';
import ent66 from './images2/ent6.jpg';
import ape11 from './images2/ape1.jpg';
import ape22 from './images2/ape2.jpg';
import ape33 from './images2/ape3.jpg';
import ape44 from './images2/ape4.jpg';
import ape55 from './images2/ape5.jpg';
import ape66 from './images2/ape6.jpg';
import ape77 from './images2/ape7.jpg';
import ape88 from './images2/ape8.jpg';
import ape99 from './images2/ape9.jpg';
import dese11 from './images2/dese1.jpg';
import dese22 from './images2/dese2.jpg';
import dese33 from './images2/dese3.jpg';
import BlogList from "./BlogList";
import Footerr from "./Footerr";

const OrderOnline = () => {
    const [special, setSpecial] = useState([
        {
            image1: salad11, 
            tittle: 'Antony Clifton',
            price: '$12.99',
            unic: 'special',
            body: 'The food was decent, but waitress are hot here strongly suggest the place.', 
            id: 1
        },
        {
            image1: salad22, 
            tittle: 'Antony Clifton',
            price: '$12.99',
            unic: 'special',
            body: 'The food was decent, but waitress are hot here strongly suggest the place.', 
            id: 2
        },
        {
            image1: salad33, 
            tittle: 'Maria Sanchez',
            price: '$12.99',
            unic: 'special',
            body: 'My kids like the place they love the food here, they prefer to eat here than my home recipes., The food is good but not better than what my magical hands cooks.', 
            id: 3
        },
        {
            image1: salad44, 
            tittle: 'Maria Sanchez',
            price: '$12.99',
            unic: 'special',
            body: 'My kids like the place they love the food here, they prefer to eat here than my home recipes., The food is good but not better than what my magical hands cooks.', 
            id: 4
        },
        {
            image1: salad55, 
            tittle: 'Antony Clifton',
            price: '$12.99',
            unic: 'special',
            body: 'The food was decent, but waitress are hot here strongly suggest the place.', 
            id: 5
        },
        {
            image1: salad66, 
            tittle: 'Maria Sanchez',
            price: '$12.99',
            unic: 'special',
            body: 'My kids like the place they love the food here, they prefer to eat here than my home recipes., The food is good but not better than what my magical hands cooks.', 
            id: 6
        },
        {
            image1: salad77, 
            tittle: 'Antony Clifton', 
            price: '$12.99',
            unic: 'special',
            body: 'The food was decent, but waitress are hot here strongly suggest the place.', 
            id: 7
        },
        {
            image1: ent11, 
            tittle: 'Maria Sanchez',
            price: '$12.99',
            unic: 'entrees',
            body: 'My kids like the place they love the food here, they prefer to eat here than my home recipes., The food is good but not better than what my magical hands cooks.', 
            id: 8
        },
        {
            image1: ent22, 
            tittle: 'Tamika Jackson',
            price: '$12.99',
            unic: 'entrees',
            body: 'I prefer this place more than any other restaurant than I have visited in this area the food is good here.', 
            id: 9
        },
        {
            image1: ent33, 
            tittle: 'Tamika Jackson', 
            price: '$12.99',
            unic: 'entrees',
            body: 'I prefer this place more than any other restaurant than I have visited in this area the food is good here.', 
            id: 10
        },
        {
            image1: ent44, 
            tittle: 'Antony Clifton', 
            price: '$12.99',
            unic: 'entrees',
            body: 'The food was decent, but waitress are hot here strongly suggest the place.', 
            id: 11
        },
        {
            image1: ent55, 
            tittle: 'Antony Clifton', 
            price: '$12.99',
            unic: 'entrees',
            body: 'The food was decent, but waitress are hot here strongly suggest the place.', 
            id: 12
        },
        {
            image1: ent66, 
            tittle: 'Maria Sanchez',
            price: '$12.99',
            unic: 'entrees',
            body: 'My kids like the place they love the food here, they prefer to eat here than my home recipes., The food is good but not better than what my magical hands cooks.', 
            id: 13
        },
        {
            image1: ape11, 
            tittle: 'Maria Sanchez',
            price: '$12.99',
            unic: 'appetizers',
            body: 'My kids like the place they love the food here, they prefer to eat here than my home recipes., The food is good but not better than what my magical hands cooks.', 
            id: 14
        },
        {
            image1: ape22, 
            tittle: 'Antony Clifton', 
            price: '$12.99',
            unic: 'appetizers',
            body: 'The food was decent, but waitress are hot here strongly suggest the place.', 
            id: 15
        },
        {
            image1: ape33, 
            tittle: 'Maria Sanchez',
            price: '$12.99',
            unic: 'appetizers',
            body: 'My kids like the place they love the food here, they prefer to eat here than my home recipes., The food is good but not better than what my magical hands cooks.', 
            id: 16
        },
        {
            image1: ape44, 
            tittle: 'Antony Clifton', 
            price: '$12.99',
            unic: 'appetizers',
            body: 'The food was decent, but waitress are hot here strongly suggest the place.', 
            id: 17
        },
        {
            image1: ape55, 
            tittle: 'Maria Sanchez',
            price: '$12.99',
            unic: 'appetizers',
            body: 'My kids like the place they love the food here, they prefer to eat here than my home recipes., The food is good but not better than what my magical hands cooks.', 
            id: 18
        },
        {
            image1: ape66, 
            tittle: 'Tamika Jackson', 
            price: '$12.99',
            unic: 'appetizers',
            body: 'I prefer this place more than any other restaurant than I have visited in this area the food is good here.', 
            id: 19
        },
        {
            image1: ape77, 
            tittle: 'Tamika Jackson', 
            price: '$12.99',
            unic: 'appetizers',
            body: 'I prefer this place more than any other restaurant than I have visited in this area the food is good here.', 
            id: 20
        },
        {
            image1: ape88, 
            tittle: 'Maria Sanchez',
            price: '$12.99',
            unic: 'appetizers',
            body: 'My kids like the place they love the food here, they prefer to eat here than my home recipes., The food is good but not better than what my magical hands cooks.', 
            id: 21
        },
        {
            image1: ape99, 
            tittle: 'Maria Sanchez',
            price: '$12.99',
            unic: 'appetizers',
            body: 'My kids like the place they love the food here, they prefer to eat here than my home recipes., The food is good but not better than what my magical hands cooks.', 
            id: 22
        },
        {
            image1: dese11, 
            tittle: 'Antony Clifton', 
            price: '$12.99',
            unic: 'desert',
            body: 'The food was decent, but waitress are hot here strongly suggest the place.', 
            id: 23
        },
        {
            image1: dese22, 
            tittle: 'Maria Sanchez',
            price: '$12.99',
            unic: 'desert',
            body: 'My kids like the place they love the food here, they prefer to eat here than my home recipes., The food is good but not better than what my magical hands cooks.', 
            id: 24
        },
        {
            image1: dese33, 
            tittle: 'Antony Clifton',
            price: '$12.99',
            unic: 'desert', 
            body: 'The food was decent, but waitress are hot here strongly suggest the place.', 
            id: 25
        }
    ]);


    return (
        <div className="order">
            <div className="orderdetail">
                <h2>Menu</h2>
                <p>Find our amazing dishes</p>
            </div>
            <div className="nav-between">
                <ul>
                    <li><a href="#special">Specials</a></li>
                    <li><a href="#entrees">Entrees</a></li>
                    <li><a href="#appetizers">Appetizers</a></li>
                    <li><a href="#desert">Desserts</a></li>
                </ul>
            </div>

            <div className="cards-category">
                <h2 className="headingg" id="special">Spacials</h2>
                <BlogList special={special.filter((category) => category.unic === 'special')} />
                <h2 className="headingg" id="entrees">Entrees</h2>
                <BlogList special={special.filter((category) => category.unic === 'entrees')} />
                <h2 className="headingg" id="appetizers">Appetizers</h2>
                <BlogList special={special.filter((category) => category.unic === 'appetizers')} />
                <h2 className="headingg" id="desert">Desert</h2>
                <BlogList special={special.filter((category) => category.unic === 'desert')} />
            </div>
            <Footerr />
        </div>
    );
}
 
export default OrderOnline;