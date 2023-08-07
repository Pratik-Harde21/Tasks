import React, { useState } from "react";
import './css/roleDetails.css'

export default function SoftwareEngineer(){
    const [isClickedSoftEng, setIsClickedSoftEng] = useState(false)
    function toggle(){
        setIsClickedSoftEng(prevVal => !prevVal)
    }
    return(
        <>
            <div className="card">
                <div className="pre-requisites" onClick={toggle}>
                    <p>Software Engineering</p>
                    {isClickedSoftEng ? <span className="material-symbols-outlined">expand_less</span> : <span className="material-symbols-outlined">expand_more</span>}
                </div>
                {isClickedSoftEng && <div className="dropable">
                    <p className="sub-topic">gross compensation package :</p>
                    <p className="sub-text">Rs. 5,00,000 lpa</p>
                    <hr className="sub-space" />
                    <p className="sub-topic">Role Description :</p>
                    <p className="sub-text">- Generate highly interactive and innovative instructional strategies for e-learning solutions </p>
                    <p className="sub-text">- Develop course structure and learning specifications addressing the requirements of the target audience</p> 
                    <p className="sub-text">- Construct appropriate testing strategies to ensure learners' understanding and performance</p> 
                    <p className="sub-text">- Address usability issues </p>
                    <p className="sub-text">- Keep abreast of new trends in e-learning </p>
                    <p className="sub-text">- Ensure that the instructional strategies are as per global standards </p>
                    <p className="sub-text">- Prepare instructional design checklists and guidelines </p>
                    <p className="sub-text">- Check for quality assurance</p>
                    <hr className="sub-space" />
                    <p className="sub-topic">Requirements :</p>
                    <p className="sub-text">- Experience in creating instructional plans and course maps. </p>
                    <p className="sub-text">- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction </p>
                    <p className="sub-text">- Awareness of different instructional design models and familiarity with instructional and learning theories </p>
                    <p className="sub-text">- Awareness of latest trends in e-learning and instructional design </p>
                    <p className="sub-text">- Strong client consulting/interfacing skills. </p>
                    <p className="sub-text">- Ability to guide clients to focus on specific objectives and teaching points</p> 
                    <p className="sub-text">- Strong meeting facilitation, presentation and interpersonal skills </p>
                    <p className="sub-text">- A thorough understanding of the web as an instructional medium </p>
                    <p className="sub-text">- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism</p>
                </div>}
            </div>
        </>
    )
}