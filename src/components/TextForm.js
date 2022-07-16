import React, { useState } from "react";

export default function TextForm(props) {
 
  const handleUpClick = () => {                 //Logic to convert text into upper case
    console.log("Text converted to Uppercase");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {                  //Logic to convert text into lower case
    console.log("Text converted to Lowercase");
    let newText = text.toLowerCase();
    setText(newText);
  };
   const handleClearClick = ()=>{
     setText("");
   }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");  //using state to get text
  return (
    <>
      <div className="container px-3 py-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>  
        <div className="mb-3" >
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          style={{backgroundColor: props.mode==='dark'?'#23323d':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div className="container my-3 py-3 px-3 " style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split("").length} Minutes read</p>

        <h2>Preview :</h2>
        <p style={{color: props.mode==='dark'?'#00ff1a':'#0088ff', border: props.mode==='dark'?'1px solid cyan':'1px solid black' , borderRadius:'10px'}} className="px-4">{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}
