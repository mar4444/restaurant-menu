import chieff from './images/chief.jpg';

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about-me">
                <h2>About us</h2>
                <p> Little Lemon Restaurant in Kigali: A citrus-infused culinary haven.
                    Savor a unique blend of zesty flavors in every dish, from appetizers to desserts. 
                    Experience a refreshing twist on classic favorites. Your taste buds will thank you!
                </p>
            </div>
            <img src={chieff} />
        </div>
    );
}
 
export default About;