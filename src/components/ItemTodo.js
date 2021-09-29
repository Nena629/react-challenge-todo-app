import React from 'react'
import "./ItemTodo.css"

const ItemTodo = ({title,id,onDeleteTask}) => {
    return (
        <div> 
          <li className="list-group-item m-2 border">
        <span>{title}</span> 
        {/*when you click on the btn the task is deleted*/}
     
        <button className="btn btn-danger float-end" 
         onClick= {()=>onDeleteTask(id)}>
        <i className="fa fa-trash" aria-hidden="true" />
        </button>

        
               
      </li>
            
        </div>
    )
}

export default ItemTodo
