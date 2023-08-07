import React from "react";
// import "./css/card.css"

export default function Card(props){
    console.log(props.data)
    return (
        <>
        <div className="card">
            {props.data.isExpire && <p className="card-expire">Expires in 5 days</p>}
            <p className="title">{props.data.title}</p>
            <div className="card-date">
                <p>Date & Time:</p>
                <p><b>{props.data.date}</b></p>
            </div>
            <hr />
            <div className="card-role">
                <p>Job Role:</p>
                <p><b>{props.data.role.map(ele =>{
                    return <span>{ele}</span>
                })}</b></p>
            </div>
            <button className="card-btn">VIEW MORE DETAILS</button>
        </div>
        </>
    )
}