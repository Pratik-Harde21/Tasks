import React, { useState } from "react";
import Data from "./QuantumData.json"
import "./css/roleDetails.css"
import upArrow from "../assets/up-arrow.png"
import InstructDesign from "./InstructionalDesigner";
import SoftwareEngineer from "./SoftwareEngineer";
import SoftwareQaEngineer from "./SoftwareQualityEngineer";


export default function RoleDetails(){
    const [isClickedProcess, setIsClickedProcess] = useState(false)
    function toggle(){
        setIsClickedProcess(prevVal => !prevVal)
    }

    return (
        <>
            <div className="card">
                <div className="card-content">
                    <p className="title">{Data[0].title}</p>
                    <button className="card-btn">APPLY</button>
                    <div className="card-date">
                        <p>Date & Time:</p>
                        <p><b>{Data[0].date}</b></p>
                    </div>
                    <hr />
                    <div className="card-role">
                        <p>Job Role:</p>
                        <p><b>{ Data[0].role.map(ele =>{
                            return (
                                <span key={ele}>{ele} </span>
                            )
                        })}</b></p>
                    </div>
                    {/* <select name="" id="pre-requisites" className="card-detail">
                        <option htmlFor="pre-requisites">Pre-requisites & Application Process</option>
                    </select> */}
                </div>
                <div>
                    <div className="pre-requisites" onClick={toggle}>
                        <p>Pre-requisites & Application Process</p>
                        {isClickedProcess ? <span className="material-symbols-outlined">expand_less</span> : <span className="material-symbols-outlined">expand_more</span>}
                    </div>
                    {isClickedProcess && <div className="dropable">
                        <p className="sub-topic">General Instructions :</p>
                        <p className="sub-text">- We have a two-year indemnity for permanent candidates. We will provide training to the selected candidates.
                        </p>
                        <p className="sub-text">-Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test.</p>

                        <hr className="sub-space"/>

                        <p className="sub-topic">Instructions for the Exam :</p>
                        <p className="sub-text">- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes. </p>
                        <p className="sub-text">- Candidates would not be able to appear for the exam if the web camera attached to their system is not functional. </p>
                        <p className="sub-text">- The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void. </p>
                        <p className="sub-text">- Candidate’s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam.</p> 
                        <p className="sub-text">- Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam. </p>
                        <p className="sub-text">- Candidates cannot use an iOS system/device for this exam.</p>

                        <hr className="sub-space" />

                        <p className="sub-topic">Minimum System Requirements :</p>
                        <p className="sub-text">- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above). </p>
                        <p className="sub-text">- The latest version of Google Chrome Browser only. </p>
                        <p className="sub-text">- Please note that Internet speed should be minimum 1 Mbps.</p> 
                        <p className="sub-text">- Do not use a MacBook or iPad for the proctored exam.</p>

                        <hr className="sub-space" />

                        <p className="sub-topic">Process:</p>
                        <p className="sub-text">- Every round is an elimination round. Candidates need to clear all rounds to get selected. </p>
                        <br />
                        <p className="sub-text">Round I : 4th August, 2018</p> 
                        <p className="sub-text">Aptitude Test : 25 Questions </p>
                        <br />
                        <p className="sub-text">Round II (Interview) : 4th August, 2018. </p>
                    </div>}
                </div>
            </div>


            <div className="card">
                <div className="card-content">
                    <div>
                        <p className="tislpre">Time Slots & Preferences</p>
                        <p className="sub-topic">Select a Time Slot:</p>
                        <input type="radio" id="time1" name="slot" className="slot"/>
                        <label htmlFor="time1" className="slot-label">9:00 AM to 11:00 AM</label>
                        <br />
                        <input type="radio" id="time2" name="slot" className="slot"/>
                        <label htmlFor="time2" className="slot-label">1:00 PM to 3:00 PM</label>
                    </div>
                    <hr className="slot-space"/>
                    <div>
                        <p className="sub-topic">Select Your Preference :</p>
                        <input type="checkbox" name="" id="inDes" />
                        <label htmlFor="inDes" className="slot-label">Instructional Designer</label><br />
                        <input type="checkbox" name="" id="soEng" />
                        <label htmlFor="soEng" className="slot-label">Software Engineer</label><br />
                        <input type="checkbox" name="" id="soQuEng" />
                        <label htmlFor="soQuEng" className="slot-label">Software Quality Engineer</label>
                    </div>
                    <hr className="slot-space"/>
                    <div className="upload">
                        <p>Upload Updated Resume</p>
                        <span><img src={upArrow} alt="" className="upArrow"/></span>
                    </div>
                </div>
            </div>
            <InstructDesign />
            <SoftwareEngineer />
            <SoftwareQaEngineer />
        </>
    )
}