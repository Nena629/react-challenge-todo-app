import React, { useState } from 'react'
import AddNote from './components/AddNote'
import ListeNote from './components/ListeNote'


const App = () => {
   
    const [notes, setNotes] = useState([
        {id: 1, content: "note 1"},{id: 2, content: "note 2"}, {id: 3, content: "note 3"}
    ])
    
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Note app</h1>
        {/* listeNote*/}
            <AddNote/>
            <hr />
            <div className="filter border w-50 mx-auto">
                <input type="text" placeholder="filter task by title" className="form-control" />
                <i className="fa fa-search" aria-hidden="true" />
            </div>
        {/* listeNote*/}
            <ListeNote list={notes} />
        </div>

    )
}

export default App
