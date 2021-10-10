import React from 'react'

const ItemNote = ({title, onDeleteListNote,id}) => {
    return (
        <div>
            <span> {title} </span>
            <button onClick={()=>onDeleteListNote(id)} className="btn">x</button>
        </div>

    )
}

export default ItemNote
