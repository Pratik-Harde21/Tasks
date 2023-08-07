import React from "react";
import Card from "./Card";
import "./css/card.css"
import Data from "./QuantumData.json"

export default function Main(){
    return (
        <div>
            {Data.map( data => {
                return(
                    <Card data={data}/>
                )
            })}
        </div>
    )
}