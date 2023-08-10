import React from "react";

export default function Fresher(){
    return(
        <>
        <div className="card">
                <div className="dropable">
                    <div>
                        <p className="form-title">Select All The Technologies You Expertise In*:</p>
                        <input type="checkbox" name="" id="inDes" />
                        <label htmlFor="inDes" className="Preference-label">Javascript</label><br />
                        <input type="checkbox" name="" id="soEng" />
                        <label htmlFor="soEng" className="Preference-label">Angular</label><br />
                        <input type="checkbox" name="" id="soQuEng" />
                        <label htmlFor="soQuEng" className="Preference-label">React</label><br />
                        <input type="checkbox" name="" id="soQuEng" />
                        <label htmlFor="soQuEng" className="Preference-label">Node js</label><br />
                        <input type="checkbox" name="" id="soQuEng" />
                        <label htmlFor="soQuEng" className="Preference-label">Others</label><br />
                        <p className="quali-title">If others, please mention</p>
                        <input type="text" className="input"/>
                    </div>
                    <legend htmlFor="" className="quali-title">Have You Appeared For Any Test By Zeus in the past 12 months?*</legend>
                    <input 
                        type="radio"
                        id="yes2"
                        name="notice-oeriod"
                        // onChange={handleChange}
                        value="yes"
                        // checked={formData.employment === "full-time"}
                    />
                    <label htmlFor="yes2" className="radio-text">Yes</label>
                    <input 
                        type="radio"
                        id="no2"
                        name="notice-oeriod"
                        // onChange={handleChange}
                        value="no"
                        // checked={formData.employment === "full-time"}
                    />
                    <label htmlFor="no2" className="radio-text">No</label><br />
                    <label htmlFor="" className="quali-title">If Yes, which role did you apply for?</label> <br />
                    <input type="text" className="input" />
                </div>
            </div>
        </>
    )
}