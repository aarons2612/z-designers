import { Link } from "react-router-dom";
import "./PricingCards.css";

import React from 'react'

const PricingCards = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- 3D Parts -</h3>
                <span className="bar"></span>
                <p>- From -</p>
                <p className="btc">RS. 200</p>
                <p>- 3 days -</p>
                <p>- 3 Designs -</p>
                <p>- Featured -</p>
                <p>- With Blueprint -</p>
                <Link to="/contact" className="btn btn1">Let's Connect</Link>
            </div>
            <div className="card">
                <h3>- Websites -</h3>
                <span className="bar"></span>
                <p>- From -</p>
                <p className="btc">RS. 400</p>
                <p>-  One Week -</p>
                <p>- Upto 7 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn btn1">Let's Connect</Link>
            </div>
            <div className="card">
                <h3>- UI Design -</h3>
                <span className="bar"></span>
                <p>- From -</p>
                <p className="btc">RS. 300</p>
                <p>- 5 days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- With Prototype -</p>
                <Link to="/contact" className="btn btn1">Let's Connect</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCards