import React, { useEffect, useState } from "react";

const Header = ()=>{
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(false);
  };
  useEffect(()=>console.log(toggle),[toggle])

    return(
        <header id="upper-nav">
            <h4 id="title-nav">Website Title / Logo</h4>
            <div className="ham" onClick={handleClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            <section id="right-nav" >
                <nav>item1</nav>
                <nav>item1</nav>
                <nav>item1</nav>
                <nav>item1</nav>
            </section>
      {toggle ? (""):(<nav className="sidebar">
                  <span className="material-icons" onClick={()=>setToggle(true)}>
                      close
                      </span>
                  <div className="sidenav-wrapper">
                      <nav className="sidenav">item1</nav>
                      <nav className="sidenav">item1</nav>
                      <nav className="sidenav">item1</nav>
                      <nav className="sidenav">item1</nav>
                  </div>
              </nav>)}
      
        </header>
    )
  }

  export default Header