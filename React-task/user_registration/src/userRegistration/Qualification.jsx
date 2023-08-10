import React, { useState } from "react";
import "./css/qualification.css"
import Experienced from "./Experienced";
import Fresher from "./Fresher";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Qualification(props){
    const [eduQuali, setEduQuali] = useState(true)
    const [profQuali, setProfQuali] = useState(true)
    const [user, setUser] = useState(true)
    if(!user){
        return <Navigate to= "/review" />
    }
    function toggle(){
        setEduQuali(prevVal => !prevVal)
    }
    function toggle2(){
        setProfQuali(prevVal => !prevVal)
    }
    function handleSubmit(event){
        event.preventDefault()                   // This will not refresh the page when submit button is clicked
        // submitToAPI(formData)               // if we have an API we can send form data via this method
        console.log(formData)
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="card">
                <div className="title" onClick={toggle}>
                    <p>Educational Qualifications</p>
                    {eduQuali ? <span className="material-symbols-outlined">expand_less</span> : <span className="material-symbols-outlined">expand_more</span>}
                </div>
                {eduQuali && <div className="dropable">
                    <label htmlFor="percentage" className="quali-title">Aggregate Percentage*</label><br />
                    <input 
                        className="input"
                        onChange={()=>props.handleChangeee(event)}
                        name="percentage"
                        type="text" 
                        id="percentage"
                    />
                    <br />
                    <label htmlFor="year_pass" className="quali-title">Year of Passing*</label><br />
                    <select name="year" id="year" className="input" onChange={()=>props.handleChangeee(event)}>
                        <option id="year" value="null">--select year--</option>
                        <option id="year" value="2020">2020</option>
                        <option id="year" value="2021">2021</option>
                        <option id="year" value="2022">2022</option>
                    </select>
                    <div className="college">
                        <div className="college-sub">
                            <label htmlFor="qualification" className="quali-title">Qualification*</label><br />
                            <select name="qualification" id="qualification" className="input1" onChange={()=>props.handleChangeee(event)}>
                                <option value="null">--select--</option>
                                <option value="b-tech">Bachelor in Technology (B.Tech)</option>
                                <option value="aids">B.Tech Artificial Intelligence and Data Science</option>
                                <option valur="b-techm">B.Tech Mechanical Engineering</option>
                            </select><br />
                        </div>
                        <div className="college-sub">
                            <label htmlFor="stream" className="quali-title">Stream*</label><br />
                            <select name="stream" id="stream" className="input1" onChange={()=>props.handleChangeee(event)}>
                                <option value="null">--select--</option>
                                <option value="cs">Computer Engineering</option>
                                <option value="me">Mechanical Engineering</option>
                                <option value="ce">Civil Engineering</option>
                                <option value="pe">Production Engineering</option>
                            </select>
                        </div>
                    </div>
                    <div className="college">
                        <div className="college-sub">
                            <label htmlFor="college" className="quali-title">College*</label><br />
                            <select name="college" id="college" className="input1" onChange={()=>props.handleChangeee(event)}>
                                <option value="null">--select--</option>
                                <option value="pict">Pune Institute of Technology (PIT)</option>
                                <option value="coep">College of Engineering, Pune</option>
                                <option value="vit">VIT</option>
                            </select><br />
                        </div>
                        <div className="college-sub">
                            <label htmlFor="stream" className="quali-title">If others, please enter your college name*</label><br />
                            <input name="college" id="stream" className="input1" onChange={()=>props.handleChangeee(event)}/>
                        </div>
                    </div>
                    <label htmlFor="location" className="quali-title">Where is your college located?*</label><br />
                    <input 
                        className="input"
                        onChange={()=>props.handleChangeee(event)}
                        name="location"
                        type="text" 
                        id="location"
                    />
                </div>}
            </form>

            <div className="card">
                <div className="title" onClick={toggle2}>
                    <p>Professional Qualifications</p>
                    {profQuali ? <span className="material-symbols-outlined">expand_less</span> : <span className="material-symbols-outlined">expand_more</span>}
                </div>
                <div className="dropable">
                    <legend className="quali-title">Applicant Type*</legend>
                    <input 
                        type="radio"
                        id="Fresher"
                        name="experience"
                        onChange={()=>props.handleChangeee(event)}
                        value="Fresher"
                        // checked={formData.employment === "full-time"}
                    />
                    <label htmlFor="Fresher" className="radio-text">Fresher</label>
                    <input 
                        type="radio"
                        id="Experienced"
                        name="experience"
                        onChange={()=>props.handleChangeee(event)}
                        value="Experienced"
                        // checked={formData.employment === "full-time"}
                    />
                    <label htmlFor="Experienced" className="radio-text">Experienced</label>
                    <br />
                </div>
            </div>
            {props.data.experience==="Experienced" && <Experienced handleChangeee={props.handleChangeee}/>}
            {props.data.experience==="Fresher" && <Fresher />}
            <span className="buttons">
                <button className="quali-btn" >Previous</button>
                <button className="quali-btn" onClick={()=> {
                        setUser(prevVal => !prevVal)
                        props.toggle()
                        }}
                        >Next
                </button>
            </span>
        </>
    )
}