import React, { useState } from "react";
import "./Content.css";

export default function Content({mode}) {
  //To target value from textarea
  const targetValue = (e) => {
    setText(e.target.value);
  };
  //To get text from textarea
  const [text, setText] = useState("");

  //To get words from textarea
  const words = text.toLowerCase().split(" ");

  //To upperCase
  const upCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  //To lowerCase
  const lowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  //To Capital Case
  const capCase = ()=> {
    let newText = words.map((e)=>{
      return e.charAt(0).toUpperCase() + e.substring(1);
    }).join(" ");
    setText(newText);
  }
  //To Alternate Case
  const AltCase = ()=> {
    let a = [];
    for(let i=0;i<text.length; i++){
      if (i%2 === 0){
        a.push(text[i].toUpperCase())
      }else{
        a.push(text[i].toLowerCase())
      }
    }
    setText(a.join(""));
  }
  //To Clear last Character
  const lastChar = () => {
    let newText = text.slice(0, text.length - 1);
    setText(newText);
  };
  //To Clear extra spaces
  const spaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  };
  //To Clear last word
  const lastWord = () => {
    let newText = words.slice(0, words.length - 1).join(" ");
    setText(newText);
  };
  //To Clear
  const clearAll = () => {
    let newText = "";
    setText(newText);
  };
//To Copy to Clipboard
const copyClip = () => {
  navigator.clipboard.writeText(text)
};

 return (
    <>
      <div className="container">
        <h1 className="my-3" style={{color: `${mode.color}`}}>CONVERT TEXT</h1>
        <div className="my-4 container">
         <div className="btn1 row">
          <button type="button" className="btn me-2 mb-2 col-sm-2" style={{color: `${mode.color}`,backgroundColor: `${mode.bg}`}} onClick={upCase}>
            Uppercase
          </button>
          <button type="button" className="btn me-2  mb-2 col-sm-2" style={{color: `${mode.color}`,backgroundColor: `${mode.bg}`}}  onClick={lowCase}>
            Lowercase
          </button>
          <button type="button" className="btn me-2 mb-2 col-sm-2" style={{color: `${mode.color}`,backgroundColor: `${mode.bg}`}}  onClick={capCase}>
            Capitalcase
          </button>
          <button type="button" className="btn me-2 mb-2 col-sm-2" style={{color: `${mode.color}`,backgroundColor: `${mode.bg}`}} onClick={AltCase}>
            Alternate Case
          </button>
          <button type="button" className="btn me-2  mb-2 col-sm-2" style={{color: `${mode.color}`,backgroundColor: `${mode.bg}`}} onClick={spaces}>
            Clear Extra Spaces
          </button>
         </div>
         <div className="btn1 row">
          <button type="button" className="btn btn-warning me-2 mb-2 col-sm-2" onClick={lastChar}>
            Backspace
          </button>
          <button type="button" className="btn btn-warning me-2  mb-2 col-sm-2" onClick={lastWord}>
            Clear Word
          </button>
          <button type="button" className="btn btn-danger me-2 mb-2 col-sm-2" onClick={clearAll}>
            Clear All
          </button>
          <button type="button" className="btn btn-secondary me-2 mb-2 col-sm-2 " onClick={copyClip}>
            Copy to Clipboard
          </button>
         </div>
        </div>
        <div>
          <span style={{color: `${mode.color}`}}>Characters Count: {text.length} |</span>
          <span style={{color: `${mode.color}`}}> Words Count: {words.length-1} |</span>
        </div>
        <div className="row">
          <div className="">
            <label htmlFor="exampleFormControlTextarea1" style={{color: `${mode.color}`}} className="form-label">
              Convert Text:
            </label>
            <textarea className="form-control enterText" id="exampleFormControlTextarea1" value={text} onChange={targetValue} rows="5" placeholder="Enter text here..." style={{marginBottom: '50px'}} ></textarea>
          </div>
          {/* <div className="col-lg-6">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Preview
            </label>
            <p className="previewText bg-secondary text-light p-2" style={{minHeight: "25vh"}}>{settext}</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
