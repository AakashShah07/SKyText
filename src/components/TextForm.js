import React, { useState } from "react";

import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpCLick = () => {
    console.log("Uppper case button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Conveted to Uppercase", "success")
  };

  const handleUpChange = (event) => {
    setText(event.target.value);
  
  };

  const handleLoCLick = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Conveted to Lowercase", "success")

  };

  const [text, setText] = useState("Enter text here");
  var word_length = 0;
  var words;
  words = text.split(" ");

  console.log(props.mode);

  for (let index = 0; index < words.length; index++) {
    if (words[index] === "") {
      word_length += 0;
    } else {
      word_length++;
    }
  }
  // if (text.length == 0) {
  //   word_length += 0;
  // }
  // else{
  //   word_length = text.split(" ") ;
  // }

  return (
    <>
      <div className="container" style={{color: props.mode === "dark" ? "white" : "#042743"}|| {color: props.modePInk === "dark" ? "white" : "#865592"} } >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleUpChange}
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743"
            } || {
              backgroundColor: props.modePInk === "dark" ? "grey" : "white",
              color: props.modePInk === "dark" ? "white" : "#865592"
            } }
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpCLick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLoCLick}>
          Convert to Lowercase
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1>Your text Summry</h1>
        <p>
          {word_length} words and {text.length} characters
        </p>
        <p>{0.008 * word_length} Minutes for read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something in the textBox abobe to preview it here"}</p>
      </div>
    </>
  );
}

// TextForm.prototype = {
//   mode: PropTypes.string,
// };
