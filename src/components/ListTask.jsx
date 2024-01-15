import React from 'react'

import { useSelector } from 'react-redux'
import { addTodo } from '../store/todo.slice'

function ListTask() {
    const todos = useSelector((state) => state.todos)
    console.log(todos)


  return (
    <div>
        {/* {todos.todos.map((e,i)=>{
            return <div key={i}>


               console.log(e)
            </div>
        })} */}
      
    </div>
  )
}

export default ListTask
