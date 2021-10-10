import React, { useState } from 'react'
import AddNote from './components/AddNote'
import ListeNote from './components/ListeNote'

const App = () => {
   
    const [notes, setNotes] = useState([
        {id: 1, content: "note 1"},
        {id: 2, content: "note 2"}, 
        {id: 3, content: "note 3"}
    ])
    
      //copieNotes
    const [copieNotes, setCopieNotes] = useState([
    { id: 1, content: "Text 1 😄" },
    { id: 2, content: "Text 2 😄" },
    { id: 3, content: "Text 3 😄" }
    ])

   // Add note
    const addNewNote = (newNote) => {

        if (newNote !== "") {
          setNotes([...notes, { id: Math.random() * 100, content: newNote }])
          setCopieNotes([...notes, newNote])
        }
    }
    
    // Delete note  
    const deleteNoteById = (noteId) =>{
     //alert are you sure 
    if (window.confirm("Are you sure ?") === false) return
    // alert(noteId)
    let newList = [...notes]
    //suppression dans la copie 
    newList = newList.filter((t) => t.id !== noteId)
    //update state
    setNotes([...newList])
    setCopieNotes([...newList])
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Note app</h1>
        {/* listeNote*/}
            <AddNote addListNote= {addNewNote} />
            <hr />
            <div className="filter border w-50 mx-auto">
                <input type="text" placeholder="filter task by title" className="form-control" />
                <i className="fa fa-search" aria-hidden="true" />
            </div>
        {/* listeNote*/}
            <ListeNote list={notes} onDeleteNoteApp={deleteNoteById} />
        </div>

    )
    }
export default App
