import React, { useState } from "react";

export default function About() {

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",

  })
  const [btntext, setBtnText] = useState("Enable Dark Mode")

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white"
      })
      setBtnText("Enable Light Mode")

    }
    else {
      setMyStyle({
        color: "black",
        backgroundColor: "white"
      })
      setBtnText("Enable Dark Mode")
    }
  }

  return (
    <div className="container my-3" style={myStyle}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils aapke text ko analyze karne ke liye ek utility hai.
              Aap uppercase, lowercase, word count, aur character count kar sakte ho.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Ye ek free tool hai jo kisi bhi user ke liye available hai.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils modern browsers ke saath compatible hai, jaise Chrome, Firefox, Edge.
            </div>
          </div>
        </div>

      </div>
      <div className="container my-3">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
      </div>
    </div>
  );
}
