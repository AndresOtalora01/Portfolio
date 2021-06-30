import "./works.scss"
import React, { useEffect, useState } from "react";
export default function Works(){

    const [currentSlide,setCurrentSlide] =useState(0);

    const data = [
        {
            id: 1,
            icon: "./assets/hdpi.png",
            title: "Groupz",
            desc: "Es una aplicación que te permite conocer gente nueva a través de eventos creados por ti o por la comunidad. Está desarrollada nativamente en Android utilizando kotlin y como base de datos Firestore.",
            img: "./assets/combine_images.png",
            link: "https://play.google.com/store/apps/details?id=cat.copernic.groupz"
        },
        {
            id: 2,
            icon: "./assets/ruedawhite.png",
            title: "Andruino",
            desc: "Con Andruino podemos controlar un dron terrestre fabricado con un dispositivo ESP32 a través de la aplicación nativa de android con Kotlin y BLE (bluetooth low energy). Este dispositivo envía su ubicación en tiempo real a la base de datos.",
            img: "./assets/andruino2.jpg",
            link: "https://github.com/AndresOtalora01/andruino"
        },
        {
            id:3,
            icon: "./assets/secure.png",
            title:"Hash Generator",
            desc: "Utilizando hash generator podemos transformar texto en un hash utilizando diferentes algoritmos de encriptación como MD5, SHA-256 y más. Se ha desarrollado para Android utilizando kotlin.",
            img:"./assets/hash2.jpg",
            link:"https://github.com/AndresOtalora01/HashGenerator"
        }
    ];

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };




    return (
        <div className="works" id="works">

        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
            {data.map((d)=>(
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src={d.icon} alt="" />
                            </div>
                            <h2>{d.title}</h2>
                            <p>{d.desc}</p>
                            <a href={d.link}>See more</a>
                        </div>
                    </div>
                    <div className="right">
                        <img src={d.img} alt="" />
                    </div>
                </div>
                
            </div>))}
        </div>
        <img src="assets/down.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
        <img src="assets/down.png" className="arrow right" alt="" onClick={() => handleClick()} />
        </div>
    );
}