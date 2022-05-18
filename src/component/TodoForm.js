import React, {useState} from 'react'
import Todo from './Todo';

const TodoForm = () => {
    const [input, setInput]=useState("")
    const [todos, setTodos]=useState([]);
  const [check,setCheck]= useState(false) 
  const [editIndex,setEditIndex]= useState("")

    const handleChange=(event)=>{
      debugger
      const inputValue=event.target.value;
      setInput(inputValue);
    }

    const handleAdd=()=>{
      if(input===""){
        return
      }
  else {
      if(check=== false){
        setTodos([...todos,input]); 
    }
    else if(check=== true){{
     let editArr=[...todos]
    editArr.splice(editIndex,1,input)
     setTodos(editArr)
    }
    setCheck(false)
  }
    setInput("");
}
  }


    const handleDelete=(index)=>{
      debugger
      let arr=[...todos]
    arr.splice(index,1)
    setTodos(arr);
    setInput("");
    }

    const handleEdit=(index)=>{
     console.log(index)
      setCheck(true)
      setEditIndex(index);
      setInput(todos[index]);
  }

  return (
      <div>
 <form className='todo-form'>
     <input onChange={handleChange} value={input} type="text" placeholder='Add a todo' name="text" className='todo-input'/>
     <button type='button' className='todo-button' onClick={handleAdd}>Add</button>
 </form>
  

 {todos.map((todo,index) =>
 < Todo
 key={index}
 index={index}
 todo={todo}
 handleDelete={handleDelete}
 handleEdit={handleEdit}
 />
 )}


 </div>
  )
}

export default TodoForm;