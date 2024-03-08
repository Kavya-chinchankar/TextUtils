import React, { useState } from 'react'

export default function TextForm(props) {

    //   let myStyle={
    //     backgroundColor: '#343a40',
    //     color: 'white'
    //     }

    // const [myStyle, setstyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // });

    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Text converted into Upppercase","success")
        // settext("You have clicked on handle onclick");
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        settext(newText);
        props.showAlert("Text converted into Lowercase","success")
    }

    const handleClearClick = () => {
        console.log("Clear text was clicked " + text);
        let newText = '';
        settext(newText);
        props.showAlert("Text is Cleared","success")
    }

    const handleCopy = () => {
        console.log("Copy text was clicked " + text);
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value)
        props.showAlert("Text is Copied in ClipboardS","success")
    }

    const handleExtraSpaces = () => {
        console.log("Clear Extra spaces text was clicked " + text);
        let newText = text.split(/[ ]+/); // REMOVE THE ALL SPACES
        settext(newText.join(" ")); // GIVE ONE SPACE
        props.showAlert("Text handeled the extra spaces","success")
    }


    const handleOnChange = (event) => {
        console.log("Onchange");
        settext(event.target.value);
    }

    const [text, settext] = useState('Enter Text Here.');
    // settext("new text")
    return (
        <>
            <div className='container' style={{color:props.mode === 'light' ? 'black':'white'}}>
                <form>
                    <h3>{props.heading}</h3>
                    <div className="form-group">
                        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white':'#04192f',color:props.mode === 'light' ? 'black':'white'}} value={text} rows="8"
                        ></textarea>
                    </div>
                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'primary':'secondary' } mx-2`} onClick={handleUpClick}>Convert to UpperCase</button>

                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'primary':'secondary' } mx-2`} onClick={handleLoClick}>Convert to LowerCase</button>

                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'primary':'secondary' } mx-2`} onClick={handleCopy}>Copy Text</button>

                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'primary':'secondary' } mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'primary':'secondary' } mx-2`} onClick={handleClearClick}>Clear Text</button>

                </form>
            </div>

            <div className="container my-3" style={{color:props.mode === 'light' ? 'black':'white'}}>

                {Boolean(text) && (
                    <>
                        <h3>Your Text Summary</h3>
                        <p>Words Count {text.split(" ").length}</p>
                        <p>Character Count {text.length}</p>
                        <p>Sentence Count {text.split('.').filter(Boolean).length}</p>
                        <p>Paragraph Count {text.split(/\r?\n|\r/).filter(Boolean).length}</p>
                        <p>{0.008 * text.split(" ").filter(Boolean).length} Minutes to Read</p>
                        <h4>Preview</h4>
                        <p>{text}</p>
                    </>
                )}

            </div>
        </>
    )
}
