import "./works.scss"
import React, { useEffect, useState } from "react";
export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            icon: "./assets/hdpi.png",
            title: "Groupz",
            desc: "It is an application that allows you to meet new people through events created by you or by the community. It is developed natively in Android using kotlin and  Firestore as the database.",
            img: "./assets/combine_images.png",
            link: "https://play.google.com/store/apps/details?id=cat.copernic.groupz"
        },
        {
            id: 2,
            icon: "./assets/ruedawhite.png",
            title: "Andruino",
            desc: "With Andruino we can control a land drone made with an ESP32 device through the native android application with Kotlin and BLE (bluetooth low energy). This device sends its location in real time to the database.",
            img: "./assets/andruino2.jpg",
            link: "https://github.com/AndresOtalora01/andruino"
        },
        {
            id: 3,
            icon: "./assets/secure.png",
            title: "Hash Generator",
            desc: "Using hash generator we can transform text into a hash using different encryption algorithms like MD5, SHA-256 and more. It has been developed for Android using kotlin.",
            img: "./assets/hash2.jpg",
            link: "https://github.com/AndresOtalora01/HashGenerator"
        },
        {
            id: 4,
            icon: "./assets/githubwhite.png",
            title: "GitHub",
            desc: "This is my personal Github profile. Here I constantly upload my projects using different technologies.",
            img: "./assets/git.png",
            link: "https://github.com/AndresOtalora01"
        }
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };




    return (
        <div className="works" id="works">

            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
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
            <img src="assets/down.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/down.png" className="arrow right" alt="" onClick={() => handleClick()} />
        </div>
    );
}