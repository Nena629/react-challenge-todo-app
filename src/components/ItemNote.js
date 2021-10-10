import React from 'react'

const ItemNote = ({title, onDeleteListNote,id}) => {
    return (
        <li>
            <span> {title} </span>
            <button onClick={()=>onDeleteListNote(id)} className="btn">x</button>
        </li>

    )
}

export default ItemNote
