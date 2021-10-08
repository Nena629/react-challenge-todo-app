import React from 'react'

const ItemNote = ({title}) => {
    return (
        <li>
            <span> {title} </span>
            <button classname="btn btn-danger float-end">x</button>
        </li>

    )
}

export default ItemNote
