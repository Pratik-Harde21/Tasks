import React from "react";
import "./css/review.css"

export default function ReviewAndProceed(props){
    return (
        <>
            <p className="review-heading">Personal Information</p>
            <div className="card">
                <div className="dropable">
                    <p className="review-title">First Name</p>
                    <p className="review-text">{props.data.firstName}</p>
                    <p className="quali-title">Last Name</p>
                    <p className="review-text">{props.data.lastName}</p>
                    <p className="quali-title">Email</p>
                    <p className="review-text">{props.data.email}</p>
                    <p className="quali-title">Phone Number</p>
                    <p className="review-text">{props.data.phoneNo}</p>
                    <p className="review-text">Upload Resume</p>
                    <p className="quali-title">Enter Portfolio URL (if any)</p>
                    <p className="review-text">{props.data.url}</p>
                    <p className="quali-title">Preferred Job Roles</p>
                    {props.data.inDes && <p className="review-text">Instructional Designer</p>}
                    {props.data.soEng && <p className="review-text">Software Engineer</p>}
                    {props.data.soQuEng && <p className="review-text">Software Quality Engineer</p>}
                    <input type="checkbox" name="jobUpdate" id="jobUpdate" checked/>
                    <label htmlFor="jobUpdate" className="Preference-label">Send me job related updates via mail</label><br />
                </div>
            </div>
            <p className="review-heading">Qualification</p>
            <div className="card">
                <div className="title">
                    <p>Educational Qualifications</p>
                </div>
                <div className="dropable">
                    <p className="review-title">Aggregate Percentage</p>
                    <p className="review-text">{props.data.percentage}</p>
                    <p className="quali-title">Year of Passing</p>
                    <p className="review-text">{props.data.year_pass}</p>
                    <div className="college">
                        <div className="review-sub">
                            <label htmlFor="qualification" className="review-title">Qualification*</label><br />
                            <p className="review-text">{props.data.qualification}</p>
                            <br />
                        </div>
                        <div className="review-sub">
                            <label htmlFor="stream" className="review-title">Stream*</label><br />
                            <p className="review-text">{props.data.stream}</p>
                        </div>
                    </div>
                    <div className="college">
                        <div className="review-sub">
                            <label htmlFor="qualification" className="review-title">College*</label><br />
                            <p className="review-text">{props.data.college}</p>
                            <br />
                        </div>
                        <div className="review-sub">
                            <label htmlFor="stream" className="review-title">If others, please enter your college name*</label><br />
                            <p className="review-text">-</p>
                        </div>
                    </div>
                    <p className="quali-title">Where is your college located?</p>
                    <p className="review-text">{props.data.location}</p>
                </div>
            </div>
            <div className="card">
                <div className="title">
                    <p>Professional Qualifications</p>
                </div>
                <div className="dropable">
                    <p className="quali-title">Applicant Type</p>
                    <p className="review-text">{props.data.experience}</p>
                </div>
            </div>
            <div className="card">
                <div className="dropable">
                    <p className="quali-title">Years of Experience</p>
                    <p className="review-text">{props.data.year_experience}</p>
                    <p className="quali-title">Current CTC (In Rupees)</p>
                    <p className="review-text">{props.data.c_ctc}</p>
                    <p className="quali-title">Expected CTC (In Rupees)</p>
                    <p className="review-text">{props.data.e_ctc}</p>
                    <p className="quali-title">Select All The Technologies You Expertise In</p>
                    {props.data.javascript && <p className="review-text">Javascript</p>}
                    {props.data.angular && <p className="review-text">angular</p>}
                    <p className="quali-title">If others, please mention</p>
                    <p className="review-text">-</p>
                    <p className="quali-title">Are you currently on notice period?</p>
                    {props.data.notice_period &&  <p className="review-text">Yes</p>}
                    <div className="college">
                        <div className="review-sub">
                            <label htmlFor="qualification" className="review-title">If Yes, when will your notice period end?</label><br />
                            <p className="review-text">{props.data.np_end}</p>
                            <br />
                        </div>
                        <div className="review-sub">
                            <label htmlFor="stream" className="review-title">How long is your notice period? (Mention in months)</label><br />
                            <p className="review-text">{props.data.np_dur}</p>
                        </div>
                    </div>
                    <p className="quali-title">Have You Appeared For Any Test By Zeus in the past 12 months?</p>
                    <p className="review-text">{props.data.zeus_test}</p>
                </div>
            </div>
        </>
    )
}