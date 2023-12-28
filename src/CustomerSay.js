import { useState } from "react";
import human11 from './images/human1.jpg';
import human22 from './images/human2.jpg';
import human33 from './images/human3.jpg';
import human44 from './images/human4.jpg';

const CustomerSay = () => {
    const [client, setClient] = useState([
        {image1: human11, names: 'Antony Clifton', count: '4', body: 'The food was decent, but waitress are hot here strongly suggest the place.', id: 1},
        {image1: human22, names: 'Maria Sanchez', count: '3', body: 'My kids like the place they love the food here, they prefer to eat here than my home recipes., The food is good but not better than what my magical hands cooks.', id: 2},
        {image1: human33, names: 'Tamika Jackson', count: '2', body: 'I prefer this place more than any other restaurant than I have visited in this area the food is good here.', id: 3},
        {image1: human44, names: 'Brandon Ming', count: '5', body: 'When I needed break from our insane Asian dishes this place is like Heaven to in and I love every moment that l get without eating Asian food.', id: 4}
    ]);

    return (
        <div className="customer">
            <h2>Customers say</h2>
            <div className="customer-cards">
                { client.map((eachCustomer) => (
                   <div className="customer-div" key={eachCustomer.id}>
                        <div className="profile">
                            <img src={ eachCustomer.image1 } />
                            <p>{ eachCustomer.names }</p>
                        </div>
                        <p className="count">{ eachCustomer.count }</p>
                        <p className="description">{ eachCustomer.body }</p>
                   </div> 
                ))};
            </div>
        </div>
    );
}
 
export default CustomerSay;