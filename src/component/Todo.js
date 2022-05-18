import React from 'react'

const Todo = (props) => {
    
  return (
    <div key={props.key} className='todo-item'>
 <li > 

  <p className='todo-item-p'>{props.todo}</p>
  <button className='todo-item-delete'  onClick={()=> props.handleDelete(props.index)}>Delete</button>
  <button className='todo-item-edit' onClick={()=> props.handleEdit(props.index)}>Edit</button>
 </li>
 </div>
   
  )
}

export default Todo