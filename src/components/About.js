import React from "react";
import Links from "./Links";

function About(props) {
  let bio = <p>{props.bio}</p>
  if(!props.bio) {
    bio = null;
  } 
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
  
}

export default About;
