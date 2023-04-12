import React from 'react';
import Logo from "../assets/logo.png";
import Pizza from "../assets/homepizza.png";
import Border from "../assets/border.png";

const Hero = () => {
  return (
    <div className="panel1">
      <div className="Navbar">
        <img className="logo" src={Logo} alt="logo" />
        <button id="button" className="buttonNav">Get in Touch</button>
      </div>
      <div id="main-text" className="maintext">
        Discover the <span>Best</span> Food and Drinks
      </div>
      <p id="bottontext" className="bottomtext">
        Naturally made Healthcare Products for the better care & support of your
        body.
      </p>
      <button className="explorebtn">Explore Now!</button>
      <div className="home-pizza">
        <img src={Pizza} alt="Home Pizza Img" />
      </div>
      <div className="home-border">
        <img src={Border} alt="Border" />
      </div>
    </div>
  )
}

export default Hero;