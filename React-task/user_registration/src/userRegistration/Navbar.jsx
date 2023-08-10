import React from "react";
import logo from "../assets/Quantum-Logo.png"
// import userIcon from "../assets/user_icon.jpg"
import "./css/navbar.css"

export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt="" />
            {/* <img src={userIcon} alt="" /> */}
        </nav>
    )
}