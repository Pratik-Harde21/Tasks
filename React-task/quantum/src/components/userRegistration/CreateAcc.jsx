import React from "react";
import "./css/createAcc.css"
import FilledOne from '../../assets/filled_one.png'
import TwoIcon from '../../assets/two.png'
import ThreeIcon from '../../assets/three.png'
import PersonInfo from "./PersonalInfo";
import Qualification from "../Qualification";

export default function CreateAcc(){
    return(
        <>
            <div className="account">
                <span className="material-symbols-outlined">arrow_back</span>
                <p className="acc-title">Create An Account</p>
                <button className="acc-btn">CANCEL</button>
                <button className="acc-btn">CREATE</button>
            </div>
            <div className="progress">
                <div className="progress-sub">
                    <img src={FilledOne} alt="" className="digit-icon"/>
                    <p className="progress-text">Personal Information</p>
                </div>
                <div className="progress-sub">
                    <img src={TwoIcon} alt="" className="digit-icon"/>
                    <p className="progress-text">Qualifications</p>
                </div>
                <div className="progress-sub">
                    <img src={ThreeIcon} alt="" className="digit-icon"/>
                    <p className="progress-text">Review and Proceed</p>
                </div>
            </div>
            {/* <PersonInfo /> */}
            <Qualification />
        </>
    )
}