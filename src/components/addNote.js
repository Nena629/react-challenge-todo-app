import React from 'react'
import { useRef } from 'react'


const AddNote = ({addListNote}) => {

  const inputText = useRef();

  const onAddNote = () => {

      addListNote(inputText.current.value);
      inputText.current.value ="";
    // alert(inputText.current.value)
  
  }

  return (

    <div>
      <div className="add">
        <input type="text" className="form-control" placeholder=" Write your note" ref={inputText}
        />

        <button
          className="btn btn-outline-secondary"
          onClick={() => onAddNote()}> Add </button>
      </div>
    </div>
  )
}


export default AddNote
