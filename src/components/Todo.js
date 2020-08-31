import React ,{useState} from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import TodoForm from './TodoForm';

const Todo=({todos,removeTodo,updateTodo})=> {
    const [edit,setEdit]=useState({
        id:null,
        value:''
    })

const submitUpdate = value =>{
    updateTodo(edit.id,value)
    setEdit({
        id:null,
        value:''
    })
}

if (edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
}

    return  todos.map((todo,index)=>
        <div className='todo-row' key={index}>
            <div key={todo.id} >
                {todo.text}
            </div>
            <div className='icons'>
            <BiEdit onClick={()=>setEdit({id:todo.id,value:todo.text})} className='edit-icon'/>
            <RiDeleteBin5Fill onClick={()=>removeTodo(todo.id)} className='delete-icon'/>
            </div>
        </div>
    )
}

export default Todo
