import React from "react";

export default function Experienced(props){
    return (
        <>
            <div className="card">
                <div className="dropable">
                    <label htmlFor="experience" className="quali-title">Years of Experience*</label><br />
                    <input 
                        className="input"
                        onChange={()=>props.handleChangeee(event)}
                        name="year_experience"
                        type="text" 
                        id="experience"
                    /> <br />
                    <label htmlFor="c-ctc" className="quali-title">Current CTC* (In Rupees)</label><br />
                    <input 
                        className="input"
                        onChange={()=>props.handleChangeee(event)}
                        name="c_ctc"
                        type="text" 
                        id="c-ctc"
                    /> <br />
                    <label htmlFor="e-ctc" className="quali-title">Expected CTC* (In Rupees)</label><br />
                    <input 
                        className="input"
                        onChange={()=>props.handleChangeee(event)}
                        name="e_ctc"
                        type="text" 
                        id="e-ctc"
                    />
                    <div>
                        <p className="form-title">Select All The Technologies You Expertise In*:</p>
                        <input type="checkbox" name="javascript" id="inDes" onChange={()=>props.handleChangeee(event)}/>
                        <label htmlFor="inDes" className="Preference-label">Javascript</label><br />
                        <input type="checkbox" name="angular" id="soEng" onChange={()=>props.handleChangeee(event)}/>
                        <label htmlFor="soEng" className="Preference-label">Angular</label><br />
                        <input type="checkbox" name="react" id="soQuEng" onChange={()=>props.handleChangeee(event)}/>
                        <label htmlFor="soQuEng" className="Preference-label">React</label><br />
                        <input type="checkbox" name="nodeJs" id="nodeJs" onChange={()=>props.handleChangeee(event)}/>
                        <label htmlFor="nodeJs" className="Preference-label">Node js</label><br />
                        <input type="checkbox" name="other" id="Others" onChange={()=>props.handleChangeee(event)}/>
                        <label htmlFor="Others" className="Preference-label">Others</label><br />
                        <p className="quali-title">If others, please mention</p>
                        <input type="text" className="input"/>
                    </div>
                    <div>
                        <p className="form-title">Select All The Technologies You Are Familiar In:</p>
                        <input type="checkbox" name="javascript" id="inDes" />
                        <label htmlFor="inDes" className="Preference-label">Javascript</label><br />
                        <input type="checkbox" name="angular" id="soEng" />
                        <label htmlFor="soEng" className="Preference-label">Angular</label><br />
                        <input type="checkbox" name="react" id="soQuEng" />
                        <label htmlFor="soQuEng" className="Preference-label">React</label><br />
                        <input type="checkbox" name="nodeJs" id="soQuEng" />
                        <label htmlFor="soQuEng" className="Preference-label">Node js</label><br />
                        <input type="checkbox" name="other" id="soQuEng" />
                        <label htmlFor="soQuEng" className="Preference-label">Others</label><br />
                        <p className="quali-title">If others, please mention</p>
                        <input type="text" className="input"/>
                    </div>
                    <legend className="quali-title">Are you currently on notice period?**</legend>
                    <input 
                        type="radio"
                        id="yes"
                        name="notice_period"
                        onChange={()=>props.handleChangeee(event)}
                        value="yes"
                        // checked={formData.employment === "full-time"}
                    />
                    <label htmlFor="yes" className="radio-text">Yes</label>
                    <input 
                        type="radio"
                        id="no"
                        name="notice_period"
                        onChange={()=>props.handleChangeee(event)}
                        value="no"
                        // checked={formData.employment === "full-time"}
                    />
                    <label htmlFor="no" className="radio-text">No</label>
                    <br />
                    <div className="college">
                        <div className="college-sub">
                            <label htmlFor="" className="quali-title">If Yes, when will your notice period end?*</label><br />
                            <input type="date" className="input1" name="np_end" onChange={()=>props.handleChangeee(event)}/>
                        </div>
                        <div className="college-sub">
                            <label htmlFor="" className="quali-title">How long is your notice period? (Mention in months)*</label>
                            <select name="np_dur" id="" className="input1" onChange={()=>props.handleChangeee(event)}>
                                <option value="">select</option>
                                <option value="2mon">2 months</option>
                                <option value="3mon">3 months</option>
                                <option value="4mon">4 months</option>
                                <option value="6mon">6 months</option>
                            </select>
                        </div>
                    </div>
                    <legend htmlFor="" className="quali-title">Have You Appeared For Any Test By Zeus in the past 12 months?*</legend>
                    <input 
                        type="radio"
                        id="yes2"
                        onChange={()=>props.handleChangeee(event)}
                        name="zeus_test"
                        value="yes"
                        // checked={formData.employment === "full-time"}
                    />
                    <label htmlFor="yes2" className="radio-text">Yes</label>
                    <input 
                        type="radio"
                        id="no2"
                        onChange={()=>props.handleChangeee(event)}
                        name="zeus_test"
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