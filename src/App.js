import React from 'react'
import AddNote from './components/addNote'
import ListeNote from './components/ListeNote'
import "./App.css"


const App = () => {
    return (
        <div className="j">
            <h1>Note app</h1>

            <AddNote />

            <hr />
            <div className="filter border w-50 mx-auto">
                <input type="text" placeholder="filter task by title" className="form-control" />
                <i className="fa fa-search" aria-hidden="true" />
            </div>

            <ListeNote />
        </div>

    )
}

export default App
