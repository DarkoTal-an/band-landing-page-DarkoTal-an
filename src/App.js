import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import PageNotFound from "./Components/PageN/PageNotFound";
import { motion } from "framer-motion";

import Home from "./Components/Home/Home"
import Jim from "./Components/Jim/Jim";
import John from "./Components/John/John";
import Ray from "./Components/Ray/Ray";
import Robby from "./Components/Robby/Robby";
import Navbar from "./Components/Navbar/Navbar"

function App() {
  // let styleActive = {fontSize: "24px",backgroundColor: "goldenrod", color: "black"};
  return (
    <motion.div >
      <Router>
        <div className="container">
          <div><img src="https://thedoors.com/wp-content/uploads/2020/03/The-Doors-Logo-with-drop-shadow.png" alt="doors-name" /></div>
          <Navbar />
          {/* <NavLink className="nav-links" activeClassName="active-style" activeStyle={styleActive} exact={true} to="/">Home</NavLink>{" - "}
          <NavLink className="nav-links" activeClassName="active-style" activeStyle={styleActive} to="/jim">Jim</NavLink>{" - "}
          <NavLink className="nav-links" activeClassName="active-style" activeStyle={styleActive} to="/john">John</NavLink>{" - "}
          <NavLink className="nav-links" activeClassName="active-style" activeStyle={styleActive} to="/ray">Ray</NavLink>{" - "}
          <NavLink className="nav-links" activeClassName="active-style" activeStyle={styleActive} to="/robby">Robby</NavLink> */}
        </div>
        <Switch>
          <Route path="/band-landing-page-DarkoTal-an/" exact component={Home}/>
          <Route path="/band-landing-page-DarkoTal-an/home" exact component={Home}/>
          <Route path="/jim" exact component={Jim}/>
          <Route path="/john" exact component={John}/>
          <Route path="/ray" exact component={Ray}/>
          <Route path="/robby" exact component={Robby}/>
          <Route path="*" exact component={PageNotFound}/>
        </Switch>
      </Router>
    </motion.div>
  );
}

export default App;
