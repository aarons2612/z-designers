import "./Form.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>E-mail</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Your Name</label>
            <textarea rows="6" placeholder="Enter your Message"/>
            <button className="btn">SUBMIT</button>
        </form>
    </div>
  )
}

export default Form