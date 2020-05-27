import React, { useState } from 'react'

export default function ToDos(props) {

    
    const todos = props.todoList.map((todo,index) => {
        return <Todo todo={todo} key={index} index={index} toggleComplete={props.toggleComplete} removeToDo={props.removeToDo} />
    })

    

    return (
        <div className='todos'>
            <ul>
                {todos}            
            </ul>
        </div>
    )
}

function Todo(props) {

    const [complete, setComplete] = useState('')

    const handleComplete = (i) => {
        props.toggleComplete(i);
        props.todo.isCompleted?setComplete('done'):setComplete('')
    }

    const handleRemove = (i) => {
        props.removeToDo(i);
    }
    
    return (
        <div className='todo'>
           <input type='checkbox' className='check-box' onClick={() => { handleComplete(props.index)}} ></input>
            <li className={complete}>{props.todo.task}</li>
             <button className='remove-todo' onClick={() => { handleRemove(props.index)}}>X</button>
        </div>    
        )
}
