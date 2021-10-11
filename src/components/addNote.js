import React from 'react'

const AddNote = () => {
    return (
        <div>
            <div style={{justifyContent: "center" }}>
                <input type="text" placeholder="Add a Note" className="form-control" />
                <button className="btn btn-success">+</button>
            </div>
        </div>
    )
}

export default AddNote
