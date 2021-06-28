import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import React, { useEffect, useState } from "react";

export default function Portfolio(){

    const [selected, setSelected] = useState("featured");

    const list = [
        {
            id: "featured", title: "Featured"
        }, 
        {
            id: "mobile", title: "Mobile apps"
        }, 
        {
            id:"developing", title: "Developing"
        }
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active = {selected === item.id} setSelected={setSelected} id = {item.id}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/gz.png" alt="" />
                    <h3>Groupz</h3>
                </div>
                <div className="item">
                    <img src="assets/git.png" alt="" />
                    <h3>Github</h3>
                </div>
            </div>
        </div>
    )
}