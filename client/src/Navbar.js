import React from "react"
import icon from "./Images/icon-heliverse.jpeg"
import "./styles.css"
export default function Navbar(){
    return (
    <nav className="main-nav">
    <a href="/"><img alt="something" src={icon} className="icon-image" width="150px" height="150px" /></a>   
    <h1 className="slogan">Search Anything, Get Everything</h1>
    </nav>)
}