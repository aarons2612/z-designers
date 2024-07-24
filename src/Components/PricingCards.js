import { Link } from "react-router-dom";
import "./PricingCards.css";

import React from 'react'

const PricingCards = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Baic -</h3>
                <span className="bar"></span>
                <p className="btc">RS. 300</p>
                <p>- 3 days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn btn1">Let's Connect</Link>
            </div>
            <div className="card">
                <h3>- Baic -</h3>
                <span className="bar"></span>
                <p className="btc">RS. 300</p>
                <p>- 3 days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn btn1">Let's Connect</Link>
            </div>
            <div className="card">
                <h3>- Baic -</h3>
                <span className="bar"></span>
                <p className="btc">RS. 300</p>
                <p>- 3 days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn btn1">Let's Connect</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCards