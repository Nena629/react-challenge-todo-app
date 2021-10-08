import { useRef } from 'react'

const AddText = ({ addListText }) => {

  const inputText = useRef();

  const onAddText = () => {
    // alert(inputText.current.value)
    if (window.confirm("are you sure ?") === true) {

      addListText(inputText.current.value);
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
          onClick={() => onAddText()}> Add </button>
      </div>
    </div>
  )
}

export default AddText
