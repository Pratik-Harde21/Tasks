import React, { useState } from "react";
import userIcon from "../../assets/User-Icon.png"
import "./css/personalInfo.css"
import PhoneInput from 'react-phone-number-input'

export default function PersonInfo(){
    const [value, setValue] = useState()
    return (
        <>
            <div className="personInfo">
                <div className="form">
                    <form action="">
                        <label htmlFor="firstName" className="form-title">First Name*</label>
                        <br />
                            <input
                                type="text"
                                // onChange={handleChange}
                                name="firstName"
                                id="firstName"
                                // value={formData.firstName}
                            />
                        <br />
                        <label htmlFor="lastName" className="form-title">Last Name*</label>
                        <br />
                            <input
                                type="text"
                                // onChange={handleChange}
                                name="lastName"
                                id="lastName"
                                // value={formData.firstName}
                            />
                            <br />
                        <label htmlFor="email" className="form-title">Email*</label>
                        <br />
                            <input
                                type="email"
                                // onChange={handleChange}
                                name="email"
                                id="email"
                                // value={formData.firstName}
                            />
                            <br />
                        <label htmlFor="phno" className="form-title">Phone Number*</label>
                        <br />
                            <input
                                // type="number"
                                // onChange={handleChange}
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
                                // onChange={handleChange}
                                name="url"
                                id="url"
                                // value={formData.firstName}
                            />
                            <br />
                        <div>
                            <p className="form-title">Select Your Preference :</p>
                            <input type="checkbox" name="" id="inDes" />
                            <label htmlFor="inDes" className="Preference-label">Instructional Designer</label><br />
                            <input type="checkbox" name="" id="soEng" />
                            <label htmlFor="soEng" className="Preference-label">Software Engineer</label><br />
                            <input type="checkbox" name="" id="soQuEng" />
                            <label htmlFor="soQuEng" className="Preference-label">Software Quality Engineer</label>
                        </div>
                        <p className="form-title">If You Are Registering Via A Referral, Please Mention Full Name Of The Employee Who Referred You</p>
                        <hr className="slot-space"/>
                        
                    <input type="checkbox" name="" id="via" />
                    <label htmlFor="via" className="Preference-label">Send me job related updates via mail</label><br />
                    
                    </form>
                </div>
                <div className="userPic">
                    <img src={userIcon} alt="" className="user_icon"/>
                    <p className="userPicText">UPLOAD DISPLAY PICTURE</p>
                    <p className="form-title">Max. image size: 5 MB</p>
                </div>
            </div>
            <button className="form-btn">Next</button>
        </>
    )
}