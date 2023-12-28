import About from "./About";
import CustomerSay from "./CustomerSay";
import Kigali from "./Kigali";
import OnlineMenu from "./OnlineMenu";
import Footerr from "./Footerr";

const Home = () => {
    return (
        <div className="home">
            <Kigali />
            <OnlineMenu />
            <CustomerSay />
            <About />
            <Footerr />
        </div>
    );
}
 
export default Home;