import React, { useState } from "react";
import "./css/login.css"
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Login(props){
    // const navigate = useNavigate();
    const [user, setUser] = useState(true)
    if(!user){
        return <Navigate to= "/personal" />
    }
    return(
    <>
        <div id="navbar">
            <img src="./icons/logo_used_in_header.svg" alt="logo of website"/>
        </div>
        <div id="container">
            <form action="">
                <div id="heading">
                    <img src="/icons/back.svg" alt=""/>
                    <p>Log in with</p>
                </div>
                <div className="email">
                    <input type="email" placeholder="Username/Email ID"/>
                    <p> <a href="" className="link">FORGOT USERNAME?</a></p>
                </div>
                <div className="email">
                        <input type="password" placeholder="Password" />
                        <img src="icons/preview.svg" alt="" />
                        <p><a href="" className="link">FORGOT PASSWORD?</a></p>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="rem" name="rem" />
                    <label htmlFor="rem">Remember Me</label>
                </div>
                <div>
                    <button className="btn" onClick={()=> {
                        setUser(prevVal => !prevVal)
                        props.toggle()
                        }}>
                        LOG IN
                    </button>
                    {/* <button className="btn" onClick={()=> navigate('/app')}>LOG IN</button> */}
                </div>
            </form>
    </div>
    <div className="page">
        <p><a href="" className="link">About</a></p>
        <p id="stick"></p>
        <p><a href="" className="link">Contact Us</a></p>
    </div>
    </>
    )
}