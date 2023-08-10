import React, { useState } from "react";
import userIcon from "../assets/User-Icon.png"
import "./css/personalInfo.css"
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function PersonInfo(props){
    const [user, setUser] = useState(true)
    if(!user){
        return <Navigate to= "/qualification" />
    }
    function handleChange2(event){
        props.handleChangeee("hello");
        // props.handleChangeee(event.target.name);
        // console.log(event)
    }
    function handleSubmit(event){
        event.preventDefault()                   // This will not refresh the page when submit button is clicked
        // submitToAPI(formData)               // if we have an API we can send form data via this method
        console.log(formData)
    }
    // console.log(formData)
    return (
        <>
            <div className="personInfo">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstName" className="form-title">First Name*</label>
                        <br />
                            <input
                                type="text"
                                onChange={()=>props.handleChangeee(event)}
                                name="firstName"
                                id="firstName"
                                // value={formData.firstName}
                            />
                            
                        <br />
                        <label htmlFor="lastName" className="form-title">Last Name*</label>
                        <br />
                            <input
                                type="text"
                                onChange={()=>props.handleChangeee(event)}
                                name="lastName"
                                id="lastName"
                                // value={formData.firstName}
                            />
                            <br />
                        <label htmlFor="email" className="form-title">Email*</label>
                        <br />
                            <input
                                type="email"
                                onChange={()=>props.handleChangeee(event)}
                                name="email"
                                id="email"
                                // value={formData.firstName}
                            />
                            <br />
                        <label htmlFor="phno" className="form-title">Phone Number*</label>
                        <br />
                            <input
                                // type="number"
                                onChange={()=>props.handleChangeee(event)}
                                name="phno"
                                id="phno"
                                // value={formData.firstName}
                            />
                        <br />
                        <span className="material-symbols-outlined resume">upload</span>
                        <span>Upload Resume</span>
                        <br />
                        <label htmlFor="url" className="form-title">Enter Portfolio URL (if any)</label>
                        <br />
                            <input
                                type="text"
                                onChange={()=>props.handleChangeee(event)}
                                name="url"
                                id="url"
                                // value={formData.firstName}
                            />
                            <br />
                        <div>
                            <p className="form-title">Preferred Job Roles*:</p>
                            <input type="checkbox" name="inDes" id="inDes" onChange={()=>props.handleChangeee(event)}/>
                            <label htmlFor="inDes" className="Preference-label">Instructional Designer</label><br />
                            <input type="checkbox" name="soEng" id="soEng" onChange={()=>props.handleChangeee(event)}/>
                            <label htmlFor="soEng" className="Preference-label">Software Engineer</label><br />
                            <input type="checkbox" name="soQuEng" id="soQuEng" onChange={()=>props.handleChangeee(event)}/>
                            <label htmlFor="soQuEng" className="Preference-label">Software Quality Engineer</label>
                        </div>
                        <p className="form-title">If You Are Registering Via A Referral, Please Mention Full Name Of The Employee Who Referred You</p>
                        <input type="text"
                                // onChange={handleChange}
                                name="referral"
                                id="referral"
                                // value={formData.firstName}
                            />
                        
                        <input type="checkbox" name="jobUpdate" id="jobUpdate" onChange={()=>props.handleChangeee(event)}/>
                        <label htmlFor="jobUpdate" className="Preference-label">Send me job related updates via mail</label><br />
                    
                    </form>
                </div>
                <div className="userPic">
                    <img src={userIcon} alt="" className="user_icon"/>
                    <p className="userPicText">UPLOAD DISPLAY PICTURE</p>
                    <p className="form-title">Max. image size: 5 MB</p>
                </div>
            </div>
            <button className="form-btn" onClick={()=> {
                        setUser(prevVal => !prevVal)
                        props.toggle()
                        }}>Next
                </button>
        </>
    )
}