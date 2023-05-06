import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () =>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () =>{
        // console.log("Uppercase was clicked"+text);
        let newText = '';
        setText(newText)
    }
    
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value)
    }

    const[text,setText]=useState('')
    // setText("Enter your text here")
  return (
    <>
        <div className='container'>
            <h1>{props.heading}  </h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>

        </div>
        <div className="container my-3"> 
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
