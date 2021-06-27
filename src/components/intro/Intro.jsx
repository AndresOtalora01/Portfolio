import "./intro.scss"
import {init} from "ityped"
import { useEffect, useRef } from "react"
export default function Intro(){

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,
             { showCursor: true,
                backDelay: 1000,
                backSpeed: 60,
             strings: ['Android','Java', 'Kotlin', 'MySQL', 'MongoDB and more.' ] })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/boy.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Andrés Otálora</h1>
                    <h3>Software Developer using <span ref={textRef}></span>
                    </h3> 
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}