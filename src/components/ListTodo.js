import React from 'react'
import ItemTodo from './ItemTodo'

const ListTodo = ({list,onDeleteTask}) => {
    return (
        <ul className="list-group w-75 mx-auto">
         {/* List of Item Todo Component*/}

         {list.map((taskTitle,index)=>(
              <ItemTodo 
                key={index} 
                id={index} 
                title={taskTitle}
                onDeleteTask={onDeleteTask}
                />
           
         ))}
     
      </ul>
    )
}

export default ListTodo




