import React, { useState } from "react";
import "./css/qualification.css"

export default function Qualification(){
    const [eduQuali, setEduQuali] = useState(false)
    function toggle(){
        setEduQuali(prevVal => !prevVal)
    }
    return (
        <>
            <div className="card">
                <div className="title" onClick={toggle}>
                    <p>Educational Qualifications</p>
                    {eduQuali ? <span className="material-symbols-outlined">expand_less</span> : <span className="material-symbols-outlined">expand_more</span>}
                </div>
                {eduQuali && <div className="dropable">
                    <h1>Hello</h1>
                </div>}
            </div>
        </>
    )
}