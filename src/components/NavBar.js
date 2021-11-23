import React from "react";

function NavBar() {
  // update the JSX being returned!
  return(
    <nav>
    <Child1 />
    <Child2 />
    </nav>
  ) 
}
const Child1 = () => {
  return (
    <a href='#home'>Home</a>
  )
}
const Child2 = () => {
  return (
  <a href='#about'>About</a>
  )
}

export default NavBar;
