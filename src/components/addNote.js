import React from 'react'
import { useRef } from 'react'


const AddNote = ({addListNote}) => {

  const inputText = useRef();


  
  

  return (

    <div style={{ margin: "30px", width: "1200px", justifyContent: "center" }}>
      <div className="add">
        <input
          type="text" className="form-control" placeholder=" write the text" ref={inputText}/>

        <button
          className="btn btn-outline-secondary"
          onClick={() => addListNote(inputText.current.value)}> Add </button>
      </div>
    </div>
  )
}


export default AddNote
