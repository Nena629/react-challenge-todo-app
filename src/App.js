import React from 'react'
import ListeNote from './components/ListeNote'


const App = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Note app</h1>

            <addNote />

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
