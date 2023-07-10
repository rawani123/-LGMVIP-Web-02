import React from "react";
import "./components.css";

export default function Cards(props) {
  return (
    <div>
      <div className="main_div">
          <img src={props.avatar} alt="" />
        <div className="text_div">
            <label className="name" >{props.first} {props.last}</label><br/><br/>
            Email: <br /> {props.email}           
        </div>
        
      </div>
    </div>
  );
}
