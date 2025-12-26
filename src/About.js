import React from "react";

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",

  // })
  let myStyle = {
color: props.mode === 'dark' ? 'white' : '#042743',
 backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)': 'white',
//  border:  '2px solid',
 borderColor: props.mode === 'dark' ? 'white' : '#042743',
  }

  return (
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
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
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
               uppercase, lowercase, word count etc .
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
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a free character counter tool that provides instant character count and word count statistics for a given text.
              Textutils reports the number of words and characters. Thus it is suitable for writing text with word or character limit.
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
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter softerware works in any web browser such as chrome , firefox, internet explorer, safari, opera. It suits to count characters in facebook, blog, books,excel document, essays, etc.
            </div>
          </div>
        </div>

      </div>
      {/* <div className="container my-3">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
      </div> */}
    </div>
  );
}
