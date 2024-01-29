import React,{useState} from 'react';
import Alert from './Alert';

export default function Textform(props) {
    const [text, setText] = useState('')

    const toUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        showAlert('Text has been changed to Upper case' )
        
    }
    const toLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        showAlert('Text has been changed to Lower case' )

    }
    const handleChange=(event)=>{
        setText(event.target.value);
    }
    const clear=()=>{
        setText('');
        showAlert('Text has been Cleared' )

    }

    const [alert, setAlert] = useState(null)
    const showAlert=(msg )=>{
        setAlert({msg:msg })
        setTimeout(() => {
            setAlert()
        }, 2000);
    }
    const remove=()=>{
        const newString = text.replace(/\s+/g,' ').trim();
        setText(newString);
        showAlert('Removed all Extra spaces from the text' )
    }
    const capitalize1=()=>{
        var newString="";
        newString=newString+text[0].toUpperCase();
        for(let i=1;i<text.length;i++){
            if(text[i-1]===' '){
                newString=newString+text[i].toUpperCase();
            }
            else{
                newString=newString+text[i].toLowerCase();
            }
        }
        setText(newString);
        showAlert('Text has been Capitalized' )
    }
    const copy=()=>{
        navigator.clipboard.writeText(text);
        showAlert('Text has been copied to clipboard')
    }
  return (
    <div className={`container my-3 text-${props.mode==='light'?'black':'white'}`} >
                <Alert alert={alert}/>
        <h1>Enter Some Text Here</h1>
        <div>
            <div className="mb-3 ">
            <textarea className={`form-control text-${props.mode==='light'?'black':'white'}`} style={{backgroundColor:props.mode==='light'?'white':'gray'}} id="exampleFormControlTextarea1" rows="8" 
            value={text} onChange={handleChange} />
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'success':'info'} mx-2 my-2`} onClick={toLowerCase} alert={alert}>toLowerCase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'success':'info'} mx-2 my-2`} onClick={toUpperCase} alert={alert}>toUpperCase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'success':'info'} mx-2 my-2`} onClick={remove} alert={alert}>Remove extra spaces</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'success':'info'} mx-2 my-2`} onClick={capitalize1} alert={alert}>Capitalize</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'success':'info'} mx-2 my-2`} onClick={copy} alert={alert}>Copy to clipboard</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'success':'info'} mx-2 my-2`} onClick={clear} alert={alert}>Clear</button>
            <h2 className='mx-2 my-2'>Analyzing</h2>
            <p>{text.length} letters</p>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
            <h2 className='mx-2 my-2'>Preview</h2>
            <p>{text.length >0 ? text : 'Nothing to Preview'}</p>
        </div>
    </div>
  )
}
