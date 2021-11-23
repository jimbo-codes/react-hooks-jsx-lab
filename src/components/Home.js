import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return(
 <div id= "home">
    <HomeChild/>
  </div>)
}

const HomeChild = () => {
  // include name and city variables (need to import)
return (  <h1 style={{color: 'firebrick'}}>{name} is a Web Developer from {city}</h1>)

}
export default Home;
