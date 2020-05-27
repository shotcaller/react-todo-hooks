import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDos from './ToDos'


export default function ToDoList() {

    const [todo,setTodo] = useState({
        task: '',
        isCompleted: false
    })
    const [todoList,setTodoList] = useState([])


    const handleChange = (e) => {
        setTodo({
            task: e.target.value,
            isCompleted: false
        })
    }

    const addToDo = (e) => {
        if(e.key==='Enter')
        {
        setTodo({...todo,task:''})
        setTodoList([...todoList,todo])
    }
    }

    const toggleComplete = (i) => {
        const status = todoList[i].isCompleted
        let newArr = [...todoList]
        newArr[i].isCompleted = !status;
        setTodoList(newArr);
          
    }

    const removeToDo = (i) => {
            let oldArr = [...todoList]
            let newArr = oldArr.filter((todo,index) => {
                return index !== i
            })

            setTodoList(newArr)
    }

    return (
        <div className='todo-list'>
            <div className='title'>
                it's Done.
            </div>
            <ToDoForm handleChange={handleChange} addToDo={addToDo} todo={todo} />
            <ToDos todoList={todoList} toggleComplete={toggleComplete} removeToDo={removeToDo} />
        </div>
    )
}
