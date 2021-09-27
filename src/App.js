import { useRef, useState } from "react";
import "./App.css"
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

const App = () => {

  const [ListTask, setlistTask] = useState([])
  //we add a backup for our listTask data
  const [ListTaskBackup, setlistTaskBackup] = useState([])

  const filterTaskInput = useRef("")

  const addNewTask = (newTask) => {
    //alert(newTask)
    if (newTask !== "") {
      setlistTask([...ListTask, newTask])
      //add the new value to our backup as well
      setlistTaskBackup([...ListTaskBackup, newTask])
    }

    else alert("task title should not be empty")

  }

  //delete task by id
  const deleteTaskById = (idTask) => {

    if (window.confirm("Are you sure?") === false) return;

    let newListTask = [...ListTask];
    newListTask = newListTask.filter((_, index) => index !== idTask)
    setlistTask([...newListTask])
    //delete the value from our backup as well
    setlistTaskBackup([...newListTask])
  }

  //filter tasks by title
  const filterTasksByTitle = () => {
    let query = filterTaskInput.current.value;
    //test if the query is empty get the backup state
    if (query === "") setlistTask([...ListTaskBackup])

    else {
      let newListTask = [...ListTask]
      newListTask = newListTask.filter((titleTask) => titleTask.includes(query))
      setlistTask([...newListTask])
    }

  }

  return (
    <>
      <div>
        {/*addTodo Component*/}
        <AddTodo addTaskToList={addNewTask} />
        <hr color="grey" />
        <div className="filter border w-50 mx-auto">

          {/*filter task input*/}

          <input type="text"
            placeholder="Filter task by title "
            className="form-control mx-auto"
            onKeyUp={filterTasksByTitle}
            ref={filterTaskInput} />

          <i className="fa fa-search" aria-hidden="true" />
        </div>

        {/*List Todo Component*/}
        <ListTodo
          list={ListTask}
          onDeleteTask={deleteTaskById}
        />

      </div>


    </>
  )
}

export default App




