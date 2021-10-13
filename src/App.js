import React, { useState } from 'react'
import AddNote from './components/AddNote'
import ListeNote from './components/ListeNote'
import './App.css'
import { Note } from './models/Note'


const LIST_NOTE =[
    new Note (1,"note 1"),
    new Note (2, "note 2")
]
const App = () => {
   
    const [notes, setNotes] = useState(LIST_NOTE)
      //copieNotes
    const [copieNotes, setCopieNotes] = useState(LIST_NOTE)

   // Add note
    const addNewNote = (newNote) => {
      
         let newList = [...notes,new Note (notes.length+1, newNote)]
          setNotes([...newList])
          setCopieNotes([...newList])
        
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

    // Filter note
    const filterNote = (e) =>{

     let input_value = e.target.value;

        if (input_value === "") {
          setNotes([...copieNotes])
        }
        else {
          let newList = notes.filter((t) => t.content.includes(input_value))
          setNotes([...newList])
        }
    
    }

    return (

        <div className="b" style={{ textAlign: "center" }}>
            <h1>Note app</h1>
        {/* listeNote*/}
            <AddNote addListNote= {addNewNote} />
            <hr />

        {/* listeNote*/}    
            <div className="filter border w-50 mx-auto">
                <input onChange={filterNote} type="text" placeholder="Filter Note by title" className="form-control" />
                <i className="fa fa-search" aria-hidden="true" />
            </div>

        {/* listeNote*/}
            <ListeNote list={notes} onDeleteNoteApp={deleteNoteById} />
        </div>

    )
    }
export default App
