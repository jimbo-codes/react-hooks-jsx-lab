import React from "react";
import { image } from "../data/data";

function About() {
  return (
<AboutChild/>
  )
}

const AboutChild = () => {
 return ( 
   <div id='about'>
 <h2>About Me</h2>
  <p>Content of my choosing</p>
  <img src={image} alt='I made this'></img>
  </div>
 )
}

export default About;
