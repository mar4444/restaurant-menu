import NavBar from "./NavBar";
import Home from "./Home";
import Booking from "./Booking";
import OrderOnline from "./OrderOnline";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/OrderOnline">
            <OrderOnline />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
