import "./WorkCard.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="service-card">
                <img src={props.imgsrc} alt="img"/>
                <h2 className="service-title">{props.title}</h2>
                <div className="ser-details">
                    <p>{props.text}</p>
                    <div className="ser-btns">
                        <NavLink to={props.view} className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard