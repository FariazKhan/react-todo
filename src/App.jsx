import React, { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'

function App(){ 
    // States
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])
    const [todoTypes] = useState(['All', 'Incomplete', 'Completed'])
    
    // Functions
    useEffect(() => {
        getLocalTodos()
    }, [])
    useEffect(() => {
        filterhandler()
        setLocalTodos()
    }, [todos, status])
    function filterhandler(){
        switch(status){
        case 'completed':
            setFilteredTodos(todos.filter((todo) => todo.completed === true))
            break
        case 'incomplete':
            setFilteredTodos(todos.filter((todo) => todo.completed === false))
            break
        default:
            setFilteredTodos(todos)
        }
    }
    function setLocalTodos(){
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    function getLocalTodos(){
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let localTodos = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)))
            setTodos(localTodos)
        }
    }

    return (
        <div className="App">
            <header>
                <h1>Todo App!</h1>
                <br/>
                <hr/>
            </header>
            <Form todos={todos} todoTypes={todoTypes} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}></Form> 
            <List todos={todos} filteredTodos={filteredTodos} setTodos={setTodos}></List>
        </div>
    )
}


export default App
