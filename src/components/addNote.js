import React from 'react'
import { useRef } from 'react'


const AddNote = ({addListNote}) => {

  const inputText = useRef();

  const onAddNote = () => {
    // alert(inputText.current.value)
    if (window.confirm("are you sure ?") === true) {
     addListNote(inputText.current.value);
    }
  
  }

  return (

    <div style={{ margin: "30px", width: "1200px", justifyContent: "center" }}>
      <div className="add">
        <input
          type="text" className="form-control" placeholder=" write the text" ref={inputText}
        />

        <button
          className="btn btn-outline-secondary"
          onClick={() => onAddNote()}> Add </button>
      </div>
    </div>
  )
}


export default AddNote
