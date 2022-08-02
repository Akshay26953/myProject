import React from "react";
import { useState } from "react";
import html2canvas from 'html2canvas';
import "./Meme.scss";
// import "./utils.css";

function Meme({ mode }) {
  //State function to input store data
  const [val, setVal] = useState({
    imgURL: "",
    imgUP: "",
    topText: "",
    bottomText: "",
    custWidth: "",
    custHeight: "",
    topFontSize: "",
    botFontSize: "",
  });
  //Function to store all input data
  function handleIt(event) {
    setVal((prevVal) => {
      return {
        ...prevVal,
        [event.target.name]: event.target.value,
      };
    });
  }
  //Functions to add to buttons to resize image
  const [imgSize, setImgSize] = useState({
    width: "",
    height: "",
  });
  function square() {
    setImgSize({
      width: "500px",
      height: "500px",
    });
  }
  function vertical() {
    setImgSize({
      width: "300px",
      height: "500px",
    });
  }
  function horizontal() {
    setImgSize({
      width: "500px",
      height: "300px",
    });
  }
  console.log(val);
  const [visible, setVisible] = useState({
    display: "none",
  });
  function custom() {
    visible.display == "none"
      ? setVisible({ display: "block" })
      : setVisible({ display: "none" });
  }
  function submit() {
    setImgSize({
      width: `${val.custWidth}px`,
      height: `${val.custHeight}px`,
    });
  }

  return (
    <>
      <div className="container mb-5">
        <h1 className="my-3" style={{ color: `${mode.color}` }}>
          MEME GENERATOR
        </h1>
        <div className="inputs">
          <div className="imgInput">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
                style={{ color: `${mode.color}` }}
              >
                Image URL:
              </label>
              <input
                type="text"
                name="imgURL"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Paste Image URL Here..."
                onChange={handleIt}
              />
            </div>
          </div>
          {/* This option to add with details of uploading img link */}
          {/* <label htmlFor="img">Upload Image: </label> <br />
          <input
            type="file"
            name="imgUP"
            id="img"
            accept="image/*"
            onChange={handleIt}
          /> */}
          <div className="row">
            <div className="topInput col-md-6">
              <label
                htmlFor="exampleFormControlInput1"
                style={{ color: `${mode.color}` }}
                className="form-label"
              >
                Top Text:{" "}
              </label>{" "}
              <br />
              <input
                type="text"
                name="topText"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Top Text..."
                onChange={handleIt}
              />
              <div className="topfSize col-md-6 my-3">
                <label
                  for="customRange3"
                  style={{ color: `${mode.color}` }}
                  className="form-label"
                >
                  Adjust Top Font Size{" "}
                </label>{" "}
                <input
                  type="range"
                  name="topFontSize"
                  className="form-range"
                  id="customRange3"
                  min="10"
                  max="60"
                  onChange={handleIt}
                />
              </div>
            </div>
            <div className="BottomInput col-md-6">
              <label
                htmlFor="exampleFormControlInput1"
                style={{ color: `${mode.color}` }}
                className="form-label"
              >
                Bottom Text:{" "}
              </label>
              <br />
              <input
                type="text"
                name="bottomText"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Bottom Text..."
                onChange={handleIt}
              />
              <div className="botfSize col-md-6 my-3">
                <label
                  for="customRange3"
                  style={{ color: `${mode.color}` }}
                  className="form-label"
                >
                  Adjust Bottom Font Size{" "}
                </label>{" "}
                <input
                  type="range"
                  name="botFontSize"
                  className="form-range"
                  id="customRange3"
                  min="10"
                  max="60"
                  onChange={handleIt}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="btns row">
          <div className="row col-sm-12">
            <button
              type="button"
              style={{ color: `${mode.color}`, backgroundColor: `${mode.bg}` }}
              className="btn me-2 mb-2 col-sm-2"
              onClick={square}
            >
              Square
            </button>
            <button
              type="button"
              style={{ color: `${mode.color}`, backgroundColor: `${mode.bg}` }}
              className="btn me-2 mb-2 col-sm-2"
              onClick={vertical}
            >
              Vertical
            </button>
            <button
              type="button"
              style={{ color: `${mode.color}`, backgroundColor: `${mode.bg}` }}
              className="btn me-2 mb-2 col-sm-2"
              onClick={horizontal}
            >
              Horizontal
            </button>
            <button
              type="button"
              style={{ color: `${mode.color}`, backgroundColor: `${mode.bg}` }}
              className="btn me-2 mb-2 col-sm-2"
              onClick={custom}
            >
              Custom
            </button>
          </div>
          <div style={visible}>
          <div className="custSize row">
            <div className=" my-1 col-sm-5">
              <input
                type="text"
                name="custWidth"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Width"
                onChange={handleIt}
              />
            </div>
            <div className=" my-1 col-sm-5">
              <input
                type="text"
                name="custHeight"
                className="form-control col-sm-5"
                id="exampleFormControlInput1"
                placeholder="Height"
                onChange={handleIt}
              />
            </div>
            <div className="col-sm-3 my-1">
              <button
                style={{
                  color: `${mode.color}`,
                  backgroundColor: `${mode.bg}`,
                }}
                className="btn me-2 mb-2"
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </div>
          </div>
        </div>
        <div className="preview">
          <div className="title">
            <p style={{ color: `${mode.color}` }}>Preview</p>
          </div>
          <div
            className="img"
            style={{
              width: `${imgSize.width}`,
              height: `${imgSize.height}`,
              // backgroundImage: `url(${val.imgURL})`
            }}
          >
            <h1
              className="memeText"
              style={{
                fontSize: `${val.topFontSize}px`,
              }}
            >
              {val.topText.toUpperCase()}
            </h1>
            <h1
              className="memeText bottom"
              style={{
                fontSize: `${val.botFontSize}px`,
              }}
            >
              {val.bottomText.toUpperCase()}
            </h1>
            <img
              className="mxa"
              src={val.imgURL}
              alt=""
              width="100%"
              height="100%"
            />

            {/* <div className="cav">
              <h1 className="headTop">Lorem ipsum dolor sit amet.</h1>
              <h1 className="headBot">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolore?</h1>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Meme;
