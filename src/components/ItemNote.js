import React from 'react'

const ItemNote = ({content}) => {
    console.log(content)
    return (
        <li>
            <span> {content} </span>
            <button classname="btn btn-danger float-end">x</button>
        </li>

    )
}

export default ItemNote
