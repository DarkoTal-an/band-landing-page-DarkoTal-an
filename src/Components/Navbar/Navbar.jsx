import React from 'react'
import { NavLink} from "react-router-dom";
import "./Navbar.css";
// import { motion,AnimateSharedLayout as Cool } from "framer-motion"



export default function Navbar() {
  let styleActive = {fontSize: "24px",backgroundColor: "goldenrod", color: "black"};

    return (
        <div className="navbar">        
            <nav className = "nav-list">
                <NavLink className="nav-links" activeClassName="active-style" activeStyle={styleActive} exact={true} to="/">Home</NavLink>{" - "}
                <NavLink className="nav-links" activeClassName="active-style" activeStyle={styleActive} to="/jim">Jim</NavLink>{" - "}
                <NavLink className="nav-links" activeClassName="active-style" activeStyle={styleActive} to="/john">John</NavLink>{" - "}
                <NavLink className="nav-links" activeClassName="active-style" activeStyle={styleActive} to="/ray">Ray</NavLink>{" - "}
                <NavLink className="nav-links" activeClassName="active-style" activeStyle={styleActive} to="/robby">Robby</NavLink>
            </nav>
      </div>
    )
}



